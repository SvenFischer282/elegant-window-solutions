import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="space-y-6">
      {/* Contact Form */}
      <Card className="border-2 shadow-md">
        <CardHeader className="bg-primary text-primary-foreground">
          <CardTitle className="text-xl">Spojte sa s nami</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder="Meno"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-background"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-background"
              />
            </div>
            <div>
              <Textarea
                placeholder="Správa"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                className="bg-background"
              />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary-hover">
              Odoslať
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card className="border-2 shadow-md">
        <CardHeader>
          <CardTitle className="text-xl">Kontaktné informácie</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
            <div>
              <p className="text-sm text-muted-foreground">Lorem ipsum 123, Bratislava</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="text-primary mt-1 flex-shrink-0" size={20} />
            <div>
              <p className="text-sm text-muted-foreground">info@company.sk</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="text-primary mt-1 flex-shrink-0" size={20} />
            <div>
              <p className="text-sm text-muted-foreground">+421 XXX XXX XXX</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactSidebar;
