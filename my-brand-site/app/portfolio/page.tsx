import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";

const projects = [
  {
    name: "Client Website Alpha",
    type: "Web design & development",
    description:
      "A clean, modern website for a service-based business, focused on clarity and conversions.",
  },
  {
    name: "Launch Landing Page",
    type: "Landing page & funnel",
    description:
      "A focused landing page with email capture and follow-up sequence for a product launch.",
  },
  {
    name: "Ecommerce Rebuild",
    type: "Ecommerce & automation",
    description:
      "Improved structure, design, and checkout flow, plus simple automations around abandoned carts.",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Section>
        <SectionHeader title="Portfolio">
          A selection of websites and digital projects we’ve worked on with
          clients. Each project is different, but the goal is always the same:
          clarity, simplicity, and results.
        </SectionHeader>
      </Section>

      <Section>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          {projects.map((project) => (
            <div
              key={project.name}
              className="border border-neutral-800 rounded-xl p-5 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-medium text-neutral-100 mb-1">
                  {project.name}
                </h3>
                <p className="text-xs uppercase tracking-[0.16em] text-neutral-500 mb-3">
                  {project.type}
                </p>
                <p className="text-neutral-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
