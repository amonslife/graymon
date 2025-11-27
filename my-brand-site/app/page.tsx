import Link from "next/link";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import { BRAND_NAME, BRAND_TAGLINE } from "@/lib/config";

const services = [
  {
    title: "Personal development",
    description:
      "Coaching and guidance to help you think clearer, act with confidence, and move toward the life you want.",
  },
  {
    title: "Performance marketing",
    description:
      "Campaigns, funnels, and creatives focused on real results – not just clicks.",
  },
  {
    title: "Website & design",
    description:
      "Clean, modern websites that make you look professional and help you convert visitors into clients.",
  },
  {
    title: "AI & innovations",
    description:
      "Practical AI tools and automations that save time, reduce manual work, and strengthen your decisions.",
  },
];

const previewProjects = [
  {
    name: "Project One",
    type: "Web design & development",
  },
  {
    name: "Project Two",
    type: "Landing page & funnel",
  },
  {
    name: "Project Three",
    type: "Ecommerce & automations",
  },
];

const previewTestimonials = [
  {
    name: "Client A",
    quote:
      "Working with the team brought structure into my business. We didn’t just talk – we built systems that still work today.",
  },
  {
    name: "Client B",
    quote:
      "I appreciated the empathetic approach and clear guidance. It helped me see my situation differently and make decisions I was postponing.",
  },
];

export default function Page() {
  return (
    <>
      <Section>
        <div className="grid md:grid-cols-[1.2fr,1fr] gap-10 items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 mb-4">
              Growth studio
            </p>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
              We help people and brands reach their next level.
            </h1>
            <p className="text-sm md:text-base text-neutral-300 max-w-xl mb-8">
              Mindset, marketing, design, and AI – combined into simple systems
              that help you actually reach your goals. {BRAND_NAME} works with
              you, not instead of you.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-medium bg-white text-black hover:bg-neutral-200 transition"
              >
                Contact us
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-medium border border-neutral-700 hover:border-neutral-400 text-neutral-100"
              >
                Explore services
              </Link>
            </div>
            <p className="text-xs text-neutral-500 mt-4">
              {BRAND_TAGLINE}
            </p>
          </div>

          <div className="hidden md:block">
            <div className="border border-neutral-800 rounded-2xl p-6">
              <p className="text-sm text-neutral-300 mb-4">
                “Goals don’t become reality by themselves. You need clarity,
                systems, and people who can help you build them.”
              </p>
              <p className="text-xs text-neutral-500">
                – Founder, {BRAND_NAME}
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader title="What we do">
          {BRAND_NAME} is a small team that loves progress. We help individuals
          and companies grow through personal development, performance
          marketing, modern websites, and smart AI-powered tools.
        </SectionHeader>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-neutral-800 rounded-xl p-5 hover:border-neutral-600 transition"
            >
              <h3 className="text-base md:text-lg font-medium mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-neutral-300">{service.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader title="Why people work with us" />
        <div className="mt-6 grid md:grid-cols-2 gap-6 text-sm text-neutral-300">
          <ul className="space-y-3">
            <li>• We connect mindset and execution – not just one or the other.</li>
            <li>• We focus on clear, simple systems instead of overcomplicated theory.</li>
            <li>• We work as a team: one person can’t be the best at everything.</li>
          </ul>
          <ul className="space-y-3">
            <li>• We care about long-term results, not quick hacks.</li>
            <li>• We adapt to your situation, instead of forcing a rigid template.</li>
            <li>• We keep communication honest and straightforward.</li>
          </ul>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <SectionHeader
            eyebrow="Content"
            title="Podcasts & videos"
          >
            Before you work with us, you can get to know how we think. We share
            honest views about growth, mindset, business, and modern tools
            through podcasts and videos.
          </SectionHeader>
          <div className="flex flex-col gap-3 text-sm text-neutral-300">
            <p>Topics we talk about:</p>
            <ul className="space-y-2">
              <li>• Personal development & mindset</li>
              <li>• Building and growing a business</li>
              <li>• Performance marketing and funnels</li>
              <li>• AI tools, automations, and modern tech</li>
            </ul>
            <Link
              href="/podcasts-videos"
              className="inline-flex mt-4 items-center justify-center px-4 py-2 rounded-full text-sm font-medium border border-neutral-700 hover:border-neutral-400"
            >
              Explore podcasts & videos
            </Link>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader title="Selected projects">
          A few examples of websites and digital work we’ve done with clients.
        </SectionHeader>
        <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm">
          {previewProjects.map((project) => (
            <div
              key={project.name}
              className="border border-neutral-800 rounded-xl p-5 flex flex-col justify-between hover:border-neutral-600 transition"
            >
              <div>
                <h3 className="font-medium mb-1 text-neutral-100">
                  {project.name}
                </h3>
                <p className="text-xs uppercase tracking-[0.16em] text-neutral-500 mb-3">
                  {project.type}
                </p>
                <p className="text-neutral-300">
                  Short description of what was done and what changed for the client.
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-medium border border-neutral-700 hover:border-neutral-400"
          >
            See full portfolio
          </Link>
        </div>
      </Section>

      <Section>
        <SectionHeader title="What clients say" />
        <div className="mt-8 grid gap-6 md:grid-cols-2 text-sm">
          {previewTestimonials.map((t) => (
            <div
              key={t.name}
              className="border border-neutral-800 rounded-xl p-5"
            >
              <p className="text-neutral-200 mb-3">&ldquo;{t.quote}&rdquo;</p>
              <p className="text-xs text-neutral-500">– {t.name}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/testimonials"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-medium border border-neutral-700 hover:border-neutral-400"
          >
            Read more testimonials
          </Link>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
            Ready to move closer to your goals — not just think about them?
          </h2>
          <p className="text-sm md:text-base text-neutral-300 mb-6">
            Tell us what you’re working on. We’ll see if and how we can help,
            and suggest clear next steps.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-medium bg-white text-black hover:bg-neutral-200 transition"
          >
            Contact us
          </Link>
        </div>
      </Section>
    </>
  );
}
