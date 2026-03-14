# PAN lead capture setup

This project now supports a production-ready join form with two delivery paths:

1. Telegram instant lead alerts via bot API
2. Webhook delivery to Google Sheets, Apps Script, Zapier, Make, or a CRM

## Minimum setup

Copy `.env.example` to `.env.local` and fill at least one of these:

- `TELEGRAM_BOT_TOKEN` + `TELEGRAM_CHAT_ID`
- `LEAD_WEBHOOK_URL`

## Recommended operating setup

- Telegram bot for instant alerts to the owner desk
- Apps Script or automation webhook that stores every lead in Google Sheets
- Page analytics enabled in Google Analytics

## Example Apps Script webhook payload

The join form sends JSON with:

- `name`
- `company`
- `email`
- `telegram`
- `trafficType`
- `monthlyVolume`
- `topGeo`
- `message`
- `source`
- `submittedAt`

## Launch checklist

- Configure bot token and target chat
- Configure a webhook to store leads
- Test one submit from `/join`
- Confirm Telegram message arrives in under 1 minute
- Confirm row is written to Google Sheets or CRM
