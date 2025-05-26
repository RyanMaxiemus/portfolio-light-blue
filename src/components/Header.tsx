
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-b" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-accent-400 bg-clip-text text-transparent">
          Portfolio
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {["about", "projects", "skills", "contact"].map((item) => (
            <Button
              key={item}
              variant="ghost"
              onClick={() => scrollToSection(item)}
              className="text-foreground hover:text-primary transition-colors capitalize"
            >
              {item}
            </Button>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
