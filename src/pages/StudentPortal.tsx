import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { User, Lock, Eye, EyeOff, Fingerprint, Bell, BookOpen, TrendingUp, Calendar, Award } from 'lucide-react';

const StudentPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    setIsLoggedIn(true);
  };

  const dashboardData = {
    grades: [
      { subject: 'Mathematics', grade: 'A+', progress: 95 },
      { subject: 'Science', grade: 'A', progress: 92 },
      { subject: 'English', grade: 'A-', progress: 88 },
      { subject: 'History', grade: 'A', progress: 90 },
    ],
    announcements: [
      { title: 'Science Fair Registration', date: '2024-01-15', type: 'event' },
      { title: 'Parent-Teacher Conference', date: '2024-01-20', type: 'meeting' },
      { title: 'Winter Break Schedule', date: '2024-01-10', type: 'info' },
    ],
    attendance: { present: 95, total: 100 },
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center px-6">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="bubble"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${20 + Math.random() * 50}px`,
                height: `${20 + Math.random() * 50}px`,
                animationDelay: `${Math.random() * 20}s`,
              }}
            />
          ))}
        </div>

        <div className="glass-card p-8 md:p-12 max-w-md w-full relative z-10 animate-fade-in">
          <div className="text-center mb-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-accent p-1 mx-auto mb-4">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <User className="text-primary" size={32} />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Student Portal
            </h1>
            <p className="text-muted-foreground">Access your personalized dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  type="text"
                  placeholder="Student ID or Username"
                  className="ios-input pl-12"
                  value={credentials.username}
                  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                  required
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  className="ios-input pl-12 pr-12"
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-accent transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <Button type="submit" variant="primary" className="w-full" size="lg">
              Sign In
            </Button>

            <div className="text-center">
              <Button variant="neon" className="group">
                <Fingerprint className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                Use Biometric Login
              </Button>
            </div>

            <div className="text-center text-sm text-muted-foreground">
              Need help? <a href="#" className="text-accent hover:underline">Contact IT Support</a>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 px-6">
      <div className="max-w-7xl mx-auto py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="glass-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Welcome back, Alex!</h1>
                <p className="text-muted-foreground">Ready to continue your learning journey?</p>
              </div>
              <Button variant="glass" size="icon" className="relative">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></span>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Grades Overview */}
            <div className="glass-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground flex items-center">
                  <TrendingUp className="mr-3 text-accent" size={24} />
                  Current Grades
                </h2>
                <Button variant="neon" size="sm">View Details</Button>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {dashboardData.grades.map((grade, index) => (
                  <div key={index} className="glass-card p-4 hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-foreground">{grade.subject}</h3>
                      <span className="text-lg font-bold text-accent">{grade.grade}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 mb-2">
                      <div
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500"
                        style={{ width: `${grade.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-muted-foreground">{grade.progress}% Complete</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="glass-card p-6">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <BookOpen className="mr-3 text-accent" size={24} />
                Recent Activity
              </h2>

              <div className="space-y-4">
                {[
                  { action: 'Completed Math Assignment #12', time: '2 hours ago', type: 'assignment' },
                  { action: 'Attended Virtual Science Lab', time: '1 day ago', type: 'class' },
                  { action: 'Submitted English Essay', time: '2 days ago', type: 'assignment' },
                  { action: 'Participated in Group Discussion', time: '3 days ago', type: 'participation' },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 rounded-xl hover:bg-primary/5 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <div className="flex-1">
                      <p className="text-foreground font-medium">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Attendance */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                <Calendar className="mr-3 text-accent" size={20} />
                Attendance
              </h3>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">
                  {Math.round((dashboardData.attendance.present / dashboardData.attendance.total) * 100)}%
                </div>
                <p className="text-muted-foreground">
                  {dashboardData.attendance.present} of {dashboardData.attendance.total} days
                </p>
                <div className="w-full bg-muted rounded-full h-3 mt-4">
                  <div
                    className="bg-gradient-to-r from-primary to-accent h-3 rounded-full"
                    style={{ width: `${(dashboardData.attendance.present / dashboardData.attendance.total) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Announcements */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                <Bell className="mr-3 text-accent" size={20} />
                Announcements
              </h3>
              <div className="space-y-3">
                {dashboardData.announcements.map((announcement, index) => (
                  <div key={index} className="p-3 rounded-xl hover:bg-primary/5 transition-colors cursor-pointer">
                    <h4 className="font-medium text-foreground text-sm">{announcement.title}</h4>
                    <p className="text-xs text-muted-foreground">{announcement.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="glass" className="w-full justify-start">
                  <BookOpen className="mr-3" size={16} />
                  View Assignments
                </Button>
                <Button variant="glass" className="w-full justify-start">
                  <Calendar className="mr-3" size={16} />
                  Check Schedule
                </Button>
                <Button variant="glass" className="w-full justify-start">
                  <Award className="mr-3" size={16} />
                  View Certificates
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPortal;