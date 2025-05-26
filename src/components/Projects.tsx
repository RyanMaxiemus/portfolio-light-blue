
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with user authentication, payment processing, and admin dashboard.",
    image: "/placeholder.svg",
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    liveDemo: "https://demo-ecommerce.example.com",
    github: "https://github.com/username/ecommerce-platform",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    image: "/placeholder.svg",
    techStack: ["Vue.js", "Express", "PostgreSQL", "Socket.io", "Bootstrap"],
    liveDemo: "https://demo-tasks.example.com",
    github: "https://github.com/username/task-manager",
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather dashboard with location-based forecasts and interactive maps.",
    image: "/placeholder.svg",
    techStack: ["React", "TypeScript", "OpenWeather API", "Chart.js", "Styled Components"],
    liveDemo: "https://demo-weather.example.com",
    github: "https://github.com/username/weather-dashboard",
  },
  {
    title: "Social Media Analytics",
    description: "Analytics dashboard for social media metrics with data visualization and reporting features.",
    image: "/placeholder.svg",
    techStack: ["Angular", "Python", "Django", "D3.js", "Material UI"],
    liveDemo: "https://demo-analytics.example.com",
    github: "https://github.com/username/social-analytics",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex gap-3">
                <Button size="sm" className="flex-1" asChild>
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button size="sm" variant="outline" className="flex-1" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
