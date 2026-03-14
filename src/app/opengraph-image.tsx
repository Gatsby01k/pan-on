import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 48,
          background: 'linear-gradient(135deg, #05060a 0%, #11070d 55%, #2a090d 100%)',
          color: 'white',
          fontFamily: 'Arial',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 56, height: 56, borderRadius: 16, border: '1px solid rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.04)' }}>
            <div style={{ fontSize: 28 }}>♛</div>
          </div>
          <div style={{ fontSize: 28, letterSpacing: 2, textTransform: 'uppercase', opacity: 0.9 }}>VlaDDoS PAN</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 900 }}>
          <div style={{ fontSize: 64, lineHeight: 1.03, fontWeight: 700 }}>Private Affiliate Network for iGaming & Crypto Traffic</div>
          <div style={{ fontSize: 28, lineHeight: 1.35, color: 'rgba(255,255,255,0.78)' }}>
            Selective partner intake, SEO authority pages, Telegram-first routing, CPA and RevShare deal flow.
          </div>
        </div>

        <div style={{ display: 'flex', gap: 14, fontSize: 22, color: 'rgba(255,255,255,0.82)' }}>
          <div>Private entry</div>
          <div>•</div>
          <div>Direct counterparties</div>
          <div>•</div>
          <div>Growth system</div>
        </div>
      </div>
    ),
    size,
  );
}
