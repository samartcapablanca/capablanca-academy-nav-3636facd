import { Link, useRouterState } from "@tanstack/react-router";
import { LayoutDashboard, GraduationCap, Trophy, BookOpen, Crown } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV: { to: "/" | "/fundamentals" | "/milestones" | "/openings"; label: string; icon: any; short: string }[] = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard, short: "Dashboard" },
  { to: "/fundamentals", label: "Level 1: Fundamentals", icon: GraduationCap, short: "Fundamentals" },
  { to: "/milestones", label: "Milestone Archive", icon: Trophy, short: "Milestones" },
  { to: "/openings", label: "Open Archive", icon: BookOpen, short: "Archive" },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 flex-col border-r border-border bg-sidebar px-6 py-8 md:flex">
        <Link to="/" className="mb-12 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg gradient-gold shadow-luxe">
            <Crown className="h-6 w-6 text-primary-foreground" strokeWidth={2.25} />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg text-cream">Capablanca</div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-gold/80">Masterclass</div>
          </div>
        </Link>

        <nav className="flex flex-col gap-1">
          <div className="mb-3 px-3 text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
            Academy
          </div>
          {NAV.map(({ to, label, icon: Icon }) => {
            const active = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={cn(
                  "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all",
                  active
                    ? "bg-sidebar-accent text-cream shadow-luxe"
                    : "text-sidebar-foreground/75 hover:bg-sidebar-accent/60 hover:text-cream",
                )}
              >
                <Icon className={cn("h-4 w-4", active ? "text-gold" : "text-muted-foreground group-hover:text-gold")} />
                <span className="font-medium">{label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto rounded-xl border border-border/60 bg-surface-elevated/60 p-4">
          <div className="text-[10px] uppercase tracking-[0.22em] text-gold/80">Quote</div>
          <p className="mt-2 font-display text-sm italic leading-snug text-cream/90">
            "A good player is always lucky."
          </p>
          <p className="mt-1 text-[11px] text-muted-foreground">— José Raúl Capablanca</p>
        </div>
      </aside>

      {/* Main */}
      <main className="md:pl-72">
        <div className="mx-auto max-w-6xl px-5 pb-28 pt-8 md:px-10 md:pt-12 md:pb-16">
          {children}
        </div>
      </main>

      {/* Mobile bottom nav */}
      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-sidebar/95 backdrop-blur md:hidden">
        <ul className="grid grid-cols-4">
          {NAV.map(({ to, short, icon: Icon }) => {
            const active = pathname === to;
            return (
              <li key={to}>
                <Link
                  to={to}
                  className={cn(
                    "flex flex-col items-center gap-1 py-3 text-[10px] font-medium transition-colors",
                    active ? "text-gold" : "text-muted-foreground",
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span className="tracking-wide">{short ?? label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
