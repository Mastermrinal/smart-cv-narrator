import { FileText, Download } from "lucide-react";

type Certificate = {
  title: string;
  issuer: string;
  year: string;
  file: string;
};

const CERTIFICATES: Certificate[] = [
  {
    title: "Thapar Summer School Certificate",
    issuer: "Thapar Institute of Technology",
    year: "2023",
    file: "public/Certificates/TSS_CERTIFICATE.pdf",
  },

  {
    title: "IEEE Research Paper Conference Publication",
    issuer: "IEEE",
    year: "2024",
    file: "public/Certificates/certificate_1.pdf",
  },
  {
    title: "IEEE Research Paper Conference Publication",
    issuer: "IEEE",
    year: "2024",
    file: "public/Certificates/CERTIFICATE_2.pdf",
  },
  {
    title: "Udemy Course Certificate",
    issuer: "Udemy",
    year: "2025",
    file: "public/Certificates/UC-3be5208a-d9ee-47c9-99c2-3f859f7ff59a.pdf",
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