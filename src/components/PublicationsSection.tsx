const PUBS = [
  {
    title: "Harnessing the Power of Ensemble Algorithms for Diabetes Prediction: A Comparative Analysis",
    venue: "IEEE ANTS 2024",
    year: "2024",
    type: "Conference",
    color: "hsl(var(--primary))",
    pdf: "/papers/Harnessing_the_Power_of_Ensemble_Algorithms_for.pdf",
    doi: "https://doi.org/10.1109/ANTS63515.2024.10898929",
    authors: "Maulik Gupta, Mrinal Choudhary, Divisha Garg, Prashant Singh Rana",
  },
  {
    title: "A Stacked Ensemble Machine Learning Technique for Robust Multi-Terrain Classification in Legged Robots",
    venue: "AIR 2025 · ACM",
    year: "2025",
    type: "Conference",
    color: "hsl(var(--accent))",
    pdf: "/papers/AIR_2025.pdf",
    doi: null,
    authors: "Yash Vardhan, Mrinal Choudhary, Ujjal Deep Singh Jhajj, Jyotindra Narayan, Ashish Singla",
  },
  {
    title: "Fraud Detection using Machine Learning",
    venue: "IEEE InC4 2025",
    year: "2025",
    type: "Conference",
    color: "hsl(40, 100%, 50%)",
    pdf: null,
    doi: "https://doi.org/10.1109/InC465408.2025.11256487",
    authors: null,
  },
];

export const PublicationsSection = () => (
  <section id="publications" className="py-20">
    <div className="mb-10">
      <span className="label-xs text-muted-foreground block mb-2">03 / PAPERS</span>
      <h2 className="text-3xl font-medium tracking-tighter">Publications</h2>
    </div>
    <div className="flex flex-col gap-3">
      {PUBS.map((p, i) => (
        <div key={i} className="glass rounded-inner px-5 py-4 flex items-center gap-4 group">
          <span className="data-value text-2xl font-bold w-8 text-center shrink-0" style={{ color: p.color }}>
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium">{p.title}</p>
            {p.authors && (
              <p className="label-xs text-muted-foreground mt-0.5 truncate">{p.authors}</p>
            )}
            <span className="label-xs text-muted-foreground mt-1 block">{p.venue} · {p.year}</span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="label-xs px-2 py-1 rounded-sm hidden sm:block"
              style={{ background: `${p.color}15`, color: p.color, border: `1px solid ${p.color}30` }}>
              {p.type.toUpperCase()}
            </span>
            {p.pdf && (
              <a
                href={p.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="label-xs px-2 py-1 rounded-sm transition-all duration-200 hidden sm:flex items-center gap-1"
                style={{ background: `${p.color}20`, color: p.color, border: `1px solid ${p.color}50` }}
                title="View PDF"
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                </svg>
                PDF
              </a>
            )}
            {p.doi && (
              <a
                href={p.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="label-xs px-2 py-1 rounded-sm transition-all duration-200 hidden sm:flex items-center gap-1"
                style={{ background: `${p.color}15`, color: p.color, border: `1px solid ${p.color}40` }}
                title="View DOI"
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                </svg>
                DOI
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);
