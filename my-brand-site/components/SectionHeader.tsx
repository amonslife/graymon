import { ReactNode } from "react";

export default function SectionHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="max-w-3xl">
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
        {title}
      </h2>
      {children && (
        <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
          {children}
        </p>
      )}
    </header>
  );
}
