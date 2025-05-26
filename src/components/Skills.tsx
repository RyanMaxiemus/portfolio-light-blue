
import { Progress } from "@/components/ui/progress";

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
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Skills & Expertise</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress 
                  value={skill.level} 
                  className="h-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
