import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

interface GDPRFormConsentProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  required?: boolean;
}

const GDPRFormConsent = ({ checked, onCheckedChange, required = true }: GDPRFormConsentProps) => {
  return (
    <div className="flex items-start space-x-3">
      <Checkbox
        id="gdpr-consent"
        checked={checked}
        onCheckedChange={onCheckedChange}
        className="mt-1"
        required={required}
      />
      <label
        htmlFor="gdpr-consent"
        className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
      >
        Odoslaním formulára súhlasím so spracovaním mojich osobných údajov za účelom 
        spracovania dopytu v súlade so{" "}
        <Link
          to="/privacy-policy"
          className="text-foreground hover:underline"
          target="_blank"
        >
          Zásadami ochrany osobných údajov
        </Link>
        . *
      </label>
    </div>
  );
};

export default GDPRFormConsent;
