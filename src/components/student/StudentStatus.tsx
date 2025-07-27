import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Calendar, 
  Award, 
  Users, 
  Clock, 
  Target,
  BookOpen,
  Heart,
  Star
} from 'lucide-react';

export const StudentStatus = () => {
  const academicData = {
    gpa: 3.85,
    rank: 12,
    totalStudents: 240,
    subjects: [
      { name: 'Mathematics', grade: 'A+', trend: 'up' },
      { name: 'Science', grade: 'A', trend: 'up' },
      { name: 'English', grade: 'A-', trend: 'stable' },
      { name: 'History', grade: 'A', trend: 'up' },
    ]
  };

  const behaviorData = {
    attendance: 95,
    punctuality: 98,
    participation: 92,
    conduct: 'Excellent',
    infractions: 0
  };

  const activitiesData = [
    { name: 'Science Club', role: 'Member', participation: 85 },
    { name: 'Debate Team', role: 'Vice President', participation: 95 },
    { name: 'Math Olympiad', role: 'Participant', participation: 78 },
    { name: 'Student Council', role: 'Representative', participation: 90 },
  ];

  const achievements = [
    { title: 'Honor Roll', date: 'Fall 2023', type: 'academic' },
    { title: 'Perfect Attendance', date: 'December 2023', type: 'behavior' },
    { title: 'Debate Champion', date: 'November 2023', type: 'activity' },
    { title: 'Science Fair Winner', date: 'October 2023', type: 'academic' },
  ];

  const getTrendIcon = (trend: string) => {
    if (trend === 'up') return <TrendingUp className="text-green-400" size={16} />;
    if (trend === 'down') return <TrendingUp className="text-red-400 rotate-180" size={16} />;
    return <div className="w-4 h-4 rounded-full bg-muted-foreground"></div>;
  };

  const getAchievementIcon = (type: string) => {
    switch (type) {
      case 'academic': return <BookOpen className="text-blue-400" size={16} />;
      case 'behavior': return <Heart className="text-green-400" size={16} />;
      case 'activity': return <Star className="text-purple-400" size={16} />;
      default: return <Award className="text-accent" size={16} />;
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-2">Student Status Dashboard</h2>
        <p className="text-muted-foreground">Your comprehensive academic and behavioral overview</p>
      </div>

      {/* Overview Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="glass-card p-6 text-center">
          <div className="text-3xl font-bold text-blue-400 mb-2">{academicData.gpa}</div>
          <p className="text-muted-foreground">Current GPA</p>
        </div>
        <div className="glass-card p-6 text-center">
          <div className="text-3xl font-bold text-green-400 mb-2">#{academicData.rank}</div>
          <p className="text-muted-foreground">Class Rank</p>
        </div>
        <div className="glass-card p-6 text-center">
          <div className="text-3xl font-bold text-purple-400 mb-2">{behaviorData.attendance}%</div>
          <p className="text-muted-foreground">Attendance</p>
        </div>
        <div className="glass-card p-6 text-center">
          <div className="text-3xl font-bold text-accent mb-2">{activitiesData.length}</div>
          <p className="text-muted-foreground">Activities</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Academic Performance */}
        <div className="glass-card p-6">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
            <BookOpen className="mr-3 text-blue-400" size={20} />
            Academic Performance
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-xl bg-blue-400/10">
              <span className="text-foreground">Class Rank</span>
              <span className="font-bold text-blue-400">{academicData.rank} of {academicData.totalStudents}</span>
            </div>
            
            {academicData.subjects.map((subject, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-foreground">{subject.name}</span>
                  {getTrendIcon(subject.trend)}
                </div>
                <Badge variant="secondary">{subject.grade}</Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Behavior & Conduct */}
        <div className="glass-card p-6">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
            <Heart className="mr-3 text-green-400" size={20} />
            Behavior & Conduct
          </h3>
          
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-foreground">Attendance</span>
                <span className="font-bold text-green-400">{behaviorData.attendance}%</span>
              </div>
              <Progress value={behaviorData.attendance} className="h-2" />
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-foreground">Punctuality</span>
                <span className="font-bold text-green-400">{behaviorData.punctuality}%</span>
              </div>
              <Progress value={behaviorData.punctuality} className="h-2" />
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-foreground">Participation</span>
                <span className="font-bold text-green-400">{behaviorData.participation}%</span>
              </div>
              <Progress value={behaviorData.participation} className="h-2" />
            </div>
            
            <div className="flex items-center justify-between p-3 rounded-xl bg-green-400/10">
              <span className="text-foreground">Conduct Rating</span>
              <Badge variant="secondary" className="bg-green-400/20 text-green-400">
                {behaviorData.conduct}
              </Badge>
            </div>
          </div>
        </div>

        {/* Extracurricular Activities */}
        <div className="glass-card p-6">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
            <Users className="mr-3 text-purple-400" size={20} />
            Activities
          </h3>
          
          <div className="space-y-4">
            {activitiesData.map((activity, index) => (
              <div key={index} className="p-3 rounded-xl hover:bg-primary/5 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-foreground">{activity.name}</h4>
                  <Badge variant="outline">{activity.role}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Participation</span>
                  <span className="text-sm font-bold text-purple-400">{activity.participation}%</span>
                </div>
                <Progress value={activity.participation} className="h-1 mt-1" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Achievements */}
      <div className="glass-card p-6">
        <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
          <Award className="mr-3 text-accent" size={20} />
          Recent Achievements
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="glass-card p-4 text-center hover:scale-105 transition-transform">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                {getAchievementIcon(achievement.type)}
              </div>
              <h4 className="font-medium text-foreground mb-1">{achievement.title}</h4>
              <p className="text-sm text-muted-foreground">{achievement.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Goals & Targets */}
      <div className="glass-card p-6">
        <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
          <Target className="mr-3 text-accent" size={20} />
          Goals & Targets
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-blue-400/20 flex items-center justify-center mx-auto mb-3">
              <BookOpen className="text-blue-400" size={24} />
            </div>
            <h4 className="font-medium text-foreground mb-2">Academic Goal</h4>
            <p className="text-sm text-muted-foreground">Maintain 3.8+ GPA</p>
            <Progress value={85} className="mt-2" />
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-green-400/20 flex items-center justify-center mx-auto mb-3">
              <Calendar className="text-green-400" size={24} />
            </div>
            <h4 className="font-medium text-foreground mb-2">Attendance Goal</h4>
            <p className="text-sm text-muted-foreground">96% or higher</p>
            <Progress value={95} className="mt-2" />
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-purple-400/20 flex items-center justify-center mx-auto mb-3">
              <Users className="text-purple-400" size={24} />
            </div>
            <h4 className="font-medium text-foreground mb-2">Leadership Goal</h4>
            <p className="text-sm text-muted-foreground">Student Council President</p>
            <Progress value={60} className="mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
};