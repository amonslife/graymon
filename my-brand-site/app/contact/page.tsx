import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import { BRAND_NAME, CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/config";

export default function ContactPage() {
  return (
    <>
      <Section>
        <SectionHeader title="Contact">
          Tell us a bit about yourself and what you’d like to work on. We’ll get
          back to you with the next steps.
        </SectionHeader>
      </Section>

      <Section>
        <div className="grid md:grid-cols-[2fr,1fr] gap-10">
          <form
            className="space-y-4 text-sm"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-neutral-400 mb-1">
                  Name
                </label>
                <input
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-md px-3 py-2 text-sm text-neutral-100 outline-none focus:border-neutral-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs text-neutral-400 mb-1">
                  Email
                </label>
                <input
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-md px-3 py-2 text-sm text-neutral-100 outline-none focus:border-neutral-500"
                  placeholder="you@example.com"
                  type="email"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-neutral-400 mb-1">
                What would you like help with?
              </label>
              <select className="w-full bg-neutral-950 border border-neutral-800 rounded-md px-3 py-2 text-sm text-neutral-100 outline-none focus:border-neutral-500">
                <option>Personal development</option>
                <option>Performance marketing</option>
                <option>Website & design</option>
                <option>AI & innovations</option>
                <option>Not sure yet</option>
              </select>
            </div>

            <div>
              <label className="block text-xs text-neutral-400 mb-1">
                Message
              </label>
              <textarea
                className="w-full bg-neutral-950 border border-neutral-800 rounded-md px-3 py-2 text-sm text-neutral-100 outline-none focus:border-neutral-500 min-h-[120px]"
                placeholder="Tell us a bit about your situation and goals..."
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-medium bg-white text-black hover:bg-neutral-200 transition"
            >
              Send message
            </button>
            <p className="text-xs text-neutral-500 mt-2">
              This form does not send anywhere yet – you can connect it to your
              backend, form tool, or email service.
            </p>
          </form>

          <div className="text-sm text-neutral-300 space-y-4">
            <div>
              <h3 className="text-sm font-medium text-neutral-100 mb-2">
                Direct contact
              </h3>
              <p>
                Email:{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="underline hover:text-neutral-100"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p>Phone: {CONTACT_PHONE}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-neutral-100 mb-2">
                About {BRAND_NAME}
              </h3>
              <p>
                {BRAND_NAME} is a small team helping people and brands reach
                their next level through mindset, marketing, design, and AI.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
