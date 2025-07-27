import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Brain, Trophy, Clock, TrendingUp, MessageSquare } from 'lucide-react';

export const StudentSubjects = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const subjects = [
    { 
      id: 'math',
      name: 'Mathematics', 
      grade: 'A+', 
      progress: 95,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      topics: ['Algebra', 'Geometry', 'Calculus'],
      nextAssignment: 'Chapter 12 Problems',
      dueDate: '2024-01-20',
      recentScores: [92, 88, 95, 91]
    },
    { 
      id: 'science',
      name: 'Science', 
      grade: 'A', 
      progress: 92,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      topics: ['Physics', 'Chemistry', 'Biology'],
      nextAssignment: 'Lab Report #5',
      dueDate: '2024-01-22',
      recentScores: [89, 94, 87, 92]
    },
    { 
      id: 'english',
      name: 'English', 
      grade: 'A-', 
      progress: 88,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      topics: ['Literature', 'Grammar', 'Writing'],
      nextAssignment: 'Essay on Shakespeare',
      dueDate: '2024-01-25',
      recentScores: [85, 90, 82, 88]
    },
    { 
      id: 'history',
      name: 'History', 
      grade: 'A', 
      progress: 90,
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10',
      topics: ['World Wars', 'Ancient Civilizations', 'Modern Era'],
      nextAssignment: 'Research Project',
      dueDate: '2024-01-28',
      recentScores: [88, 92, 89, 90]
    },
  ];

  if (selectedSubject) {
    const subject = subjects.find(s => s.id === selectedSubject);
    if (!subject) return null;

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Button variant="outline" onClick={() => setSelectedSubject(null)}>
            ← Back to Subjects
          </Button>
          <h2 className="text-2xl font-bold text-foreground">{subject.name}</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Subject Overview */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Progress Overview</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="text-center">
                  <div className={`text-3xl font-bold ${subject.color} mb-2`}>{subject.grade}</div>
                  <p className="text-muted-foreground">Current Grade</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">{subject.progress}%</div>
                  <p className="text-muted-foreground">Course Progress</p>
                </div>
              </div>
              <Progress value={subject.progress} className="mt-4" />
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Recent Performance</h3>
              <div className="flex items-center justify-between space-x-4">
                {subject.recentScores.map((score, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                      <span className="text-sm font-bold text-primary">{score}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Test {index + 1}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Study Topics</h3>
              <div className="grid md:grid-cols-3 gap-3">
                {subject.topics.map((topic, index) => (
                  <div key={index} className="glass-card p-3 text-center hover:scale-105 transition-transform">
                    <p className="font-medium text-foreground">{topic}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AI Tutor & Quick Actions */}
          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                <Brain className="mr-3 text-accent" size={20} />
                AI Tutor
              </h3>
              <div className="space-y-4">
                <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
                  <p className="text-sm text-foreground mb-2">
                    "Ready to help with {subject.name}! What would you like to study today?"
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    <span className="text-xs text-accent">AI Tutor Online</span>
                  </div>
                </div>
                <Button variant="default" className="w-full">
                  <MessageSquare className="mr-2" size={16} />
                  Start Chat Session
                </Button>
                <Button variant="outline" className="w-full">
                  <Brain className="mr-2" size={16} />
                  Practice Quiz
                </Button>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                <Clock className="mr-3 text-accent" size={20} />
                Next Assignment
              </h3>
              <div className="p-3 rounded-xl bg-muted/20">
                <h4 className="font-medium text-foreground">{subject.nextAssignment}</h4>
                <p className="text-sm text-muted-foreground">Due: {subject.dueDate}</p>
              </div>
              <Button variant="default" className="w-full mt-4">
                View Details
              </Button>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                <Trophy className="mr-3 text-accent" size={20} />
                Achievements
              </h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <Trophy className="text-accent" size={14} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Perfect Attendance</p>
                    <p className="text-xs text-muted-foreground">This month</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <TrendingUp className="text-primary" size={14} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Grade Improvement</p>
                    <p className="text-xs text-muted-foreground">+5% this term</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-2">Your Subjects</h2>
        <p className="text-muted-foreground">Track your progress and get AI-powered assistance</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {subjects.map((subject) => (
          <div 
            key={subject.id} 
            className="glass-card p-6 hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => setSelectedSubject(subject.id)}
          >
            <div className={`w-12 h-12 rounded-xl ${subject.bgColor} flex items-center justify-center mb-4`}>
              <BookOpen className={subject.color} size={24} />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{subject.name}</h3>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-muted-foreground">Grade:</span>
              <span className={`text-lg font-bold ${subject.color}`}>{subject.grade}</span>
            </div>
            <Progress value={subject.progress} className="mb-2" />
            <p className="text-sm text-muted-foreground">{subject.progress}% Complete</p>
          </div>
        ))}
      </div>

      <div className="glass-card p-6 text-center">
        <Brain className="mx-auto text-accent mb-4" size={48} />
        <h3 className="text-xl font-bold text-foreground mb-2">AI Study Assistant</h3>
        <p className="text-muted-foreground mb-4">Get personalized help across all your subjects</p>
        <Button variant="default" size="lg">
          Start Learning Session
        </Button>
      </div>
    </div>
  );
};