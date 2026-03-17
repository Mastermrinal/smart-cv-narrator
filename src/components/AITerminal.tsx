import { useState, useEffect, useRef } from "react";
import { Send, ChevronRight } from "lucide-react";

// ─── Predefined QA knowledge base ────────────────────────────────────────────
const QA_MAP: Record<string, string> = {
  "who are you": `Hi! I'm Mrinal Choudhary — a Mechanical Engineer and Robotics Researcher passionate about building intelligent, real-world systems.

I've worked on UAV-based emergency response systems, energy demand forecasting at IIT Bombay, and low-cost sensing devices. My work sits at the intersection of mechanical design, machine learning, and robotics systems engineering.`,

  "what can you do": `I specialize in:

  • Robotics prototyping (UAVs, sensor systems)
  • Data-driven modeling (time-series forecasting, ML models)
  • Mechanical design & simulation (ANSYS, Creo, SolidWorks)
  • Applied research (energy systems, medical devices, AI in robotics)

I focus on building systems that are both technically sound and practically deployable.`,

  "what kind of work do you do": `I specialize in:

  • Robotics prototyping (UAVs, sensor systems)
  • Data-driven modeling (time-series forecasting, ML models)
  • Mechanical design & simulation (ANSYS, Creo, SolidWorks)
  • Applied research (energy systems, medical devices, AI in robotics)

I focus on building systems that are both technically sound and practically deployable.`,

  "tell me about your robotics projects": `One of my key projects was developing a multi-terrain emergency response UAV.

  • Built 2 working prototypes
  • Led manufacturing using laser cutting & MDF
  • Improved production efficiency by 30%
  • Invested 20+ hours/week to ensure reliability

The goal: a deployable UAV for emergency scenarios — not just a concept.`,

  "uav project": `One of my key projects was developing a multi-terrain emergency response UAV.

  • Built 2 working prototypes
  • Led manufacturing using laser cutting & MDF
  • Improved production efficiency by 30%
  • Invested 20+ hours/week to ensure reliability

The goal: a deployable UAV for emergency scenarios — not just a concept.`,

  "have you worked on hardware systems": `Yes — I built a low-cost piezoelectric accelerometer capable of detecting frequencies between 300–400 Hz.

This system was designed for fault detection in industrial machinery, helping reduce failure risks through early vibration analysis.`,

  "do you use ai in your projects": `Definitely. I integrate AI wherever it adds real value:

  • Built a CNN-based object detection system for real-time plastic detection
  • Developed time-series forecasting models (ARIMA, GPR) for financial prediction
  • Published research on ensemble learning and terrain classification in robotics

My approach: AI is a tool — not the goal. The goal is solving real problems.`,

  "what did you do at iit bombay": `At IIT Bombay, I worked on forecasting energy demand for cooling systems.

  • Modeled Cooling Degree Days for 100 Indian cities (1991–2100)
  • Built predictive models (S-curve, regression, power law)
  • Achieved R² = 0.89 in time-series forecasting

This project combined climate science + data modeling + sustainability engineering.`,

  "iit bombay": `At IIT Bombay, I worked on forecasting energy demand for cooling systems.

  • Modeled Cooling Degree Days for 100 Indian cities (1991–2100)
  • Built predictive models (S-curve, regression, power law)
  • Achieved R² = 0.89 in time-series forecasting

This project combined climate science + data modeling + sustainability engineering.`,

  "do you have industry experience": `Yes — I worked at Tata Steel on carbon fiber production using melt spinning processes.

I conducted rheological studies to understand viscoelastic behavior, helping optimize material properties for industrial applications.`,

  "industry experience": `Yes — I worked at Tata Steel on carbon fiber production using melt spinning processes.

I conducted rheological studies to understand viscoelastic behavior, helping optimize material properties for industrial applications.`,

  "have you published any research": `Yes, I've published multiple research papers:

  • IEEE ANTS 2024: Ensemble learning for diabetes prediction
  • AIR 2025: Terrain classification in legged robots
  • IEEE InC4 2025: Fraud detection using ML

My research focuses on applying machine learning to real-world systems.`,

  "publications": `Yes, I've published multiple research papers:

  • IEEE ANTS 2024: Ensemble learning for diabetes prediction
  • AIR 2025: Terrain classification in legged robots
  • IEEE InC4 2025: Fraud detection using ML

My research focuses on applying machine learning to real-world systems.`,

  "what tools and technologies do you use": `I work across hardware, software, and simulation:

  Mechanical & CAD:  SolidWorks, Creo, ANSYS
  Programming:       Python, MATLAB, C++
  Robotics:          Arduino, Simulink, Tinkercad
  Data:              Tableau, Excel

This allows me to build end-to-end systems — from design to deployment.`,

  "skills": `I work across hardware, software, and simulation:

  Mechanical & CAD:  SolidWorks, Creo, ANSYS
  Programming:       Python, MATLAB, C++
  Robotics:          Arduino, Simulink, Tinkercad
  Data:              Tableau, Excel

This allows me to build end-to-end systems — from design to deployment.`,

  "why robotics": `I've always been fascinated by how machines can sense, decide, and act.

What started as curiosity turned into building real systems — UAVs, sensors, predictive models.

For me, robotics is where mechanical engineering meets intelligence.`,

  "are you a team player": `Yes — I've led teams and worked in research environments.

  • Captained a team to semi-finals at Thapar Olympics
  • Collaborated on interdisciplinary research projects

I enjoy working in teams where ideas turn into real prototypes.`,

  "why should someone work with you": `Because I don't just design — I build.

I bring:
  • Strong fundamentals in mechanical + AI systems
  • Hands-on prototyping experience
  • Research-backed problem solving

I focus on turning ideas into working systems that solve real problems.`,

  "why should we hire you": `Because I don't just design — I build.

I bring:
  • Strong fundamentals in mechanical + AI systems
  • Hands-on prototyping experience
  • Research-backed problem solving

I focus on turning ideas into working systems that solve real problems.`,

  "suggest a project": `Based on my experience, I'd suggest:

  Build a smart fault detection system using vibration sensors + ML

It combines:
  • Hardware (accelerometers)
  • Signal processing
  • Machine learning

This is highly relevant in robotics and industrial automation.`,

  "explain one of your projects in detail": `Let's break down the UAV project:

  Problem:   Emergency response delay
  Solution:  Multi-terrain UAV
  
  Approach:
  • Mechanical design + lightweight structure
  • Rapid prototyping with laser cutting & MDF
  • Iterative testing across multiple terrains
  • 30% improvement in production efficiency

The focus was deployability, not just design. Two full working prototypes were built and validated.`,
};

