import { BRAND_NAME, CONTACT_EMAIL, SOCIALS } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-neutral-400">
        <div>
          <div className="font-medium text-neutral-200">{BRAND_NAME}</div>
          <div className="text-xs mt-1">
            © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-neutral-200">
            {CONTACT_EMAIL}
          </a>
          {SOCIALS.instagram && (
            <a
              href={SOCIALS.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-200"
            >
              Instagram
            </a>
          )}
          {SOCIALS.youtube && (
            <a
              href={SOCIALS.youtube}
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-200"
            >
              YouTube
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
