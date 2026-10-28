/**
 * TagList — a row of small pills for skills or topics.
 * Shared by ProjectCard (project tags) and the About page (skills).
 */
export function TagList({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="bg-surface border border-line rounded-[var(--radius-pill)] px-3 py-1 text-[length:var(--text-xs)] font-medium text-ink-soft"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
