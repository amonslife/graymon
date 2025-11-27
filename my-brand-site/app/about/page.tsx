import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import { BRAND_NAME } from "@/lib/config";

export default function AboutPage() {
  return (
    <>
      <Section>
        <SectionHeader title={`About ${BRAND_NAME}`}>
          {BRAND_NAME} is a small, focused team led by Dalo. We combine
          experience from personal development, online business, marketing, and
          tech to help people and brands grow in a grounded, modern way.
        </SectionHeader>
        <div className="mt-8 space-y-4 text-sm md:text-base text-neutral-300 max-w-3xl">
          <p>
            We don’t promise miracles. We work with you to clarify what you
            really want, and then we build the systems and habits to support it.
          </p>
          <p>
            Some things we handle for you, some things we build together, and
            some things are simple changes in how you think and work. The goal
            is always the same: progress that actually feels real.
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeader title="Our approach" />
        <div className="mt-6 grid md:grid-cols-2 gap-6 text-sm text-neutral-300">
          <ul className="space-y-3">
            <li>• Everything starts with you – your mindset, clarity, and decisions.</li>
            <li>• Then comes the system – marketing, content, website, and tools.</li>
          </ul>
          <ul className="space-y-3">
            <li>• Then comes the data – what works, what doesn’t, what to change.</li>
            <li>• Then comes consistency – growth as a process, not a one-time event.</li>
          </ul>
        </div>
      </Section>

      <Section>
        <SectionHeader title="How we work with clients" />
        <ol className="mt-6 space-y-4 text-sm md:text-base text-neutral-300 max-w-3xl list-decimal list-inside">
          <li>
            <strong>Listening first</strong> – we understand your story, goals,
            and current situation.
          </li>
          <li>
            <strong>Finding the leverage points</strong> – where small changes
            can bring big results.
          </li>
          <li>
            <strong>Creating a plan</strong> – mindset, marketing, web, and
            tools in one simple roadmap.
          </li>
          <li>
            <strong>Executing together</strong> – some things done by us, some
            by you and your team.
          </li>
        </ol>
      </Section>
    </>
  );
}
