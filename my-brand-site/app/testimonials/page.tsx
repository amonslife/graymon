import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";

const testimonials = [
  {
    name: "Client A",
    role: "Founder",
    quote:
      "Working with the team brought structure into my business. We didn’t just talk – we built systems that still work today.",
  },
  {
    name: "Client B",
    role: "Manager",
    quote:
      "I appreciated the empathetic approach and clear guidance. It helped me see my situation differently and make decisions I was postponing.",
  },
  {
    name: "Client C",
    role: "Entrepreneur",
    quote:
      "The website and marketing setup quickly started bringing in real leads. Communication was honest and straightforward the whole time.",
  },
  {
    name: "Client D",
    role: "Professional",
    quote:
      "The mix of personal development and practical strategy was exactly what I needed to move forward.",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <Section>
        <SectionHeader title="What our clients say">
          A few words from people we’ve worked with. Names and details can be
          adjusted to match your real clients.
        </SectionHeader>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="border border-neutral-800 rounded-xl p-5"
            >
              <p className="text-neutral-200 mb-3">&ldquo;{t.quote}&rdquo;</p>
              <p className="text-xs text-neutral-500">
                – {t.name} {t.role && `• ${t.role}`}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
