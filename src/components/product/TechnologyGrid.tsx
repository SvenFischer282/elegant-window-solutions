import React from "react";

interface TechnologyItem {
  name: string;
  description: string;
  image: string;
}

interface TechnologyGridProps {
  technologies: TechnologyItem[];
}

const TechnologyGrid = ({ technologies }: TechnologyGridProps) => {
  const isOdd = technologies.length % 2 !== 0;

  return (
    <div className="space-y-8">
      {/* Technology Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {technologies.map((tech, index) => {
          // 2. Determine if the current item is the last item
          const isLastItem = index === technologies.length - 1;

          // 3. Conditional class for centering the last item on md screens
          // This class is applied ONLY if the total count is odd AND it is the last item.
          const lastItemClass =
            isOdd && isLastItem
              ? "md:col-span-2 md:justify-self-center md:max-w-md"
              : "";

          return (
            <div
              key={index}
              className={`
                bg-background rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 text-center
                ${lastItemClass}
              `}
            >
              <div className="mb-4 flex items-center justify-center h-50">
                <img
                  src={tech.image}
                  alt={tech.name}
                  // Note: 'h-max-48' isn't a standard Tailwind class. Assuming 'max-h-48' or similar.
                  // For the purposes of this fix, I'll keep the original property name but it's worth checking.
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
          );
        })}
      </div>
    </div>
  );
};

export default TechnologyGrid;
