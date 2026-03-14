export default function BackgroundShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_10%,rgba(222,18,2,0.20),transparent_26%),radial-gradient(circle_at_86%_14%,rgba(222,18,2,0.12),transparent_22%),radial-gradient(circle_at_50%_100%,rgba(222,18,2,0.10),transparent_34%),linear-gradient(180deg,rgba(6,6,6,0.45),rgba(8,5,5,0.72),rgba(5,5,5,0.96))]" />
        <div className="absolute inset-0 grid-fade" />
        <div className="absolute inset-0 noise scanlines" />
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
