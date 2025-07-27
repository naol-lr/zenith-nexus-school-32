import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Users, BarChart3, Calendar, MessageSquare, Settings } from 'lucide-react';

export default function TeacherDashboard() {
  const stats = [
    { title: 'Active Students', value: '42', icon: Users, color: 'text-blue-500' },
    { title: 'Courses Teaching', value: '6', icon: BookOpen, color: 'text-green-500' },
    { title: 'Assignments', value: '18', icon: Calendar, color: 'text-orange-500' },
    { title: 'Messages', value: '23', icon: MessageSquare, color: 'text-purple-500' },
  ];

  const recentActivities = [
    { activity: 'Graded Math Quiz #3', time: '2 hours ago', type: 'grading' },
    { activity: 'Posted new Science assignment', time: '5 hours ago', type: 'assignment' },
    { activity: 'Student meeting with John Doe', time: '1 day ago', type: 'meeting' },
    { activity: 'Updated Biology lesson plan', time: '2 days ago', type: 'planning' },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
            Teacher Dashboard
          </h1>
          <p className="text-lg text-muted-foreground">
            Welcome back! Here's what's happening in your classes today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
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
          {/* Recent Activities */}
          <div className="lg:col-span-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-foreground">Recent Activities</CardTitle>
                <CardDescription>Your latest teaching activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-primary/5 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <div className="flex-1">
                        <p className="text-foreground font-medium">{activity.activity}</p>
                        <p className="text-sm text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-foreground">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="glass" className="w-full justify-start">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Create Assignment
                </Button>
                <Button variant="glass" className="w-full justify-start">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  View Gradebook
                </Button>
                <Button variant="glass" className="w-full justify-start">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Class
                </Button>
                <Button variant="glass" className="w-full justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Galleries
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-foreground">Status Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Assignments Graded</span>
                    <span className="text-sm font-medium text-foreground">85%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Student Engagement</span>
                    <span className="text-sm font-medium text-foreground">92%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '92%' }}></div>
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