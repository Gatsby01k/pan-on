import Link from "next/link";

export type BreadcrumbItem = {
  href: string;
  label: string;
};

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.16em] text-white/40">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.href}-${item.label}`} className="flex items-center gap-2">
              {last ? (
                <span className="text-white/64">{item.label}</span>
              ) : (
                <Link href={item.href} className="transition hover:text-white/82">
                  {item.label}
                </Link>
              )}
              {!last ? <span className="text-white/22">/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
