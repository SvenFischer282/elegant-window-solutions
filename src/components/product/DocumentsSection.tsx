import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface DownloadableDocument {
  name: string;
  description: string;
  pdfUrl: string;
}

interface DocumentsSectionProps {
  documents: DownloadableDocument[];
}

const DocumentsSection = ({ documents }: DocumentsSectionProps) => {
  return (
    <div className="bg-background p-8 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-foreground">Dokumenty na stiahnutie</h2>
      <div className="grid grid-cols-1 gap-4">
        {documents.map((doc, index) => (
          <div key={index} className="flex items-center justify-between gap-4 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-1">{doc.name}</h3>
              <p className="text-sm text-muted-foreground">{doc.description}</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              asChild
              className="shrink-0"
            >
              <a href={doc.pdfUrl} download target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-2" />
                Stiahnuť PDF
              </a>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentsSection;
