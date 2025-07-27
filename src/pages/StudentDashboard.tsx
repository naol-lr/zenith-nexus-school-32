import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Calendar, Award, TrendingUp, Clock, CheckCircle, AlertCircle } from 'lucide-react';

export default function StudentDashboard() {
  const studentStats = [
    { title: 'Current GPA', value: '3.85', icon: Award, color: 'text-yellow-500' },
    { title: 'Completed Courses', value: '24', icon: CheckCircle, color: 'text-green-500' },
    { title: 'Active Courses', value: '6', icon: BookOpen, color: 'text-blue-500' },
    { title: 'Study Hours', value: '42h', icon: Clock, color: 'text-purple-500' },
  ];

  const upcomingAssignments = [
    { subject: 'Mathematics', assignment: 'Calculus Problem Set #5', due: 'Tomorrow', priority: 'high' },
    { subject: 'Physics', assignment: 'Lab Report - Wave Properties', due: '3 days', priority: 'medium' },
    { subject: 'Chemistry', assignment: 'Molecular Structure Essay', due: '1 week', priority: 'low' },
    { subject: 'Biology', assignment: 'Ecosystem Research Project', due: '2 weeks', priority: 'low' },
  ];

  const recentGrades = [
    { subject: 'Mathematics', assignment: 'Quiz #7', grade: 'A-', points: '92/100' },
    { subject: 'Physics', assignment: 'Midterm Exam', grade: 'B+', points: '87/100' },
    { subject: 'Chemistry', assignment: 'Lab Practical', grade: 'A', points: '95/100' },
    { subject: 'English', assignment: 'Essay Analysis', grade: 'A-', points: '91/100' },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-yellow-500';
      default: return 'text-green-500';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return <AlertCircle className="h-4 w-4 text-red-500" />;
      case 'medium': return <Clock className="h-4 w-4 text-yellow-500" />;
      default: return <CheckCircle className="h-4 w-4 text-green-500" />;
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
            Student Dashboard
          </h1>
          <p className="text-lg text-muted-foreground">
            Track your academic progress and stay on top of your studies.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {studentStats.map((stat, index) => (
            <Card key={index} className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upcoming Assignments */}
          <div className="lg:col-span-2">
            <Card className="glass-card mb-6">
              <CardHeader>
                <CardTitle className="text-foreground">Upcoming Assignments</CardTitle>
                <CardDescription>Stay on track with your deadlines</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAssignments.map((assignment, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 rounded-lg border border-border/50 hover:bg-primary/5 transition-colors">
                      {getPriorityIcon(assignment.priority)}
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-foreground">{assignment.assignment}</h4>
                          <span className={`text-sm font-medium ${getPriorityColor(assignment.priority)}`}>
                            Due {assignment.due}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{assignment.subject}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Grades */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-foreground">Recent Grades</CardTitle>
                <CardDescription>Your latest academic performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentGrades.map((grade, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border/50">
                      <div>
                        <h4 className="font-semibold text-foreground">{grade.assignment}</h4>
                        <p className="text-sm text-muted-foreground">{grade.subject}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-accent">{grade.grade}</p>
                        <p className="text-sm text-muted-foreground">{grade.points}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-foreground">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="glass" className="w-full justify-start">
                  <BookOpen className="mr-2 h-4 w-4" />
                  View Courses
                </Button>
                <Button variant="glass" className="w-full justify-start">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule
                </Button>
                <Button variant="glass" className="w-full justify-start">
                  <Award className="mr-2 h-4 w-4" />
                  Achievements  
                </Button>
                <Button variant="glass" className="w-full justify-start">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Progress Report
                </Button>
              </CardContent>
            </Card>

            {/* Academic Progress */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-foreground">Academic Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Semester Progress</span>
                    <span className="text-sm font-medium text-foreground">78%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Assignment Completion</span>
                    <span className="text-sm font-medium text-foreground">94%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: '94%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Attendance Rate</span>
                    <span className="text-sm font-medium text-foreground">96%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '96%' }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}