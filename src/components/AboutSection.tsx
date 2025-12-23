import { Code2, Brain, GraduationCap, MessageSquare, Webcam } from 'lucide-react';
import workingPhoto from '@/assets/IMG-20251223-WA0014.jpg';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AboutSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: highlightsRef, isVisible: highlightsVisible } = useScrollAnimation();

  const highlights = [
    {
      icon: Code2,
      title: '2+ Years',
      description: 'mid level Experience developer',
    },
    {
      icon: Webcam,
      title: 'Fullstack',
      description: 'Node js using express, spring boot and react',
    },
    {
      icon: GraduationCap,
      title: 'BSc Software Engineering',
      description: 'Federal University Duts, jigawa state, Nigeria',
    },
    {
      icon: MessageSquare,
      title: 'Communicator',
      description: 'Clear & Collaborative',
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative ">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div ref={headerRef} className={`text-center mb-16 scroll-animate ${headerVisible ? 'visible' : ''}`}>
            <span className="text-primary text-sm font-medium tracking-wider uppercase">About Me</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
              Passionate About Building{' '}
              <span className="gradient-text">Software Solution</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo and Bio Content */}
            <div ref={contentRef} className={`space-y-6 scroll-animate-left ${contentVisible ? 'visible' : ''}`}>
              {/* Working Photo */}
              <div className="relative mb-8">
                <div className="rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/10">
                  <img 
                    src={workingPhoto} 
                    alt="Bashir working at his desk" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a Software and Fullstack developer with over 2 years of experience building robust applications and deployment of systems. My journey in tech started with a fascination for how software can transform ideas into reality.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently pursuing my BSc at Federal University Dutse, I combine academic knowledge with hands-on industry experience. I specialize in full-stack development and applications.
              </p>
            </div>

            {/* Highlights Grid */}
            <div ref={highlightsRef} className={`grid grid-cols-2 gap-4 scroll-animate-right ${highlightsVisible ? 'visible' : ''}`}>
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="glass-card p-6 hover:border-primary/50 transition-all duration-300 group"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
