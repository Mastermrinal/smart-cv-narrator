import { useState, useEffect } from "react";
import { Terminal, Layers, BookOpen, Cpu, User, Mail } from "lucide-react";

const navItems = [
  { id: "terminal", label: "TERMINAL", icon: Terminal },
  { id: "projects", label: "PROJECTS", icon: Layers },
  { id: "publications", label: "PAPERS", icon: BookOpen },
  { id: "skills", label: "SYSTEMS", icon: Cpu },
  { id: "about", label: "ABOUT", icon: User },
  { id: "contact", label: "CONTACT", icon: Mail },
];

export const PortfolioNav = () => {
  const [active, setActive] = useState("terminal");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className="fixed top-8 left-0 right-0 z-40 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(7,7,12,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--glass-border)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo / ID */}
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded border flex items-center justify-center"
            style={{ borderColor: "hsl(var(--primary))", background: "rgba(0,149,255,0.1)" }}>
            <span className="text-[8px] font-mono font-bold" style={{ color: "hsl(var(--primary))" }}>MC</span>
          </div>
          <span className="font-mono text-xs font-medium tracking-widest uppercase"
            style={{ color: "hsl(var(--muted-foreground))" }}>
            MRINAL_CHOUDHARY_OS
          </span>
        </div>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded transition-all duration-200"
              style={{
                background: active === id ? "rgba(0,149,255,0.12)" : "transparent",
                color: active === id ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
                borderBottom: active === id ? "1px solid hsl(var(--primary))" : "1px solid transparent",
              }}
            >
              <Icon size={11} strokeWidth={1.5} />
              <span className="label-xs">{label}</span>
            </button>
          ))}
        </div>

        {/* Status indicator */}
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent pulse-glow" />
          <span className="label-xs text-muted-foreground hidden md:block">v1.0 OPERATIONAL</span>
        </div>
      </div>
    </nav>
  );
};
