import { Button } from '@/components/ui/button';
import { BookOpen, Users, Cpu, Music, Palette, Globe, Calculator, Microscope, Trophy, Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const academicPrograms = [
  { 
    icon: Calculator, 
    title: 'STEM Excellence', 
    desc: 'Advanced Science, Technology, Engineering, and Mathematics curriculum with hands-on projects',
    features: ['Robotics Lab', 'Coding Bootcamps', 'Science Olympiad']
  },
  { 
    icon: Globe, 
    title: 'Global Languages', 
    desc: 'Multilingual education preparing students for global citizenship',
    features: ['5 Languages', 'Cultural Exchange', 'International Certificates']
  },
  { 
    icon: Palette, 
    title: 'Creative Arts', 
    desc: 'Comprehensive arts program fostering creativity and self-expression',
    features: ['Digital Art Studio', 'Music Production', 'Drama Theatre']
  },
  { 
    icon: BookOpen, 
    title: 'Literature & Writing', 
    desc: 'Advanced literacy and communication skills development',
    features: ['Creative Writing', 'Debate Club', 'Publishing Lab']
  },
];

const extracurriculars = [
  { icon: Trophy, title: 'Sports Teams', desc: 'Competitive athletics and fitness programs' },
  { icon: Music, title: 'Music Ensembles', desc: 'Orchestra, band, and choir programs' },
  { icon: Microscope, title: 'Science Clubs', desc: 'Research projects and science fairs' },
  { icon: Gamepad2, title: 'Gaming & Esports', desc: 'Strategic gaming and digital competitions' },
];

const aiFeatures = [
  { title: 'Personalized Learning Paths', desc: 'AI adapts to each student\'s learning style and pace' },
  { title: 'Real-time Progress Tracking', desc: 'Instant feedback and performance analytics' },
  { title: 'Smart Content Recommendation', desc: 'AI suggests relevant materials and resources' },
  { title: 'Virtual Study Assistant', desc: '24/7 AI tutor for homework help and explanations' },
];

export default function Programs() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="bubble"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${30 + Math.random() * 70}px`,
                height: `${30 + Math.random() * 70}px`,
                animationDelay: `${Math.random() * 15}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Our Programs
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive educational programs designed to nurture every aspect of student growth and development.
          </p>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Academic Programs
            </h2>
            <p className="text-lg text-muted-foreground">
              Rigorous curriculum designed for academic excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {academicPrograms.map((program, index) => (
              <div key={index} className="glass-card p-8 glow-effect group hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent p-1 flex-shrink-0">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <program.icon className="text-primary" size={24} />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-foreground">{program.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{program.desc}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-accent">Key Features:</h4>
                      <ul className="space-y-1">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Powered Learning */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AI-Powered Learning
            </h2>
            <p className="text-lg text-muted-foreground">
              Revolutionary technology enhancing the educational experience
            </p>
          </div>

          <div className="glass-card p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-foreground">
                  The Future of Education
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our AI-powered learning platform adapts to each student's unique needs, 
                  providing personalized education that maximizes potential and ensures success.
                </p>
                
                <Button asChild variant="primary" size="lg" className="group">
                  <Link to="/portal">
                    Try AI Learning
                    <Cpu className="ml-2 group-hover:rotate-12 transition-transform" size={20} />
                  </Link>
                </Button>
              </div>

              <div className="space-y-6">
                {aiFeatures.map((feature, index) => (
                  <div key={index} className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                    <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extracurricular Activities */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Extracurricular Activities
            </h2>
            <p className="text-lg text-muted-foreground">
              Beyond academics - developing well-rounded individuals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {extracurriculars.map((activity, index) => (
              <div key={index} className="glass-card p-6 text-center glow-effect group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent p-1 mb-4 mx-auto">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <activity.icon className="text-primary" size={24} />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{activity.title}</h3>
                <p className="text-muted-foreground text-sm">{activity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-8 md:p-12 glow-effect">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ready to Join Our Programs?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Discover your passion and unlock your potential with our comprehensive educational programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="primary" size="lg">
                <Link to="/contact">
                  Apply Now
                </Link>
              </Button>
              <Button asChild variant="neon" size="lg">
                <Link to="/portal">
                  Schedule Visit
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}