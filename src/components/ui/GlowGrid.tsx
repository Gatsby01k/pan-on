export default function GlowGrid({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <div
          key={item}
          className="rounded-[1.6rem] border border-white/8 bg-white/[0.03] px-4 py-4 text-sm text-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
        >
          {item}
        </div>
      ))}
    </div>
  );
}
