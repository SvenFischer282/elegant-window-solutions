import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSidebar = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Správa odoslaná",
      description: "Čoskoro vás budeme kontaktovať.",
    });
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  
  return (
    <div className="space-y-8">
      {/* Contact Form */}
      <div className="bg-muted/30 p-6">
        <h3 className="text-lg font-normal mb-6 text-foreground">Kontaktujte nás</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Meno"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
            required
            className="bg-background border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground transition-colors"
          />
          <Input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            required
            className="bg-background border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground transition-colors"
          />
          <Textarea
            placeholder="Správa"
            value={formData.message}
            onChange={(e) =>
              setFormData({
                ...formData,
                message: e.target.value,
              })
            }
            required
            rows={4}
            className="bg-background border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground transition-colors resize-none"
          />
          <Button
            type="submit"
            className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-none h-10 text-sm tracking-wider uppercase"
          >
            Odoslať
          </Button>
        </form>
      </div>

      {/* Contact Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-normal text-foreground">Kontaktné údaje</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="text-foreground mt-0.5 flex-shrink-0" size={18} strokeWidth={1.5} />
            <p className="text-sm text-muted-foreground">
              Slovenská 256, 05 321 Markušovce
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="text-foreground mt-0.5 flex-shrink-0" size={18} strokeWidth={1.5} />
            <a href="mailto:info@company.sk" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              info@company.sk
            </a>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="text-foreground mt-0.5 flex-shrink-0" size={18} strokeWidth={1.5} />
            <a href="tel:+421903468472" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              +421 903 468 472
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSidebar;
