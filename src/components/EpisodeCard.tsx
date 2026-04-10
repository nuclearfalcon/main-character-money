import { Episode } from "@/data/episodes";

export default function EpisodeCard({ episode }: { episode: Episode }) {
  return (
    <article className="bg-card rounded-xl border border-border p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <span className="bg-terracotta text-white text-xs font-bold px-3 py-1 rounded-full">
          EP {episode.number}
        </span>
        <span className="text-muted text-sm">{episode.date}</span>
        <span className="text-muted text-sm">&middot; {episode.duration}</span>
      </div>
      <h3 className="text-lg font-bold text-card-foreground mb-2">
        {episode.title}
      </h3>
      <p className="text-muted text-sm leading-relaxed mb-4">
        {episode.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {episode.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium px-3 py-1 rounded-full bg-sage/10 text-sage border border-sage/20"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
