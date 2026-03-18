export default function TimelineSection() {
  const timeline = [
    {
      year: "2018",
      title: "Class 10",
      desc: "86.5% — DPS Patna",
    },
    {
      year: "2020",
      title: "Class 12",
      desc: "75.6% — School of Creative Learning",
    },
    {
      year: "2021",
      title: "Thapar Institute (TIET)",
      desc: "B.E. Mechanical Engineering",
    },
    {
      year: "2023",
      title: "Student Intern — CEEMS",
      desc: "Worked on engineering systems & research exposure",
    },
    {
      year: "2024",
      title: "Tata Steel R&D",
      desc: "Research internship — Jamshedpur",
    },
    {
      year: "2024",
      title: "IEEE ANTS Conference",
      desc: "Published research paper — IIT Guwahati",
    },
    {
      year: "2025",
      title: "IIT Bombay",
      desc: "Final Semester Research Intern",
    },
  ];

  return (
    <section className="py-20 px-6 fade-in-up">
      <h2 className="text-3xl font-bold text-accent mb-12">
        Timeline
      </h2>

      <div className="relative border-l border-gray-600 ml-4">
        {timeline.map((item, index) => (
          <div key={index} className="mb-10 ml-6">
            
            {/* Dot */}
            <div className="absolute w-3 h-3 bg-accent rounded-full -left-1.5 mt-2"></div>

            {/* Content */}
            <p className="text-sm text-muted-foreground">
              {item.year}
            </p>

            <h3 className="text-lg font-semibold">
              {item.title}
            </h3>

            <p className="text-sm text-gray-400">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}