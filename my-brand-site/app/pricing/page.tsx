import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";

const plans = [
  {
    name: "Landing page",
    price: "from $3,800",
    description:
      "A focused, modern landing page to present one offer clearly and convert visitors.",
    features: [
      "Modern, responsive design",
      "Clear structure and copy",
      "Simple animations",
      "Basic SEO",
      "Contact form setup",
      "Custom domain and SSL",
    ],
  },
  {
    name: "Website",
    price: "from $7,800",
    description:
      "A multi-page website for your brand or company, ready to grow with you.",
    features: [
      "Multi-page layout",
      "Advanced animations",
      "Optional multiple languages",
      "Integrations (newsletter, booking, etc.)",
      "Blog or resources section (optional)",
    ],
  },
  {
    name: "Ecommerce / custom",
    price: "from $8,800",
    description:
      "For online stores or custom web apps tailored to your business model.",
    features: [
      "Platform chosen based on your needs",
      "Product pages and cart",
      "Basic automation flows",
      "Integrations with tools you use",
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <Section>
        <SectionHeader title="Pricing">
          Every project is different, but these ranges will give you a basic
          idea of what to expect. For an exact quote, contact us with your idea.
        </SectionHeader>
      </Section>

      <Section>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="border border-neutral-800 rounded-xl p-6 flex flex-col"
            >
              <div className="mb-4">
                <h3 className="font-medium text-neutral-100 mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-neutral-200 mb-2">{plan.price}</p>
                <p className="text-neutral-300">{plan.description}</p>
              </div>
              <ul className="mt-4 space-y-2 text-neutral-300">
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