// Boot sequence lines
const BOOT_SEQUENCE = [
  "MRINAL_CHOUDHARY_OS v1.0",
  ">> Initializing Robotics Portfolio...",
  ">> Loading research modules... [OK]",
  ">> UAV_SYSTEM: ONLINE",
  ">> ML_ENGINE: ONLINE",
  ">> SENSOR_ARRAY: ONLINE",
  ">> READY. Type a question or select a prompt below.",
];

const SMART_PROMPTS = [
  { label: "UAV Project", query: "uav project" },
  { label: "IIT Bombay", query: "iit bombay" },
  { label: "Publications", query: "publications" },
  { label: "Skills", query: "skills" },
  { label: "Industry XP", query: "industry experience" },
  { label: "Why Hire?", query: "why should we hire you" },
];

interface TerminalLine {
  type: "system" | "user" | "response" | "boot";
  content: string;
}

const findResponse = (query: string): string => {
  const normalized = query.toLowerCase().trim();
  // direct match
  if (QA_MAP[normalized]) return QA_MAP[normalized];
  // fuzzy match
  for (const key of Object.keys(QA_MAP)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return QA_MAP[key];
    }
  }
  return `Query not found in knowledge base.\n\nTry: "who are you", "uav project", "iit bombay", "publications", "skills", "why robotics", or "suggest a project".`;
};

