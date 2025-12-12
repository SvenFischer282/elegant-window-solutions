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
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {technologies.map((tech, index) => (
          <div 
            key={index} 
            className="bg-background rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 text-center"
          >
            <div className="aspect-square mb-4 flex items-center justify-center">
              <img
                src={tech.image}
                alt={tech.name}
                className="max-h-32 object-contain"
              />
            </div>
            <h4 className="font-bold text-foreground text-sm md:text-base">{tech.name}</h4>
            <p className="text-xs md:text-sm text-muted-foreground mt-1">{tech.description}</p>
          </div>
        ))}
      </div>

      {/* Technology Descriptions */}
      <div className="space-y-6">
        {technologies.map((tech, index) => (
          <div key={index} className="space-y-2">
            <h4 className="font-bold text-foreground">{tech.name}</h4>
            <p className="text-muted-foreground leading-relaxed">{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyGrid;
