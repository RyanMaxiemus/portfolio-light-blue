
import { Progress } from "@/components/ui/progress";
import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "JavaScript/TypeScript", level: 95 },
  { name: "React/Next.js", level: 90 },
  { name: "Node.js/Express", level: 85 },
  { name: "Python/Django", level: 80 },
  { name: "PostgreSQL/MongoDB", level: 85 },
  { name: "AWS/Cloud Services", level: 75 },
  { name: "Docker/DevOps", level: 70 },
  { name: "GraphQL", level: 80 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Git/GitHub", level: 95 },
];

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevels, setAnimatedLevels] = useState(skills.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          // Animate each skill level (slower animation)
          skills.forEach((skill, index) => {
            let current = 0;
            const target = skill.level;
            const increment = target / 120; // 120 frames for slower animation (was 60)
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              
              setAnimatedLevels(prev => {
                const newLevels = [...prev];
                newLevels[index] = Math.round(current);
                return newLevels;
              });
            }, 25); // 25ms intervals for slower animation (was 16ms)
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section id="skills" className="py-20 bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Skills & Expertise</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {isVisible ? animatedLevels[index] : 0}%
                  </span>
                </div>
                <Progress 
                  value={isVisible ? animatedLevels[index] : 0}
                  className="h-2 transition-all duration-1000 ease-out"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
