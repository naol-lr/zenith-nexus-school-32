import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Users, Award, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { School3D } from '@/components/School3D';
import schoolLogo from '@/assets/school-logo.png';

export default function Home() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="bubble"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${30 + Math.random() * 80}px`,
                height: `${30 + Math.random() * 80}px`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${20 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Content */}
              <div className="text-center lg:text-left">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-glow">
                    Unifarm
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Empowering the next generation through innovative education, 
                  cutting-edge technology, and personalized learning experiences.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                  <Button asChild variant="primary" size="lg" className="group">
                    <Link to="/programs">
                      Explore Programs
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </Link>
                  </Button>
                  
                  <Button asChild variant="glass" size="lg">
                    <Link to="/portal">
                      Student Portal
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right side - 3D School */}
              <div className="h-96 lg:h-[500px] relative">
                <div className="glass-card h-full p-6 glow-effect">
                  <School3D className="w-full h-full" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Director's Welcome */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Welcome from Our Director
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  "At Unifarm, we believe in nurturing not just academic excellence, 
                  but also creativity, critical thinking, and character. Our state-of-the-art 
                  facilities and innovative teaching methods prepare students for the challenges 
                  of tomorrow."
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  "We are committed to providing a holistic education that embraces technology 
                  while preserving the fundamental values of learning, respect, and community."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent p-1">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">DS</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Dr. Sarah Johnson</p>
                    <p className="text-muted-foreground">School Director</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="glass-card p-6 space-y-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Our Achievements</h3>
                  
                  {[
                    { icon: Award, title: "Excellence in Education", desc: "National recognition for innovative teaching" },
                    { icon: Users, title: "1000+ Happy Students", desc: "Growing community of learners" },
                    { icon: Zap, title: "AI-Powered Learning", desc: "Cutting-edge educational technology" },
                  ].map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-4 p-3 rounded-xl hover:bg-primary/5 transition-colors">
                      <div className="p-2 rounded-lg bg-primary/20 text-accent">
                        <achievement.icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground">{achievement.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-8 md:p-12 glow-effect">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join our community of innovative learners and experience education reimagined for the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="primary" size="lg" className="group">
                <Link to="/contact">
                  Apply Now
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </Button>
              <Button asChild variant="neon" size="lg">
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}