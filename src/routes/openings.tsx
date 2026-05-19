import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/openings")({
  head: () => ({
    meta: [
      { title: "Open Archive — Capablanca Masterclass" },
      { name: "description", content: "Searchable, filterable database of Capablanca's historical games." },
    ],
  }),
  component: Openings,
});

const GAMES = [
  { id: 1, white: "Capablanca", black: "Marshall", event: "New York", year: 1918, opening: "Ruy Lopez", result: "1-0" },
  { id: 2, white: "Capablanca", black: "Tartakower", event: "New York", year: 1924, opening: "Queen's Gambit", result: "1-0" },
  { id: 3, white: "Lasker", black: "Capablanca", event: "Havana WCC", year: 1921, opening: "Queen's Gambit Declined", result: "0-1" },
  { id: 4, white: "Capablanca", black: "Alekhine", event: "Buenos Aires WCC", year: 1927, opening: "Queen's Gambit", result: "½-½" },
  { id: 5, white: "Capablanca", black: "Bogoljubov", event: "London", year: 1922, opening: "Caro-Kann", result: "1-0" },
  { id: 6, white: "Nimzowitsch", black: "Capablanca", event: "New York", year: 1927, opening: "Queen's Indian", result: "0-1" },
  { id: 7, white: "Capablanca", black: "Reti", event: "Berlin", year: 1928, opening: "Reti Opening", result: "½-½" },
  { id: 8, white: "Capablanca", black: "Botvinnik", event: "Nottingham", year: 1936, opening: "Nimzo-Indian", result: "½-½" },
  { id: 9, white: "Capablanca", black: "Spielmann", event: "San Sebastián", year: 1911, opening: "Queen's Gambit", result: "1-0" },
] as const;

const RESULTS = ["All", "1-0", "0-1", "½-½"] as const;

function Openings() {
  const [q, setQ] = useState("");
  const [result, setResult] = useState<(typeof RESULTS)[number]>("All");

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
                <tr key={g.id} className="border-b border-border/60 last:border-0 transition hover:bg-surface-elevated/60">
                  <td className="px-5 py-4 font-display text-gold">{g.year}</td>
                  <td className="px-5 py-4 text-cream">{g.white}</td>
                  <td className="px-5 py-4 text-cream">{g.black}</td>
                  <td className="px-5 py-4 text-muted-foreground">{g.opening}</td>
                  <td className="px-5 py-4 text-muted-foreground">{g.event}</td>
                  <td className="px-5 py-4 text-right font-mono text-cream">{g.result}</td>
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
    </AppShell>
  );
}
