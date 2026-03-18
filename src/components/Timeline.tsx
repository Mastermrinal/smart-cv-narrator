import dpsImg from "/workspaces/smart-cv-narrator/src/assets/dps.jpeg";
import tietImg from "/workspaces/smart-cv-narrator/src/assets/tiet.jpeg";
import iitbImg from "/workspaces/smart-cv-narrator/src/assets/iitb.jpeg";
import convoImg from "/workspaces/smart-cv-narrator/src/assets/convo.jpeg";

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
      desc: "Engineering systems & research exposure",
    },
    {
      year: "2024",
      title: "Tata Steel R&D",
      desc: "Research internship — Jamshedpur",
    },
    {
      year: "2024",
      title: "IEEE ANTS Conference",
      desc: "Published paper — IIT Guwahati",
    },
    {
      year: "2025",
      title: "IIT Bombay",
      desc: "Final Semester Research Intern",
    },
  ];

  const images = [
    dpsImg,
    tietImg,
    iitbImg,
    convoImg,
  ];

  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-accent mb-12">
        Timeline
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT: TIMELINE */}
        <div className="relative border-l border-gray-600 ml-4">
          {timeline.map((item, index) => (
            <div key={index} className="mb-10 ml-6">

              {/* DOT */}
              <div className="absolute w-3 h-3 bg-accent rounded-full -left-1.5 mt-2"></div>

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

        {/* RIGHT: VERTICAL IMAGES */}
        <div className="flex flex-col gap-6 max-h-[600px] overflow-y-auto sticky top-20 pr-2">

          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="timeline"
              className="w-full h-[250px] object-cover rounded-xl shadow-lg hover:scale-[1.02] hover:shadow-2xl transition duration-300 border border-white/10"
            />
          ))}

        </div>

      </div>
    </section>
  );
}