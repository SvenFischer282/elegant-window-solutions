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
      {/* Technology Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="bg-background rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 text-center"
          >
            <div className="mb-4 flex items-center justify-center h-50">
              <img
                src={tech.image}
                alt={tech.name}
                className="h-max-48 object-contain"
              />
            </div>
            <h4 className="font-bold text-foreground text-sm md:text-base">
              {tech.name}
            </h4>
            <p className="text-xs md:text-sm text-muted-foreground mt-1">
              {tech.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyGrid;
