interface CertificationsSectionProps {
  certifications: string[];
}

const CertificationsSection = ({ certifications }: CertificationsSectionProps) => {
  return (
    <div className="bg-background p-8 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-foreground">Certifikáty a normy</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <li key={index} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
            <span className="text-primary text-xl mt-0.5">✓</span>
            <span className="text-muted-foreground">{cert}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CertificationsSection;
