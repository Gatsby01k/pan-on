import { NextResponse } from 'next/server';

const requiredFields = [
  'name',
  'email',
  'telegram',
  'trafficType',
  'monthlyVolume',
  'topGeo',
] as const;

type RequiredField = (typeof requiredFields)[number];
type LeadKey = RequiredField | 'company' | 'message';

type LeadPayload = Record<LeadKey, string>;

function escapeHtml(input: string) {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function validate(payload: Partial<LeadPayload>) {
  const missing = requiredFields.filter((field) => !payload[field]?.trim());

  if (missing.length) {
    return `Missing required fields: ${missing.join(', ')}`;
  }

  if (!payload.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return 'Please provide a valid email address.';
  }

  return null;
}

function buildTelegramMessage(payload: LeadPayload) {
  return [
    'NEW PAN LEAD',
    '',
    `Name: ${payload.name}`,
    `Company: ${payload.company || '-'}`,
    `Email: ${payload.email}`,
    `Telegram: ${payload.telegram}`,
    `Traffic: ${payload.trafficType}`,
    `Monthly volume: ${payload.monthlyVolume}`,
    `Top GEO: ${payload.topGeo}`,
    `Message: ${payload.message || '-'}`,
  ].join('\n');
}

export async function POST(request: Request) {
  const payload = (await request.json()) as Partial<LeadPayload>;
  const validationError = validate(payload);

  if (validationError) {
    return NextResponse.json({ ok: false, error: validationError }, { status: 400 });
  }

  const leadKeys: LeadKey[] = [...requiredFields, 'company', 'message'];

  const lead = Object.fromEntries(
    leadKeys.map((key) => [key, (payload[key] ?? '').trim()])
  ) as LeadPayload;

  const result = {
    telegramSent: false,
    webhookSent: false,
    storedFallback: false,
  };

  const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
  const telegramChatId = process.env.TELEGRAM_CHAT_ID;

  if (telegramBotToken && telegramChatId) {
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: buildTelegramMessage(lead),
        }),
        cache: 'no-store',
      }
    );

    result.telegramSent = telegramResponse.ok;
  }

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;

  if (webhookUrl) {
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...lead,
        source: 'join_form',
        submittedAt: new Date().toISOString(),
      }),
      cache: 'no-store',
    });

    result.webhookSent = webhookResponse.ok;
  }

  if (!result.telegramSent && !result.webhookSent) {
    console.log('PAN lead fallback', lead);
    result.storedFallback = true;
  }

  return NextResponse.json({
    ok: true,
    message:
      result.telegramSent || result.webhookSent
        ? 'Application received. We will review it and move qualified conversations into Telegram quickly.'
        : 'Application received. Configure TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID or LEAD_WEBHOOK_URL to enable instant delivery.',
    delivery: result,
    safePreviewHtml: buildTelegramMessage(lead)
      .split('\n')
      .map((line) => escapeHtml(line))
      .join('<br/>'),
  });
}
