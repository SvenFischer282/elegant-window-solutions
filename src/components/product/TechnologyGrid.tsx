interface TechnologyItem {
  name: string;
  description: string;
  image: string;
}

interface TechnologyGridProps {
  technologies: TechnologyItem[];
}

const TechnologyGrid = ({ technologies }: TechnologyGridProps) => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="group text-center"
          >
            <div className="mb-4 flex items-center justify-center h-48 bg-muted/30">
              <img
                src={tech.image}
                alt={tech.name}
                loading="lazy"
                className="max-h-40 object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h4 className="font-normal text-foreground text-base">
              {tech.name}
            </h4>
            <p className="text-sm text-muted-foreground mt-1">
              {tech.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyGrid;
