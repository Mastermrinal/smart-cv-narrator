import { FileText, Download } from "lucide-react";

type Certificate = {
  title: string;
  issuer: string;
  year: string;
  file: string;
};

const CERTIFICATES: Certificate[] = [
  {
    title: "IIT Bombay Research Internship",
    issuer: "IIT Bombay",
    year: "2025",
    file: "/certificates/inc4_certificate.pdf",
  },
  {
    title: "Tata Steel Internship",
    issuer: "Tata Steel R&D",
    year: "2024",
    file: "/certificates/certificate_1.pdf",
  },
  {
    title: "Machine Learning Certification",
    issuer: "Online Certification",
    year: "2024",
    file: "/certificates/certificate_2.pdf",
  },
  {
    title: "Udemy Course Certificate",
    issuer: "Udemy",
    year: "2023",
    file: "/certificates/udemy_certificate.pdf",
  },
];

export default function CertificatesSection() {
  return (
    <section className="py-20 px-6 fade-in-up">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-accent">
          Certificates
        </h2>
        <p className="text-muted-foreground mt-2">
          Verified credentials and achievements
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATES.map((cert, index) => (
          <div
            key={index}
            className="glass glass-hover p-6 rounded-2xl group transition-all duration-300"
          >
            {/* Icon */}
            <div className="mb-4 flex items-center justify-between">
              <FileText className="text-accent w-6 h-6" />
              <span className="text-xs text-muted-foreground">
                {cert.year}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-1">
              {cert.title}
            </h3>

            {/* Issuer */}
            <p className="text-sm text-muted-foreground mb-4">
              {cert.issuer}
            </p>

            {/* Actions */}
            <div className="flex items-center justify-between mt-auto">
              <a
                href={cert.file}
                target="_blank"
                className="text-accent text-sm hover:underline"
              >
                View
              </a>

              <a
                href={cert.file}
                download
                className="p-2 rounded-lg hover:bg-accent/10 transition"
              >
                <Download className="w-4 h-4 text-accent" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}