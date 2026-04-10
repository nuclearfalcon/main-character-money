import EpisodeCard from "@/components/EpisodeCard";
import { episodes } from "@/data/episodes";

export default function EpisodesPage() {
  return (
    <section className="py-20 bg-warm-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-sage font-semibold text-sm tracking-widest uppercase mb-4">
            All Episodes
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight">
            Every episode,{" "}
            <span className="italic text-terracotta">one place</span>
          </h1>
          <p className="mt-4 text-muted text-lg max-w-2xl">
            Binge them all or pick the topics that speak to you. Either way,
            you&apos;re making a power move.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {episodes.map((ep) => (
            <EpisodeCard key={ep.number} episode={ep} />
          ))}
        </div>
      </div>
    </section>
  );
}
