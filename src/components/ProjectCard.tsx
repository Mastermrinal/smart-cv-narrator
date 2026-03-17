import { useState } from "react";
import { ProjectModal } from "./ProjectModal";

export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  metrics: { label: string; value: string }[];
  year: string;
  image: string;
  fullDescription: string;
  techStack: string[];
  outcomes: string[];
  repo?: string;
}

const CATEGORY_COLORS: Record<string, string> = {
  "Robotics": "hsl(var(--primary))",
  "ML/AI": "hsl(var(--accent))",
  "Research": "hsl(40, 100%, 50%)",
  "Hardware": "hsl(300, 100%, 60%)",
  "Data Science": "hsl(120, 80%, 50%)",
};

interface Props {
  project: Project;
  delay?: number;
}

export const ProjectCard = ({ project, delay = 0 }: Props) => {
  const [open, setOpen] = useState(false);
  const catColor = CATEGORY_COLORS[project.category] ?? "hsl(var(--muted-foreground))";

  return (
    <>
      <div
        className="group glass glass-hover rounded-inner flex flex-col cursor-pointer overflow-hidden"
        style={{ animationDelay: `${delay}ms` }}
        onClick={() => setOpen(true)}
      >
        {/* Image */}
        <div className="relative overflow-hidden h-40">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover filter grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
          />
          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span
              className="label-xs px-2 py-1 rounded-sm"
              style={{
                background: "rgba(0,0,0,0.7)",
                border: `1px solid ${catColor}40`,
                color: catColor,
              }}
            >
              {project.category}
            </span>
          </div>
          {/* Year */}
          <div className="absolute top-3 right-3">
            <span className="label-xs px-2 py-1 rounded-sm"
              style={{ background: "rgba(0,0,0,0.7)", color: "hsl(var(--muted-foreground))", border: "1px solid var(--glass-border)" }}>
              {project.year}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-4 flex flex-col gap-3">
          <h3 className="text-sm font-medium leading-snug">{project.title}</h3>
          <p className="text-xs leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
            {project.description}
          </p>

          {/* Metrics row */}
          <div className="flex gap-3 mt-auto pt-2 border-t" style={{ borderColor: "var(--glass-border)" }}>
            {project.metrics.map((m) => (
              <div key={m.label} className="flex flex-col gap-0.5">
                <span className="label-xs text-muted-foreground">{m.label}</span>
                <span className="data-value text-xs font-semibold" style={{ color: catColor }}>{m.value}</span>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="label-xs px-1.5 py-0.5 rounded-sm"
                style={{ background: "rgba(255,255,255,0.04)", color: "hsl(var(--muted-foreground))", border: "1px solid var(--glass-border)" }}>
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-1 mt-1">
            <span className="label-xs" style={{ color: "hsl(var(--primary))" }}>VIEW_DOCUMENTATION</span>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-70 group-hover:translate-x-1 transition-transform">
              <path d="M2 5h6M5 2l3 3-3 3" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      <ProjectModal project={project} open={open} onClose={() => setOpen(false)} />
    </>
  );
};
