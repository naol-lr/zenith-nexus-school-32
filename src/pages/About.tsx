import { Clock, Target, Eye, Users, Award, BookOpen } from 'lucide-react';

const timelineEvents = [
  { year: '2018', title: 'Foundation', desc: 'Unifarm was established with a vision for innovative education' },
  { year: '2019', title: 'First Campus', desc: 'Opened our state-of-the-art main campus with modern facilities' },
  { year: '2020', title: 'Digital Transformation', desc: 'Pioneered online learning during global challenges' },
  { year: '2021', title: 'AI Integration', desc: 'Launched AI-powered personalized learning systems' },
  { year: '2022', title: 'Expansion', desc: 'Added new programs and international partnerships' },
  { year: '2023', title: 'Recognition', desc: 'Received national awards for educational excellence' },
  { year: '2024', title: 'Future Ready', desc: 'Continuing to lead in educational innovation' },
];

const achievements = [
  { icon: Award, title: 'National Excellence Award', desc: 'Recognized for outstanding educational innovation' },
  { icon: Users, title: '98% Student Satisfaction', desc: 'Consistently high student and parent satisfaction rates' },
  { icon: BookOpen, title: '50+ Programs', desc: 'Comprehensive range of academic and extracurricular programs' },
];

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bubble"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${40 + Math.random() * 60}px`,
                height: `${40 + Math.random() * 60}px`,
                animationDelay: `${Math.random() * 20}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              About Unifarm
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Pioneering the future of education through innovation, technology, and personalized learning experiences.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="glass-card p-8 glow-effect group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent p-1 mb-6 mx-auto">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <Target className="text-primary" size={24} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-foreground">Our Mission</h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                To provide innovative, technology-enhanced education that prepares students for success 
                in an ever-evolving global society while fostering creativity, critical thinking, and character.
              </p>
            </div>

            {/* Vision */}
            <div className="glass-card p-8 glow-effect group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent p-1 mb-6 mx-auto">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <Eye className="text-primary" size={24} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-foreground">Our Vision</h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                To be the leading educational institution that seamlessly blends traditional academic 
                excellence with cutting-edge technology to create future-ready global citizens.
              </p>
            </div>

            {/* Values */}
            <div className="glass-card p-8 glow-effect group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent p-1 mb-6 mx-auto">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <Users className="text-primary" size={24} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-foreground">Our Values</h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                Innovation, Integrity, Inclusivity, and Excellence guide everything we do. 
                We believe in nurturing each student's unique potential in a supportive environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* School History Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              A timeline of milestones and achievements
            </p>
          </div>

          <div className="glass-card p-8 md:p-12">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent opacity-30"></div>

              <div className="space-y-8">
                {timelineEvents.map((event, index) => (
                  <div key={index} className="relative flex items-start space-x-6">
                    {/* Timeline Dot */}
                    <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent p-1 flex-shrink-0">
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                        <Clock className="text-primary" size={20} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 pb-8">
                      <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                        <div className="flex items-center space-x-4 mb-2">
                          <span className="text-2xl font-bold text-accent">{event.year}</span>
                          <h3 className="text-xl font-semibold text-foreground">{event.title}</h3>
                        </div>
                        <p className="text-muted-foreground">{event.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Our Achievements
            </h2>
            <p className="text-lg text-muted-foreground">
              Recognition and milestones that define our excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="glass-card p-8 text-center glow-effect group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent p-1 mb-6 mx-auto">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <achievement.icon className="text-primary" size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{achievement.title}</h3>
                <p className="text-muted-foreground">{achievement.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}