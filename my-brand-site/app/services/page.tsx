import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";

export default function ServicesPage() {
  return (
    <>
      <Section>
        <SectionHeader title="Services">
          We focus on five main areas. You can start with just one or combine
          them into a complete system.
        </SectionHeader>
      </Section>

      <Section>
        <SectionHeader title="Consulting">
          We help you see your situation clearly and make better decisions. From
          business structure to internal processes and strategy, consulting is
          where we solve specific problems and unlock new opportunities.
        </SectionHeader>
        <div className="mt-6 text-sm md:text-base text-neutral-300 max-w-3xl space-y-3">
          <p>Areas we typically work on:</p>
          <ul className="space-y-2">
            <li>• Analysis of current situation and bottlenecks</li>
            <li>• Clear prioritization of what to fix first</li>
            <li>• Practical recommendations instead of generic theory</li>
          </ul>
        </div>
      </Section>

      <Section>
        <SectionHeader title="Personal development">
          Real change starts inside. We work with you on clarity, habits,
          priorities, and mindset so that you can actually move toward the life
          and results you want.
        </SectionHeader>
        <div className="mt-6 grid md:grid-cols-2 gap-6 text-sm text-neutral-300">
          <div className="space-y-3">
            <h3 className="font-medium text-neutral-100">Life & mindset coaching</h3>
            <p>
              1:1 sessions focused on clarity, mental balance, and direction –
              especially when you feel stuck or pulled in too many directions.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-medium text-neutral-100">Career & job decisions</h3>
            <p>
              Support for people who want to change direction, start something
              new, or finally move forward in their career.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-medium text-neutral-100">Mindful growth</h3>
            <p>
              Working on awareness, focus, and emotional stability so that you
              can handle more responsibility without burning out.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-medium text-neutral-100">Wellness & vitality</h3>
            <p>
              Simple routines and systems that support your energy, not just
              your schedule – sleep, movement, and basic health habits.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader title="Performance marketing">
          We design campaigns and funnels that bring real leads and clients, not
          just “traffic”.
        </SectionHeader>
        <div className="mt-6 grid md:grid-cols-2 gap-6 text-sm text-neutral-300">
          <div className="space-y-3">
            <h3 className="font-medium text-neutral-100">Video creatives</h3>
            <p>
              Short-form videos that catch attention and explain value fast.
              We focus on hooks, clarity, and relevance – not just fancy visuals.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-medium text-neutral-100">Lead qualification</h3>
            <p>
              Landing pages and multi-step forms that filter out people who
              aren’t serious, so you spend your time only with real prospects.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-medium text-neutral-100">Full campaign management</h3>
            <p>
              From strategy and setup to optimization and reporting. You always
              know what is happening and why.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-medium text-neutral-100">Simple CRM & follow-up systems</h3>
            <p>
              Systems to handle leads, follow-ups, and deals so no opportunity
              is lost – adapted to your tools and team.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader title="Website & design">
          Your website is often the first serious contact people have with your
          brand. It should be clean, easy to use, and clearly communicate who
          you are and what you offer.
        </SectionHeader>
        <div className="mt-6 grid md:grid-cols-2 gap-6 text-sm text-neutral-300">
          <div className="space-y-3">
            <h3 className="font-medium text-neutral-100">Modern landing pages</h3>
            <p>
              Focused pages that turn visitors into sign-ups or customers, with
              a clear message and simple flow.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-medium text-neutral-100">Full company websites</h3>
            <p>
              Multi-page sites with structure, content, and basic SEO – ready to
              grow with your brand.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-medium text-neutral-100">Ecommerce & online offers</h3>
            <p>
              Stores or simple payment flows depending on what you sell, with a
              focus on usability and trust.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-medium text-neutral-100">Brand & visual direction</h3>
            <p>
              Consistent look and feel across your website and online profiles,
              so people instantly recognize you.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader title="AI & innovations">
          AI should save you time and improve decisions, not confuse you. We
          help you introduce AI tools in a way that actually fits your work and
          your team.
        </SectionHeader>
        <div className="mt-6 grid md:grid-cols-2 gap-6 text-sm text-neutral-300">
          <div className="space-y-3">
            <h3 className="font-medium text-neutral-100">AI strategy & roadmap</h3>
            <p>
              We identify where AI can help in your business and what to start
              with, so you don’t waste time on the wrong tools.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-medium text-neutral-100">Automations & workflows</h3>
            <p>
              Connecting tools so repetitive tasks run automatically – from
              leads and follow-ups to internal communication.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-medium text-neutral-100">AI in marketing & content</h3>
            <p>
              Using AI for research, ideas, drafts, and testing – with human
              quality control so it still feels like you.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-medium text-neutral-100">AI for personal productivity</h3>
            <p>
              Tools and setups for you as a founder or professional: notes,
              ideas, planning, and decision support in your daily work.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