export const AITerminal = () => {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [bootDone, setBootDone] = useState(false);
  const [clock, setClock] = useState("");
  const outputRef = useRef<HTMLDivElement>(null);

  // Clock
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setClock(now.toLocaleTimeString("en-US", { hour12: false }) + " UTC+5:30");
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // Boot sequence
  useEffect(() => {
    let i = 0;
    const run = () => {
      if (i < BOOT_SEQUENCE.length) {
        const line = BOOT_SEQUENCE[i];
        setLines(prev => [...prev, { type: i === 0 ? "system" : "boot", content: line }]);
        i++;
        setTimeout(run, i === 1 ? 100 : 250);
      } else {
        setBootDone(true);
      }
    };
    setTimeout(run, 300);
  }, []);

  // Auto scroll
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [lines]);

  const streamResponse = (text: string) => {
    setIsTyping(true);
    const chars = text.split("");
    let current = "";
    let idx = 0;

    setLines(prev => [...prev, { type: "response", content: "" }]);

    const tick = () => {
      if (idx < chars.length) {
        current += chars[idx];
        idx++;
        // Update last line
        setLines(prev => {
          const next = [...prev];
          next[next.length - 1] = { type: "response", content: current };
          return next;
        });
        // Faster on whitespace / punctuation
        const delay = [" ", "\n"].includes(chars[idx - 1]) ? 5 : 12;
        setTimeout(tick, delay);
      } else {
        setIsTyping(false);
      }
    };
    tick();
  };

  const handleSubmit = (query?: string) => {
    const q = query ?? input.trim();
    if (!q || isTyping) return;
    setInput("");
    setLines(prev => [...prev, { type: "user", content: `> ${q}` }]);
    const response = findResponse(q);
    setTimeout(() => streamResponse(response), 200);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div
      id="terminal"
      className="rounded-outer border overflow-hidden"
      style={{
        background: "rgba(0,0,0,0.55)",
        backdropFilter: "blur(24px)",
        borderColor: "var(--glass-border)",
        boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 24px 48px -8px rgba(0,0,0,0.7)",
      }}
    >
      {/* ── Status bar ─────────────────────────────────────────────── */}
      <div
        className="flex items-center justify-between px-4 py-2 border-b"
        style={{ borderColor: "var(--glass-border)", background: "rgba(0,0,0,0.4)" }}
      >
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
          </div>
          <span className="label-xs text-muted-foreground">MRINAL_CHOUDHARY_OS — INTERACTIVE TERMINAL</span>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <span className="label-xs" style={{ color: "hsl(var(--accent))" }}>
            SYSTEM: OPERATIONAL
          </span>
          <span className="label-xs text-muted-foreground">LOC: 19.1334°N 72.9133°E</span>
          <span className="label-xs text-muted-foreground font-mono">{clock}</span>
        </div>
      </div>

      {/* ── Output area ─────────────────────────────────────────────── */}
      <div
        ref={outputRef}
        className="h-64 md:h-80 overflow-y-auto p-4 font-mono text-sm leading-relaxed"
        style={{ scrollBehavior: "smooth" }}
      >
        {lines.map((line, i) => (
          <div key={i} className="mb-1 whitespace-pre-wrap">
            {line.type === "boot" && (
              <span className="text-muted-foreground">{line.content}</span>
            )}
            {line.type === "system" && (
              <span className="font-semibold" style={{ color: "hsl(var(--accent))" }}>{line.content}</span>
            )}
            {line.type === "user" && (
              <span className="font-medium" style={{ color: "hsl(var(--primary))" }}>{line.content}</span>
            )}
            {line.type === "response" && (
              <span className="text-foreground">{line.content}</span>
            )}
          </div>
        ))}
        {isTyping && (
          <span className="inline-block w-2 h-4 bg-accent animate-blink" />
        )}
      </div>

      {/* ── Smart prompts ─────────────────────────────────────────── */}
      {bootDone && (
        <div
          className="px-4 py-2 flex flex-wrap gap-2 border-t border-b"
          style={{ borderColor: "var(--glass-border)", background: "rgba(0,0,0,0.2)" }}
        >
          {SMART_PROMPTS.map(({ label, query }) => (
            <button
              key={label}
              onClick={() => handleSubmit(query)}
              disabled={isTyping}
              className="flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono transition-all duration-200"
              style={{
                border: "1px solid var(--glass-border)",
                background: "rgba(255,255,255,0.03)",
                color: "hsl(var(--muted-foreground))",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "hsl(var(--primary))";
                (e.currentTarget as HTMLElement).style.color = "hsl(var(--primary))";
                (e.currentTarget as HTMLElement).style.background = "rgba(0,149,255,0.08)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--glass-border)";
                (e.currentTarget as HTMLElement).style.color = "hsl(var(--muted-foreground))";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
              }}
            >
              <ChevronRight size={10} strokeWidth={1.5} />
              {label}
            </button>
          ))}
        </div>
      )}

      {/* ── Input row ────────────────────────────────────────────────── */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ background: "rgba(0,0,0,0.3)" }}
      >
        <span className="font-mono text-sm" style={{ color: "hsl(var(--accent))" }}>❯</span>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKey}
          disabled={isTyping}
          placeholder={bootDone ? "Ask anything about Mrinal's work..." : "Initializing..."}
          className="flex-1 bg-transparent font-mono text-sm outline-none placeholder:text-muted-foreground disabled:opacity-40"
          style={{ color: "hsl(var(--foreground))" }}
        />
        <button
          onClick={() => handleSubmit()}
          disabled={!input.trim() || isTyping}
          className="p-1.5 rounded transition-colors duration-200 disabled:opacity-30"
          style={{ color: "hsl(var(--primary))" }}
        >
          <Send size={14} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
};
