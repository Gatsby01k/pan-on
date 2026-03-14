# VlaDDoS PAN

Private Affiliate Network website built on Next.js 14, React 18, TypeScript, and Tailwind CSS.

## What changed

The project now includes the core commercial pages needed to reduce ongoing site edits and push more time into partner acquisition and deal flow:

- Working `/join` lead capture form
- `/api/lead` intake endpoint
- Telegram alert + webhook-ready lead delivery
- `/offers` page
- `/case-studies` page
- `/partners` page
- Extra insight articles for SEO and trust
- CTA event tracking helpers
- `.env.example` and `SETUP.md` for one-time launch setup

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Lead routing setup

Copy `.env.example` to `.env.local` and configure at least one delivery path:

- `TELEGRAM_BOT_TOKEN` + `TELEGRAM_CHAT_ID`
- `LEAD_WEBHOOK_URL`

Use `SETUP.md` for the full checklist.
