import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const SkillsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  const skillCategories = [
    {
      title: 'Front-end Development',
      description: 'Building responsive, interactive user interfaces',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS'],
      color: 'from-primary to-primary/50',
    },
    {
      title: 'Back-end Development',
      description: 'Creating robust server-side applications',
      skills: ['Node.js', 'Express', 'ORM', 'SQL', 'PostgreSQL', 'MYSQL', 'REST APIs', 'spring & spring boot'],
      color: 'from-[hsl(200_80%_50%)] to-[hsl(200_80%_30%)]',
    },
    {
      title: 'Soft Skills',
      description: 'Essential professional competencies',
      skills: ['Communication', 'Problem Solving', 'Team Collaboration', 'Adaptability'],
      color: 'from-green-500 to-green-500/50',
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 relative bg-secondary/20 ">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div ref={headerRef} className={`text-center mb-16 scroll-animate ${headerVisible ? 'visible' : ''}`}>
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Skills</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
              Technical{' '}
              <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A comprehensive toolkit built through years of hands-on experience and continuous learning
            </p>
          </div>

          {/* Skills Grid */}
          <div ref={gridRef} className={`grid md:grid-cols-2 gap-6 scroll-animate ${gridVisible ? 'visible' : ''}`}>
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="glass-card p-8 hover:border-primary/50 transition-all duration-300 group"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-1 h-16 rounded-full bg-gradient-to-b ${category.color}`} />
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-2">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 text-sm bg-secondary rounded-lg border border-border/50 text-foreground/80 hover:border-primary/50 hover:text-foreground transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
