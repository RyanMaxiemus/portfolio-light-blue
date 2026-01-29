import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'VoxInterview',
    description:
      'Your voice-first AI interview coach. Get real-time, data-driven feedback on your spoken answers to role-specific questions, powered by Gemini AI and ElevenLabs TTS.',
    image: 'src/assets/images/voxinterview-screenshot.png',
    techStack: ['React', 'Vite', 'Express', 'Gemini API', 'ElevenLabs API'],
    liveDemo: 'https://RyanMaxie.tech/VoxInterview',
    github: 'https://github.com/RyanMaxiemus/voxinterview'
  },
  {
    title: 'AI Learning Tutor',
    description:
      'An intelligent, adaptive learning assistant that transforms any subject into a personalized curriculum, powered by local LLMs via Ollama.',
    image: 'src/assets/images/ai-learning-tutor-screenshot.png',
    techStack: [
      'Python',
      'Streamlit',
      'FastAPI/SQLAlchemy',
      'Ollama',
      'LangChain',
      'SQLite/ChromaDB'
    ],
    liveDemo: 'https://github.com/RyanMaxiemus/learning-tutor',
    github: 'https://github.com/RyanMaxiemus/learning-tutor'
  },
  {
    title: 'Recon Buddy AI (RBA)',
    description:
      'Automated reconnaissance and port scanning, summarized by a local AI model, so you can stop parsing raw terminal output.',
    image: 'src/assets/images/recon-buddy-ai-screenshot.png',
    techStack: [
      'Python',
      'Ollama',
      'Poetry',
      'Shodan API',
      'Netlas API',
      'Censys API',
      'Criminal IP API'
    ],
    liveDemo: 'https://github.com/RyanMaxiemus/recon-buddy-ai',
    github: 'https://github.com/RyanMaxiemus/recon-buddy-ai'
  },
  {
    title: 'Genny The Generator',
    description:
      'A sleek desktop application that transforms raw text into polished Markdown for seamless content creation, powered by Gemini 2.0 Flash AI.',
    image: 'src/assets/images/genny-the-generator-screenshot.png',
    techStack: ['HTML/CSS/JavaScript', 'Electron', 'Gemini API'],
    liveDemo: 'https://github.com/RyanMaxiemus/genny-the-ai-markdown-generator',
    github: 'https://github.com/RyanMaxiemus/genny-the-ai-markdown-generator'
  }
];

export function Projects() {
  return (
    <section
      id='projects'
      className='py-20'
    >
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center mb-12 text-foreground'>
          Featured Projects
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <Card
              key={index}
              className='group hover:shadow-lg transition-all duration-300 hover:-translate-y-1'
            >
              <CardHeader>
                <div className='aspect-video bg-muted rounded-lg mb-4 overflow-hidden'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                </div>
                <CardTitle className='text-xl'>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className='flex flex-wrap gap-2'>
                  {project.techStack.map(tech => (
                    <Badge
                      key={tech}
                      variant='secondary'
                      className='text-xs'
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className='flex gap-3'>
                <Button
                  size='sm'
                  className='flex-1'
                  asChild
                >
                  <a
                    href={project.liveDemo}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <ExternalLink className='w-4 h-4 mr-2' />
                    Live Demo
                  </a>
                </Button>
                <Button
                  size='sm'
                  variant='outline'
                  className='flex-1'
                  asChild
                >
                  <a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Github className='w-4 h-4 mr-2' />
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
