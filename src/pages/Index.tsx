import { DataRibbon } from "@/components/DataRibbon";
import { PortfolioNav } from "@/components/PortfolioNav";
import { AITerminal } from "@/components/AITerminal";
import { ProjectsSection } from "@/components/ProjectsSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { Github, Linkedin, Mail } from "lucide-react";
import mrinalPhoto from "@/assets/mrinal-photo.jpeg";
import CertificatesSection from "@/components/CertificatesSection";
import Timeline from "@/components/Timeline";
const GIF_URL =
  "https://cdn.dribbble.com/userupload/41747295/file/original-36aa18b6d39725078eadce42d08e3055.gif";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* ── Background GIF ───────────────────────────────────── */}
      <div
        className="fixed inset-0 z-[-2]"
        style={{
          backgroundImage: `url(${GIF_URL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Overlay — 65% obsidian + blur */}
      <div
        className="fixed inset-0 z-[-1]"
        style={{
          background: "rgba(7,7,12,0.72)",
          backdropFilter: "blur(64px)",
        }}
      />

      {/* ── Top ribbon ───────────────────────────────────────── */}
      <DataRibbon />

      {/* ── Nav ──────────────────────────────────────────────── */}
      <PortfolioNav />

      {/* ── Main content ─────────────────────────────────────── */}
      <main className="max-w-6xl mx-auto px-6 pt-28">
        {/* Hero */}
        <section className="py-16 md:py-24 flex flex-col gap-8">
          {/* Identity */}
          <div className="fade-in-up flex flex-col md:flex-row items-start gap-10">
            {/* Futuristic Photo Frame */}
            <div className="relative flex-shrink-0 self-start">
              {/* Corner accents */}
              <div className="absolute -top-[6px] -left-[6px] w-5 h-5 border-t-2 border-l-2 z-10" style={{ borderColor: "hsl(var(--primary))" }} />
              <div className="absolute -top-[6px] -right-[6px] w-5 h-5 border-t-2 border-r-2 z-10" style={{ borderColor: "hsl(var(--primary))" }} />
              <div className="absolute -bottom-[6px] -left-[6px] w-5 h-5 border-b-2 border-l-2 z-10" style={{ borderColor: "hsl(var(--primary))" }} />
              <div className="absolute -bottom-[6px] -right-[6px] w-5 h-5 border-b-2 border-r-2 z-10" style={{ borderColor: "hsl(var(--primary))" }} />
              {/* Scan line animation */}
              <div className="absolute inset-0 z-10 overflow-hidden rounded-sm pointer-events-none">
                <div
                  className="absolute w-full h-[2px] opacity-30"
                  style={{
                    background: "linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)",
                    animation: "scanline 3s linear infinite",
                  }}
                />
              </div>
              {/* Side labels */}
              <div
                className="absolute -left-7 top-1/2 -translate-y-1/2 label-xs rotate-[-90deg] tracking-widest"
                style={{ color: "hsl(var(--primary))", fontSize: "9px" }}
              >
                ID_VERIFIED
              </div>
              <div
                className="absolute -right-8 top-1/2 -translate-y-1/2 label-xs rotate-90 tracking-widest"
                style={{ color: "hsl(var(--muted-foreground))", fontSize: "9px" }}
              >
                MRINAL_OS
              </div>
              {/* Image */}
              <div
                className="relative overflow-hidden"
                style={{
                  width: "180px",
                  height: "220px",
                  border: "1px solid var(--glass-border)",
                  boxShadow: "0 0 24px hsl(var(--primary) / 0.25), inset 0 0 24px hsl(var(--primary) / 0.04)",
                }}
              >
                <img
                  src={mrinalPhoto}
                  alt="Mrinal Choudhary"
                  className="w-full h-full object-cover object-top"
                  style={{ filter: "contrast(1.08) brightness(0.92)" }}
                />
                {/* Overlay gradient at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-10"
                  style={{
                    background: "linear-gradient(to top, hsl(var(--background) / 0.7), transparent)",
                  }}
                />
                {/* Bottom label */}
                <div
                  className="absolute bottom-2 left-0 right-0 text-center label-xs"
                  style={{ color: "hsl(var(--primary))", fontSize: "8px", letterSpacing: "0.15em" }}
                >
                  MRINAL_CHOUDHARY.exe
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className="flex-1">
              <span className="label-xs text-muted-foreground block mb-4">01 / IDENTITY</span>
              <h1 className="text-4xl md:text-5xl font-medium tracking-tighter leading-[1.1]">
                Engineering intelligent systems<br />
                <span style={{ color: "hsl(var(--primary))" }}>at the intersection of</span><br />
                Mechanical Design &amp; Machine Learning.
              </h1>
              <div className="flex items-center gap-4 mt-6">
                <a href="https://github.com/Mastermrinal" target="_blank" rel="noreferrer"
                  className="p-2 rounded-sm transition-all duration-200 hover:bg-white/5"
                  style={{ color: "hsl(var(--muted-foreground))", border: "1px solid var(--glass-border)" }}>
                  <Github size={14} strokeWidth={1.5} />
                </a>
                <a href="https://www.linkedin.com/in/mrinal-choudhary-343785246/" target="_blank" rel="noreferrer"
                  className="p-2 rounded-sm transition-all duration-200 hover:bg-white/5"
                  style={{ color: "hsl(var(--muted-foreground))", border: "1px solid var(--glass-border)" }}>
                  <Linkedin size={14} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>

          {/* Terminal */}
          <div className="fade-in-up" style={{ animationDelay: "150ms" }}>
            <AITerminal />
          </div>
        </section>
        {/* About */}
        <section id="about" className="py-16 border-t" style={{ borderColor: "var(--glass-border)" }}>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <span className="label-xs text-muted-foreground block mb-2">02 / ABOUT</span>
              <h2 className="text-3xl font-medium tracking-tighter mb-4">The Researcher</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Mechanical Engineer turned Robotics Researcher. I've always been fascinated by how
                machines can <em>sense, decide, and act</em>. What started as curiosity evolved into
                building UAVs, piezoelectric sensors, and ML pipelines.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I thrive in interdisciplinary environments where mechanical fundamentals meet
                intelligent systems — and where ideas turn into real, deployable prototypes.
              </p>
            </div>
            <div id="contact">
              <span className="label-xs text-muted-foreground block mb-2">03 / CONTACT</span>
              <h2 className="text-3xl font-medium tracking-tighter mb-4">Execute Contact</h2>
              <div className="flex flex-col gap-3">
                {[
                  { label: "EMAIL", value: "choudharymrinal64@gmail.com", href: "mailto:choudharymrinal64@gmail.com" },
                  { label: "LINKEDIN", value: "linkedin.com/in/mrinal-choudhary-343785246", href: "https://www.linkedin.com/in/mrinal-choudhary-343785246/" },
                  { label: "GITHUB", value: "github.com/Mastermrinal", href: "https://github.com/Mastermrinal" },
                ].map(({ label, value, href }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer"
                    className="glass rounded-inner px-4 py-3 flex items-center justify-between group transition-all duration-200 hover:border-primary"
                  >
                    <span className="label-xs text-muted-foreground">{label}</span>
                    <span className="font-mono text-xs" style={{ color: "hsl(var(--primary))" }}>{value}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Timeline />

        {/* Projects */}
        <ProjectsSection />

        {/* Publications */}
        <PublicationsSection />
        <CertificatesSection />

        {/* Footer */}
        <footer className="py-8 border-t flex items-center justify-between" style={{ borderColor: "var(--glass-border)" }}>
          <span className="label-xs text-muted-foreground">MRINAL_CHOUDHARY_OS v1.0 © 2025</span>
          <span className="label-xs text-muted-foreground">LOC: 28.4744°N 77.5040°E · GREATER NOIDA</span>
        </footer>
      </main>
    </div>
  );
};

export default Index;
