"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BRAND_NAME } from "@/lib/config";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/podcasts-videos", label: "Podcasts & Videos" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-neutral-800 sticky top-0 z-50 bg-black/90 backdrop-blur">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 border border-neutral-600 rounded-full flex items-center justify-center text-xs">
            <span>D</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold tracking-tight">{BRAND_NAME}</span>
            <span className="text-xs text-neutral-400">Growth & Digital Studio</span>
          </div>
        </Link>

        <nav className="hidden md:flex gap-6 text-sm">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-neutral-100 transition ${
                  active ? "text-white font-medium" : "text-neutral-400"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          className="md:hidden text-sm text-neutral-300 border border-neutral-600 px-3 py-1 rounded-full"
          onClick={() => setOpen(!open)}
        >
          Menu
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-neutral-800 bg-black/95">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2 text-sm">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-1 ${
                    active ? "text-white font-medium" : "text-neutral-400"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
