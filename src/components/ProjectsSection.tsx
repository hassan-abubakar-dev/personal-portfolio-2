import { ExternalLink, Github, Folder } from 'lucide-react';
import { Button } from './ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import ChatbotImage from '../../src/assets/chatbot-interface.png'
import FacebookImage from '../../src/assets/facebook-interface.png';
import GamePic from '../../src/assets/game-pic.png'

const ProjectsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation();
  const projects = [
    {
      title: 'Facebook clone fullstack',
      description: 'A full-stack social media app with authentication, email verification, posts, real-time chat, and file uploads, built using Node.js, PostgreSQL, and React, and deployed on Render and Vercel.',
      techStack: ['React', 'node js', 'express js', 'PostgreSQL', 'socket.io'],
      image: FacebookImage,
      github: 'https://github.com/hassan-abubakar-dev/facebook-clone-api',
      demo: 'https://github.com/hassan-abubakar-dev/facebook-clone-frontend',
    },
    {
      title: 'Chatbot UI',
      description: 'A frontend-only chatbot built with React.js, featuring state management and dynamic responses for simple user queries. Designed for interactive learning and demonstration, no backend required.',
      techStack: ['React', 'Tailwind CSS'],
      image: ChatbotImage,
      github: 'https://github.com/hassan-abubakar-dev/chatbot-ui',
      demo: 'https://statuesque-phoenix-a0bd18.netlify.app/',
    },
    {
      title: 'Cat, Dog, and Hyena Games',
      description: 'Interactive browser games similar to Rock-Paper-Scissors, built with vanilla JavaScript. Users play against the computer, scores are stored in local storage, and results are visually indicated with icons and highlights for wins or losses.',
      techStack: ['HTML', 'CSS', 'JAVASCRIPT'],
      image: GamePic,
      github: 'https://github.com/hassan-abubakar-dev/Cat-Dog-Hyena-Game',
      demo: 'https://github.com/hassan-abubakar-dev/Cat-Dog-Hyena-Game',
    },

  ];

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div ref={headerRef} className={`text-center mb-16 scroll-animate ${headerVisible ? 'visible' : ''}`}>
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Portfolio</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
              Featured{' '}
              <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A selection of projects that showcase my skills in software development and Fullstack web applications
            </p>
          </div>

          {/* Projects Grid */}
          <div ref={projectsRef} className={`grid md:grid-cols-2 gap-8 scroll-animate ${projectsVisible ? 'visible' : ''}`}>
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-card overflow-hidden group hover:border-primary/50 transition-all duration-500"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

                  {/* Overlay Icons */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-background/80 backdrop-blur-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-background/80 backdrop-blur-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Folder className="w-4 h-4 text-primary" />
                    <h3 className="font-display text-xl font-semibold">{project.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button variant="glass" size="lg" asChild>
              <a href="https://github.com/hassan-abubakar-dev" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                View More on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
