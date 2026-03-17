import tataSteelImg from "@/assets/tata-steel-rheology.png";
import { ProjectCard, type Project } from "./ProjectCard";

const PROJECTS: Project[] = [
  {
    id: "uav",
    title: "Multi-Terrain Emergency Response UAV",
    category: "Robotics",
    tags: ["UAV", "Laser Cutting", "Prototyping", "MDF"],
    description: "Deployable multi-terrain UAV for emergency scenarios. Built 2 working prototypes via laser cutting.",
    metrics: [{ label: "EFFICIENCY", value: "+30%" }, { label: "PROTOTYPES", value: "2" }, { label: "HRS/WEEK", value: "20+" }],
    year: "2024",
    image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=600&q=80",
    fullDescription: "Developed a multi-terrain emergency response UAV capable of operating in diverse field conditions. Led the full manufacturing pipeline using laser cutting and MDF fabrication, improving production efficiency by 30%. The project focused on deployability and real-world reliability over conceptual design.",
    techStack: ["SolidWorks", "Laser Cutting", "MDF Fabrication", "Arduino", "Simulink"],
    outcomes: ["Built 2 fully functional prototypes", "30% improvement in production efficiency", "Validated across multiple terrain types", "20+ hrs/week sustained engineering investment"],
    repo: "https://github.com/Mastermrinal/image_processing",
  },
  {
    id: "piezo",
    title: "Low-Cost Piezoelectric Accelerometer",
    category: "Hardware",
    tags: ["Sensors", "Fault Detection", "Piezoelectric", "Signal Processing"],
    description: "Industrial-grade fault detection sensor for 300–400 Hz vibration analysis in machinery.",
    metrics: [{ label: "FREQ_RANGE", value: "300–400Hz" }, { label: "COST", value: "LOW" }, { label: "APP", value: "INDUSTRIAL" }],
    year: "2023",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    fullDescription: "Designed and built a low-cost piezoelectric accelerometer capable of detecting vibration frequencies between 300–400 Hz. The system enables early fault detection in industrial machinery, significantly reducing failure risk through continuous vibration monitoring.",
    techStack: ["Piezoelectric Sensors", "Signal Processing", "Arduino", "MATLAB", "Tinkercad"],
    outcomes: ["300–400 Hz detection range achieved", "Validated for industrial fault detection", "Low-cost design enabling wide deployment", "Early vibration anomaly identification"],
  },
  {
    id: "energy",
    title: "Energy Demand Forecasting — IIT Bombay",
    category: "Data Science",
    tags: ["ARIMA", "GPR", "Forecasting", "Climate", "Python"],
    description: "Time-series forecasting of Cooling Degree Days for 100 Indian cities spanning 1991–2100.",
    metrics: [{ label: "R²_SCORE", value: "0.89" }, { label: "CITIES", value: "100" }, { label: "HORIZON", value: "2100" }],
    year: "2024",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    fullDescription: "Research internship at IIT Bombay focused on forecasting energy demand for cooling systems. Modeled Cooling Degree Days across 100 Indian cities using historical and projected climate data (1991–2100). Implemented S-curve, regression, and power law models achieving R² = 0.89.",
    techStack: ["Python", "ARIMA", "GPR", "S-Curve Modeling", "Regression", "Tableau"],
    outcomes: ["R² = 0.89 forecasting accuracy", "100 Indian cities modeled", "Timeline spanning 1991–2100", "Sustainability policy implications"],
  },
  {
    id: "cnn",
    title: "CNN Real-Time Plastic Detection System",
    category: "ML/AI",
    tags: ["CNN", "Computer Vision", "Python", "Real-time"],
    description: "Convolutional neural network pipeline for real-time plastic waste detection and classification.",
    metrics: [{ label: "TYPE", value: "CNN" }, { label: "MODE", value: "REAL-TIME" }, { label: "DOMAIN", value: "ENV" }],
    year: "2023",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80",
    fullDescription: "Built a CNN-based object detection pipeline for real-time identification and classification of plastic waste. The system was designed for environmental monitoring applications, combining deep learning with practical deployment considerations.",
    techStack: ["Python", "TensorFlow", "CNN", "OpenCV", "NumPy"],
    outcomes: ["Real-time detection pipeline deployed", "High accuracy on plastic waste classes", "Environmental monitoring application", "Optimized for edge deployment"],
  },
  {
    id: "terrain",
    title: "Terrain Classification — Legged Robots",
    category: "Research",
    tags: ["Ensemble Learning", "Robotics", "Classification", "AIR 2025"],
    description: "Published research on ML-driven terrain classification to guide adaptive locomotion in legged robots.",
    metrics: [{ label: "VENUE", value: "AIR 2025" }, { label: "METHOD", value: "ENSEMBLE" }, { label: "STATUS", value: "PUBLISHED" }],
    year: "2025",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80",
    fullDescription: "Published research paper at AIR 2025 on using ensemble machine learning methods for terrain classification in legged robotic systems. The work enables robots to autonomously adapt their locomotion strategy based on detected surface type.",
    techStack: ["Python", "Ensemble Learning", "Scikit-learn", "MATLAB", "ROS"],
    outcomes: ["Published at AIR 2025", "Novel ensemble approach for terrain sensing", "Validated on multiple terrain types", "Enables adaptive robot locomotion"],
  },
  {
    id: "carbon",
    title: "Carbon Fiber Production — Tata Steel",
    category: "Research",
    tags: ["Rheology", "Melt Spinning", "Carbon Fiber", "Materials"],
    description: "Rheological studies on viscoelastic behavior in melt spinning processes at Tata Steel.",
    metrics: [{ label: "ORG", value: "TATA STEEL" }, { label: "PROCESS", value: "MELT SPIN" }, { label: "DOMAIN", value: "MATERIALS" }],
    year: "2023",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80",
    fullDescription: "Industry internship at Tata Steel focused on carbon fiber production via melt spinning. Conducted rheological studies to characterize viscoelastic material behavior, providing data to optimize fiber properties for industrial-scale manufacturing.",
    techStack: ["ANSYS", "Rheometry", "Materials Characterization", "MATLAB", "Creo"],
    outcomes: ["Characterized viscoelastic behavior", "Optimized melt spinning parameters", "Industry-scale process insights", "Data fed into production pipeline"],
  },
];

export const ProjectsSection = () => (
  <section id="projects" className="py-20">
    <div className="mb-10">
      <span className="label-xs text-muted-foreground block mb-2">02 / PROJECTS</span>
      <h2 className="text-3xl font-medium tracking-tighter">Engineering Systems</h2>
      <p className="mt-2 text-sm text-muted-foreground max-w-xl">
        From UAVs to ML pipelines — built, tested, and deployed in the real world.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {PROJECTS.map((p, i) => (
        <ProjectCard key={p.id} project={p} delay={i * 60} />
      ))}
    </div>
  </section>
);
