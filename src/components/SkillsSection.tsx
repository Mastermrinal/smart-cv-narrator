const SKILLS = [
  {
    category: "MECHANICAL & CAD",
    items: ["SolidWorks", "Creo", "ANSYS", "Tinkercad", "Fusion 360"],
    color: "hsl(var(--primary))",
  },
  {
    category: "PROGRAMMING",
    items: ["Python", "MATLAB", "C++", "LaTeX"],
    color: "hsl(var(--accent))",
  },
  {
    category: "ROBOTICS & EMBEDDED",
    items: ["Arduino", "Simulink", "ROS", "Signal Processing"],
    color: "hsl(40, 100%, 50%)",
  },
  {
    category: "ML & DATA",
    items: ["TensorFlow", "Scikit-learn", "Ensemble Learning", "ARIMA", "GPR", "CNN"],
    color: "hsl(300, 100%, 60%)",
  },
  {
    category: "DATA VISUALIZATION",
    items: ["Tableau", "MATLAB Plots", "Excel", "NumPy / Pandas"],
    color: "hsl(120, 80%, 50%)",
  },
];

export const SkillsSection = () => (
  <section id="skills" className="py-20">
    <div className="mb-10">
      <span className="label-xs text-muted-foreground block mb-2">04 / SYSTEMS</span>
      <h2 className="text-3xl font-medium tracking-tighter">Technical Stack</h2>
      <p className="mt-2 text-sm text-muted-foreground max-w-xl">
        End-to-end capability from mechanical design to ML deployment.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {SKILLS.map((skill) => (
        <div
          key={skill.category}
          className="glass rounded-inner p-5"
        >
          <span className="label-xs block mb-3" style={{ color: skill.color }}>{skill.category}</span>
          <div className="flex flex-wrap gap-2">
            {skill.items.map((item) => (
              <span
                key={item}
                className="font-mono text-xs px-2.5 py-1 rounded-sm"
                style={{
                  background: `${skill.color}10`,
                  border: `1px solid ${skill.color}25`,
                  color: "hsl(var(--foreground))",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);
