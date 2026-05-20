import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { MatchReplayPlayer } from "@/components/MatchReplayPlayer";
import { Search, Play } from "lucide-react";
import { useMemo, useState } from "react";
import { ARCHIVE_GAMES } from "@/lib/archive";

export const Route = createFileRoute("/openings")({
  head: () => ({
    meta: [
      { title: "Open Archive — Capablanca Masterclass" },
      { name: "description", content: "Searchable, filterable database of Capablanca's historical games." },
    ],
  }),
  component: Openings,
});

const GAMES = ARCHIVE_GAMES;

const RESULTS = ["All", "1-0", "0-1", "½-½"] as const;

function Openings() {
  const [q, setQ] = useState("");
  const [result, setResult] = useState<(typeof RESULTS)[number]>("All");
  const [replay, setReplay] = useState<(typeof GAMES)[number] | null>(null);

  const rows = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return GAMES.filter((g) => {
      if (result !== "All" && g.result !== result) return false;
      if (!needle) return true;
      return [g.white, g.black, g.event, g.opening, String(g.year)]
        .some((v) => v.toLowerCase().includes(needle));
    });
  }, [q, result]);

  return (
    <AppShell>
      <header className="mb-8">
        <div className="text-[11px] uppercase tracking-[0.28em] text-gold/80">Database</div>
        <h1 className="mt-2 font-display text-4xl text-cream md:text-5xl">Open Archive</h1>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Search and filter every recorded game. Sorted by event chronology.
        </p>
      </header>

      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search opponent, opening, event..."
            className="w-full rounded-xl border border-border bg-surface py-3 pl-10 pr-4 text-sm text-cream placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
          />
        </div>
        <div className="flex gap-1.5 rounded-xl border border-border bg-surface p-1">
          {RESULTS.map((r) => (
            <button
              key={r}
              onClick={() => setResult(r)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                result === r ? "gradient-gold text-primary-foreground" : "text-muted-foreground hover:text-cream"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-luxe">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                <th className="px-5 py-4 font-medium">Year</th>
                <th className="px-5 py-4 font-medium">White</th>
                <th className="px-5 py-4 font-medium">Black</th>
                <th className="px-5 py-4 font-medium">Opening</th>
                <th className="px-5 py-4 font-medium">Event</th>
                <th className="px-5 py-4 font-medium text-right">Result</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((g) => (
                <tr
                  key={g.id}
                  onClick={() => setReplay(g)}
                  className="group cursor-pointer border-b border-border/60 last:border-0 transition hover:bg-gold/5"
                >
                  <td className="px-5 py-4 font-display text-gold">{g.year}</td>
                  <td className="px-5 py-4 text-cream">{g.white}</td>
                  <td className="px-5 py-4 text-cream">{g.black}</td>
                  <td className="px-5 py-4 text-muted-foreground">{g.opening}</td>
                  <td className="px-5 py-4 text-muted-foreground">{g.event}</td>
                  <td className="px-5 py-4 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <span className="font-mono text-cream">{g.result}</span>
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-gold/30 text-gold opacity-60 transition group-hover:bg-gold group-hover:text-primary-foreground group-hover:opacity-100">
                        <Play className="h-3 w-3 fill-current" />
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
              {rows.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-5 py-10 text-center text-muted-foreground">
                    No games match your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <MatchReplayPlayer
        matchId={replay ? `archive-${replay.id}` : null}
        eyebrow={replay ? `${replay.event} · ${replay.year}` : undefined}
        titleOverride={replay ? `${replay.white} vs. ${replay.black}` : undefined}
        capablancaColor={replay && replay.white.includes("Capablanca") ? "w" : "b"}
        onClose={() => setReplay(null)}
      />
    </AppShell>
  );
}
