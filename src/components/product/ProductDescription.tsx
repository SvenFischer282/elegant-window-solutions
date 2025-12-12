interface ProductDescriptionProps {
  title: string;
  description: string;
  features?: string[];
}

const ProductDescription = ({ title, description, features }: ProductDescriptionProps) => {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl md:text-5xl font-bold text-foreground">{title}</h1>
      <p className="text-lg text-muted-foreground leading-relaxed">
        {description}
      </p>
      
      {features && features.length > 0 && (
        <div className="space-y-3">
          <p className="text-muted-foreground leading-relaxed">
            Naša spoločnosť sa zaoberá:
          </p>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductDescription;
