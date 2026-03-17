const PUBS = [
  {
    title: "Ensemble Learning for Diabetes Prediction",
    venue: "IEEE ANTS 2024",
    year: "2024",
    type: "Conference",
    color: "hsl(var(--primary))",
  },
  {
    title: "Terrain Classification in Legged Robots",
    venue: "AIR 2025",
    year: "2025",
    type: "Conference",
    color: "hsl(var(--accent))",
  },
  {
    title: "Fraud Detection using Machine Learning",
    venue: "IEEE InC4 2025",
    year: "2025",
    type: "Conference",
    color: "hsl(40, 100%, 50%)",
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
        <div key={i} className="glass rounded-inner px-5 py-4 flex items-center gap-4">
          <span className="data-value text-2xl font-bold w-8 text-center" style={{ color: p.color }}>
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="flex-1">
            <p className="text-sm font-medium">{p.title}</p>
            <span className="label-xs text-muted-foreground mt-1 block">{p.venue} · {p.year}</span>
          </div>
          <span className="label-xs px-2 py-1 rounded-sm hidden sm:block"
            style={{ background: `${p.color}15`, color: p.color, border: `1px solid ${p.color}30` }}>
            {p.type.toUpperCase()}
          </span>
        </div>
      ))}
    </div>
  </section>
);
