import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  title: string;
  icon: LucideIcon;
  path: string;
}

const ProductCard = ({ title, icon: Icon, path }: ProductCardProps) => {
  return (
    <Link to={path} className="block">
      <Card className="hover-lift cursor-pointer border-2 hover:border-primary transition-all">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-light flex items-center justify-center">
            <Icon size={32} className="text-primary" />
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
