import { X, ExternalLink, FileText } from "lucide-react";
import type { Project } from "./ProjectCard";

interface Props {
  project: Project;
  open: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, open, onClose }: Props) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end" onClick={onClose}>
      <div
        className="modal-slide-in w-full max-w-lg h-full overflow-y-auto"
        style={{
          background: "rgba(7,7,12,0.97)",
          backdropFilter: "blur(24px)",
          borderLeft: "1px solid var(--glass-border)",
          boxShadow: "-8px 0 32px rgba(0,0,0,0.6)",
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b sticky top-0"
          style={{ borderColor: "var(--glass-border)", background: "rgba(0,0,0,0.8)", backdropFilter: "blur(12px)" }}>
          <div>
            <span className="label-xs text-muted-foreground block mb-1">{project.category} / {project.year}</span>
            <h2 className="text-base font-medium leading-tight">{project.title}</h2>
          </div>
          <button onClick={onClose} className="p-2 rounded transition-colors hover:bg-white/5"
            style={{ color: "hsl(var(--muted-foreground))" }}>
            <X size={16} strokeWidth={1.5} />
          </button>
        </div>

        {/* Image */}
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />

        {/* Body */}
        <div className="p-5 flex flex-col gap-5">
          {/* Metrics */}
          <div className="grid grid-cols-3 gap-3">
            {project.metrics.map(m => (
              <div key={m.label} className="p-3 rounded-inner text-center"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--glass-border)" }}>
                <span className="data-value text-lg font-semibold" style={{ color: "hsl(var(--primary))" }}>{m.value}</span>
                <span className="label-xs text-muted-foreground block mt-1">{m.label}</span>
              </div>
            ))}
          </div>

          {/* Description */}
          <div>
            <span className="label-xs text-muted-foreground block mb-2">OVERVIEW</span>
            <p className="text-sm leading-relaxed text-foreground/80">{project.fullDescription}</p>
          </div>

          {/* Tech stack */}
          <div>
            <span className="label-xs text-muted-foreground block mb-2">TECH_STACK</span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map(t => (
                <span key={t} className="label-xs px-2 py-1 rounded-sm"
                  style={{ background: "rgba(0,149,255,0.08)", color: "hsl(var(--primary))", border: "1px solid rgba(0,149,255,0.2)" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Outcomes */}
          <div>
            <span className="label-xs text-muted-foreground block mb-2">KEY_OUTCOMES</span>
            <ul className="flex flex-col gap-1.5">
              {project.outcomes.map((o, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                  <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "hsl(var(--accent))" }} />
                  {o}
                </li>
              ))}
            </ul>
          </div>

          {/* Repo link */}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="label-xs px-3 py-2 rounded-sm flex items-center gap-2 transition-all duration-200 w-fit"
              style={{ background: "rgba(0,149,255,0.08)", color: "hsl(var(--primary))", border: "1px solid rgba(0,149,255,0.25)" }}
            >
              <ExternalLink size={10} strokeWidth={2} />
              VIEW_REPOSITORY
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
