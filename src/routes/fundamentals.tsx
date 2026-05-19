import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { LessonPlayer } from "@/components/LessonPlayer";

export const Route = createFileRoute("/fundamentals")({
  head: () => ({
    meta: [
      { title: "Level 1: Fundamentals — Capablanca Masterclass" },
      { name: "description", content: "An expandable curriculum based on Capablanca's 'Chess Fundamentals'." },
    ],
  }),
  component: Fundamentals,
});

type Lesson = { id: string; title: string };
type Chapter = { id: string; roman: string; title: string; subtitle?: string; lessons: Lesson[] };

const CHAPTERS: Chapter[] = [
  {
    id: "ch1",
    roman: "I",
    title: "First Principles",
    subtitle: "Endings, Middle-game, and Openings",
    lessons: [
      { id: "1-1", title: "Simple Mates" },
      { id: "1-2", title: "Pawn Promotion" },
      { id: "1-3", title: "Control of the Centre" },
      { id: "1-4", title: "Opening Development" },
      { id: "1-5", title: "Pawn Endings" },
      { id: "1-6", title: "Winning a Pawn — How to Use the Advantage" },
    ],
  },
  {
    id: "ch2",
    roman: "II",
    title: "Further Principles in End-game Play",
    lessons: [
      { id: "2-1", title: "The Opposition" },
      { id: "2-2", title: "The Relative Value of Knight and Bishop" },
      { id: "2-3", title: "How to Mate with Knight and Bishop" },
      { id: "2-4", title: "Queen against Rook" },
    ],
  },
  {
    id: "ch3",
    roman: "III",
    title: "Planning a Win in Middle-game Play",
    lessons: [
      { id: "3-1", title: "Attack without the Aid of Knights" },
      { id: "3-2", title: "Attack with the Aid of Knights" },
      { id: "3-3", title: "Winning by Indirect Attack" },
    ],
  },
  {
    id: "ch4",
    roman: "IV",
    title: "General Theory",
    lessons: [
      { id: "4-1", title: "The Initiative" },
      { id: "4-2", title: "Direct Attacks en Masse" },
      { id: "4-3", title: "The Force of the Threatened Attack" },
      { id: "4-4", title: "Relinquishing the Initiative" },
      { id: "4-5", title: "Cutting Off Pieces from the Scene of Action" },
    ],
  },
  {
    id: "ch5",
    roman: "V",
    title: "End-game Strategy",
    lessons: [
      { id: "5-1", title: "A Difficult Ending: Two Bishops vs. Bishop & Knight" },
      { id: "5-2", title: "A Pawn Ending" },
      { id: "5-3", title: "Difficult Endings of One Rook and Pawns" },
      { id: "5-4", title: "Rook, Bishop, and Pawns vs. Rook, Knight, and Pawns" },
    ],
  },
  {
    id: "ch6",
    roman: "VI",
    title: "Further Openings and Middle-games",
    lessons: [
      { id: "6-1", title: "Some Salient Points about Pawns" },
      { id: "6-2", title: "Some Possible Developments from a Ruy Lopez" },
      { id: "6-3", title: "The Influence of a 'Hole'" },
    ],
  },
];

// Pre-completed lessons for demo of gold checkmarks
const INITIAL_COMPLETED = new Set(["1-1", "1-2", "1-3", "2-1"]);

function Fundamentals() {
  const [completed, setCompleted] = useState<Set<string>>(INITIAL_COMPLETED);
  const totalLessons = CHAPTERS.reduce((s, c) => s + c.lessons.length, 0);

  const toggle = (id: string) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <AppShell>
      <header className="mb-10">
        <div className="text-[11px] uppercase tracking-[0.28em] text-gold/80">Level 1</div>
        <h1 className="mt-2 font-display text-4xl text-cream md:text-5xl">
          Chess <span className="text-gradient-gold">Fundamentals</span>
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          A complete curriculum following José Raúl Capablanca's 1921 treatise. Expand each
          chapter to begin its lessons. {completed.size} of {totalLessons} complete.
        </p>
      </header>

      <Accordion type="multiple" defaultValue={["ch1"]} className="flex flex-col gap-4">
        {CHAPTERS.map((ch) => {
          const done = ch.lessons.filter((l) => completed.has(l.id)).length;
          return (
            <AccordionItem
              key={ch.id}
              value={ch.id}
              className="rounded-2xl border border-border bg-surface shadow-luxe transition hover:border-gold/30 data-[state=open]:border-gold/40"
            >
              <AccordionTrigger className="group gap-4 px-5 py-5 hover:no-underline md:px-7 md:py-6 cursor-pointer">
                <div className="flex flex-1 items-center gap-4 text-left">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-elevated font-display text-xl text-gradient-gold">
                    {ch.roman}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-gold/80">
                      Chapter {ch.roman}
                    </div>
                    <h3 className="mt-0.5 font-display text-lg leading-tight text-cream md:text-xl">
                      {ch.title}
                    </h3>
                    {ch.subtitle && (
                      <p className="mt-0.5 text-xs italic text-muted-foreground">{ch.subtitle}</p>
                    )}
                  </div>
                  <div className="hidden shrink-0 text-right sm:block">
                    <div className="font-display text-sm text-gold">
                      {done}/{ch.lessons.length}
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      complete
                    </div>
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent className="px-5 pb-5 md:px-7 md:pb-6">
                <div className="border-t border-border/60 pt-4">
                  <ul className="flex flex-col">
                    {ch.lessons.map((l, idx) => {
                      const isDone = completed.has(l.id);
                      return (
                        <li key={l.id}>
                          <button
                            type="button"
                            onClick={() => toggle(l.id)}
                            className="group/lesson flex w-full items-center gap-4 rounded-lg px-2 py-3 text-left transition hover:bg-surface-elevated/60 cursor-pointer"
                          >
                            <span
                              className={cn(
                                "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition",
                                isDone
                                  ? "border-gold gradient-gold shadow-luxe"
                                  : "border-border bg-surface-elevated group-hover/lesson:border-gold/50",
                              )}
                            >
                              {isDone && (
                                <Check className="h-3.5 w-3.5 text-primary-foreground" strokeWidth={3} />
                              )}
                            </span>
                            <span className="font-mono text-[11px] text-muted-foreground">
                              {String(idx + 1).padStart(2, "0")}
                            </span>
                            <span
                              className={cn(
                                "flex-1 text-sm transition",
                                isDone
                                  ? "text-gold line-through decoration-gold/40"
                                  : "text-cream group-hover/lesson:text-gold",
                              )}
                            >
                              {l.title}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </AppShell>
  );
}
