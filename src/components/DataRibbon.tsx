const ribbonItems = [
  "UAV_EFFICIENCY: +30%",
  "SENSOR_RANGE: 300–400Hz",
  "LATEST_PUB: IEEE_ANTS_2024",
  "R²_FORECAST: 0.89",
  "CITIES_MODELED: 100",
  "PROTOTYPES_BUILT: 2",
  "LOC: 19.1334°N 72.9133°E",
  "STATUS: AVAILABLE_FOR_RESEARCH",
  "STACK: PYTHON | MATLAB | SOLIDWORKS",
  "PAPERS: 3 PUBLISHED",
  "CNN_DETECTION: REAL-TIME",
  "ARIMA_GPR: TIME-SERIES_FORECASTING",
];

export const DataRibbon = () => {
  const doubled = [...ribbonItems, ...ribbonItems];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-8 overflow-hidden border-b"
      style={{ borderColor: "var(--glass-border)", background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)" }}>
      <div className="flex items-center h-full">
        {/* Static prefix label */}
        <div className="flex-shrink-0 px-3 h-full flex items-center border-r"
          style={{ borderColor: "var(--glass-border)" }}>
          <span className="label-xs text-accent">SYS/LIVE</span>
        </div>
        {/* Scrolling content */}
        <div className="flex-1 overflow-hidden relative">
          <div className="ribbon-track">
            {doubled.map((item, i) => (
              <span key={i} className="inline-flex items-center gap-4 px-6">
                <span className="label-xs text-muted-foreground">{item}</span>
                <span className="inline-block w-1 h-1 rounded-full bg-accent opacity-60" />
              </span>
            ))}
          </div>
        </div>
        {/* Right status */}
        <div className="flex-shrink-0 px-3 h-full flex items-center gap-2 border-l"
          style={{ borderColor: "var(--glass-border)" }}>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent pulse-glow" />
          <span className="label-xs text-accent">ONLINE</span>
        </div>
      </div>
    </div>
  );
};
