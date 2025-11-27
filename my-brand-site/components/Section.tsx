import { ReactNode } from "react";

export default function Section({
  id,
  children,
}: {
  id?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-b border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {children}
      </div>
    </section>
  );
}
