import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown, Crown, Play } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { MatchReplayPlayer } from "@/components/MatchReplayPlayer";
import { ARCHIVE, type ArchiveGame, type ArchiveTournament } from "@/lib/milestones";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/milestones")({
  head: () => ({
    meta: [
      { title: "Milestone Archive — Capablanca Masterclass" },
      {
        name: "description",
        content:
          "A luxury chronological timeline of José Raúl Capablanca's career — every tournament, every defining game, ready for Match Replay.",
      },
    ],
  }),
  component: Milestones,
});

type Replay = { game: ArchiveGame; tournament: ArchiveTournament } | null;

function Milestones() {
  const [openNode, setOpenNode] = useState<string | null>(ARCHIVE[0].id);
  const [replay, setReplay] = useState<Replay>(null);

  return (
    <AppShell>
      <header className="mb-14">
        <div className="text-[11px] uppercase tracking-[0.28em] text-gold/80">Legacy Exhibition</div>
        <h1 className="mt-2 font-display text-4xl text-cream md:text-5xl">Milestone Archive</h1>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Three eras. Six defining tournaments. Every game restored from the archives —
          tap any row to launch the Match Replay.
        </p>
      </header>

      <ol className="relative ml-3 border-l border-gold/20 md:ml-4">
        {ARCHIVE.map((node, i) => {
          const open = openNode === node.id;
          return (
            <li key={node.id} className="relative pb-12 pl-8 last:pb-0 md:pl-12">
              {/* Timeline marker */}
              <span
                className={cn(
                  "absolute -left-[13px] top-1 flex h-6 w-6 items-center justify-center rounded-full transition-all md:-left-[15px] md:h-7 md:w-7",
                  open
                    ? "gradient-gold shadow-luxe scale-110"
                    : "border border-gold/40 bg-sidebar",
                )}
                aria-hidden
              >
                <Crown
                  className={cn(
                    "h-3 w-3 transition-colors md:h-3.5 md:w-3.5",
                    open ? "text-primary-foreground" : "text-gold/70",
                  )}
                />
              </span>

              {/* Event card */}
              <article
                className={cn(
                  "overflow-hidden rounded-2xl border bg-surface shadow-luxe transition-all",
                  open ? "border-gold/40" : "border-border hover:border-gold/30",
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenNode(open ? null : node.id)}
                  className="flex w-full items-start justify-between gap-4 p-5 text-left cursor-pointer md:p-7"
                  aria-expanded={open}
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.26em] text-gold/80">
                      <span>{node.era}</span>
                      <span className="h-px w-8 bg-gold/30" />
                      <span>{node.range}</span>
                    </div>
                    <h2 className="mt-2 font-display text-2xl text-cream md:text-3xl">
                      {node.title}
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {node.tagline}
                    </p>
                    <div className="mt-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground/80">
                      {node.tournaments.length} tournaments ·{" "}
                      {node.tournaments.reduce((n, t) => n + t.games.length, 0)} games
                    </div>
                  </div>
                  <ChevronDown
                    className={cn(
                      "mt-1 h-5 w-5 shrink-0 text-gold transition-transform duration-300",
                      open && "rotate-180",
                    )}
                  />
                </button>

                {/* Expanded body */}
                <div
                  className={cn(
                    "grid transition-all duration-500 ease-out",
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="space-y-6 border-t border-gold/15 bg-background/40 p-5 md:p-7">
                      {node.tournaments.map((t, idx) => (
                        <TournamentBlock
                          key={t.id}
                          tournament={t}
                          accent={idx === 0 ? "primary" : "secondary"}
                          onPlay={(g) => setReplay({ game: g, tournament: t })}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ol>

      <MatchReplayPlayer
        matchId={replay?.game.id ?? null}
        eyebrow={replay ? `${replay.tournament.name} · ${replay.tournament.year}` : undefined}
        titleOverride={
          replay
            ? `Game ${replay.game.num} — ${replay.game.white} vs. ${replay.game.black}`
            : undefined
        }
        capablancaColor={
          replay && replay.game.white.includes("Capablanca") ? "w" : "b"
        }
        onClose={() => setReplay(null)}
      />
    </AppShell>
  );
}

function TournamentBlock({
  tournament,
  accent,
  onPlay,
}: {
  tournament: ArchiveTournament;
  accent: "primary" | "secondary";
  onPlay: (g: ArchiveGame) => void;
}) {
  return (
    <section className="rounded-xl border border-border bg-surface-elevated/60 p-4 md:p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <div className="text-[10px] uppercase tracking-[0.22em] text-gold/80">
            {tournament.place}
          </div>
          <h3 className="mt-1 font-display text-lg text-cream md:text-xl">
            {tournament.name}
          </h3>
        </div>
        <span
          className={cn(
            "font-display text-xl md:text-2xl",
            accent === "primary" ? "text-gradient-gold" : "text-cream/80",
          )}
        >
          {tournament.year}
        </span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{tournament.blurb}</p>

      {/* Games table */}
      <div className="mt-4 overflow-x-auto rounded-lg border border-border">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="bg-sidebar/80 text-[10px] uppercase tracking-[0.2em] text-gold/80">
              <th className="px-3 py-2.5 font-medium md:px-4">Game</th>
              <th className="px-3 py-2.5 font-medium md:px-4">White</th>
              <th className="px-3 py-2.5 font-medium md:px-4">Black</th>
              <th className="px-3 py-2.5 font-medium md:px-4">Opening</th>
              <th className="px-3 py-2.5 font-medium md:px-4">Result</th>
              <th className="px-3 py-2.5 md:px-4" aria-label="Play" />
            </tr>
          </thead>
          <tbody>
            {tournament.games.map((g) => (
              <tr
                key={g.id}
                onClick={() => onPlay(g)}
                className="group cursor-pointer border-t border-border transition-colors hover:bg-gold/5"
              >
                <td className="px-3 py-3 font-mono text-xs text-gold md:px-4">
                  {String(g.num).padStart(2, "0")}
                </td>
                <td className="px-3 py-3 text-cream md:px-4">{g.white}</td>
                <td className="px-3 py-3 text-cream md:px-4">{g.black}</td>
                <td className="px-3 py-3 text-muted-foreground md:px-4">{g.opening}</td>
                <td className="px-3 py-3 md:px-4">
                  <ResultBadge result={g.result} />
                </td>
                <td className="px-3 py-3 text-right md:px-4">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-gold/30 text-gold opacity-60 transition group-hover:bg-gold group-hover:text-primary-foreground group-hover:opacity-100">
                    <Play className="h-3 w-3 fill-current" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function ResultBadge({ result }: { result: ArchiveGame["result"] }) {
  const styles =
    result === "1-0"
      ? "border-gold/40 bg-gold/10 text-gold"
      : result === "0-1"
        ? "border-border bg-background text-cream"
        : "border-border bg-surface text-muted-foreground";
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-[11px]",
        styles,
      )}
    >
      {result}
    </span>
  );
}
