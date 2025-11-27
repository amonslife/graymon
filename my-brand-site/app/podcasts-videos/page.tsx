import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";

const podcasts = [
  {
    title: "How to Think About Growth in 2025",
    description:
      "Why most people overcomplicate growth and what simple principles actually help you move forward.",
    duration: "32 min",
  },
  {
    title: "Using AI Without Losing the Human Side",
    description:
      "How to combine AI tools with your own experience and judgment in business and life.",
    duration: "27 min",
  },
];

const videos = [
  {
    title: "3 Simple Systems That Keep You Focused",
    description:
      "A short breakdown of three practical systems you can use to stay on track with your goals.",
  },
  {
    title: "How We Would Start With Performance Marketing Today",
    description:
      "The essential steps to setting up campaigns that actually convert, without burning your budget.",
  },
];

export default function PodcastsVideosPage() {
  return (
    <>
      <Section>
        <SectionHeader title="Podcasts & videos">
          Here you’ll find our latest episodes and videos about growth, mindset,
          business, marketing, and AI. No empty motivation – just practical
          views and real stories.
        </SectionHeader>
      </Section>

      <Section>
        <SectionHeader eyebrow="Audio" title="Latest podcast episodes" />
        <div className="mt-6 grid md:grid-cols-2 gap-6 text-sm">
          {podcasts.map((episode) => (
            <div
              key={episode.title}
              className="border border-neutral-800 rounded-xl p-5 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-medium text-neutral-100 mb-1">
                  {episode.title}
                </h3>
                <p className="text-xs text-neutral-500 mb-3">
                  {episode.duration} • Podcast
                </p>
                <p className="text-neutral-300 mb-4">
                  {episode.description}
                </p>
              </div>
              <button className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-medium border border-neutral-700 text-neutral-100 hover:border-neutral-400">
                Listen (link your platform)
              </button>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Video" title="Latest videos" />
        <div className="mt-6 grid md:grid-cols-2 gap-6 text-sm">
          {videos.map((video) => (
            <div
              key={video.title}
              className="border border-neutral-800 rounded-xl p-5 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-medium text-neutral-100 mb-2">
                  {video.title}
                </h3>
                <p className="text-neutral-300 mb-4">{video.description}</p>
              </div>
              <button className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-medium border border-neutral-700 text-neutral-100 hover:border-neutral-400">
                Watch (link your video)
              </button>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader title="Topics we cover" />
        <ul className="mt-6 grid md:grid-cols-2 gap-3 text-sm text-neutral-300">
          <li>• Personal development & mindset</li>
          <li>• Reaching goals in a realistic way</li>
          <li>• Building and growing a business</li>
          <li>• Performance marketing and funnels</li>
          <li>• AI tools, automations, and modern tech</li>
          <li>• Stories and lessons from real people</li>
        </ul>
      </Section>
    </>
  );
}
