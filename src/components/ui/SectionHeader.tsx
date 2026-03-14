import { ReactNode } from "react";

export default function SectionHeader({
  eyebrow,
  title,
  text,
  aside,
}: {
  eyebrow: string;
  title: string;
  text: string;
  aside?: ReactNode;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-[1.35fr_.65fr] md:items-end">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h2 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight text-white sm:text-4xl">{title}</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-white/68 sm:text-base">{text}</p>
      </div>
      {aside ? <div className="panel p-5">{aside}</div> : null}
    </div>
  );
}
