import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, BookOpen, BarChart3, Settings, Shield, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

export default function AdminDashboard() {
  const schoolStats = [
    { title: 'Total Students', value: '1,247', icon: Users, color: 'text-blue-500', change: '+5.2%' },
    { title: 'Active Teachers', value: '86', icon: BookOpen, color: 'text-green-500', change: '+2.1%' },
    { title: 'School Rating', value: '4.8/5', icon: TrendingUp, color: 'text-yellow-500', change: '+0.2' },
    { title: 'System Health', value: '98.2%', icon: CheckCircle, color: 'text-emerald-500', change: '+1.1%' },
  ];

  const departmentStatus = [
    { department: 'Mathematics', teachers: 12, students: 340, performance: 94 },
    { department: 'Science', teachers: 15, students: 385, performance: 91 },
    { department: 'Languages', teachers: 18, students: 420, performance: 88 },
    { department: 'Arts', teachers: 8, students: 240, performance: 96 },
  ];

  const alerts = [
    { type: 'warning', message: 'Server maintenance scheduled for tonight', time: '2 hours ago' },
    { type: 'info', message: 'New enrollment period starts next week', time: '5 hours ago' },
    { type: 'success', message: 'Monthly backup completed successfully', time: '1 day ago' },
  ];

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'warning': return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'success': return <CheckCircle className="h-4 w-4 text-green-500" />;
      default: return <Shield className="h-4 w-4 text-blue-500" />;
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
            Administrator Dashboard
          </h1>
          <p className="text-lg text-muted-foreground">
            Complete oversight of Unifarm school operations and performance metrics.
          </p>
        </div>

        {/* School Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {schoolStats.map((stat, index) => (
            <Card key={index} className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-accent font-medium">{stat.change}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Department Status */}
          <div className="lg:col-span-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-foreground">Department Performance</CardTitle>
                <CardDescription>Real-time status of all school departments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {departmentStatus.map((dept, index) => (
                    <div key={index} className="p-4 rounded-lg border border-border/50 hover:bg-primary/5 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-foreground">{dept.department}</h4>
                        <span className="text-sm font-medium text-accent">{dept.performance}%</span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                        <span>{dept.teachers} Teachers</span>
                        <span>{dept.students} Students</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-300" 
                          style={{ width: `${dept.performance}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar with Admin Tools */}
          <div className="space-y-6">
            {/* Quick Admin Actions */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-foreground">Admin Tools</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="glass" className="w-full justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Manage Users
                </Button>
                <Button variant="glass" className="w-full justify-start">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Analytics
                </Button>
                <Button variant="glass" className="w-full justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  System Settings
                </Button>
                <Button variant="glass" className="w-full justify-start">
                  <Shield className="mr-2 h-4 w-4" />
                  Security Center
                </Button>
              </CardContent>
            </Card>

            {/* System Alerts */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-foreground">System Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {alerts.map((alert, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                      {getAlertIcon(alert.type)}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-foreground">{alert.message}</p>
                        <p className="text-xs text-muted-foreground">{alert.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* System Status */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-foreground">System Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Server Uptime</span>
                    <span className="text-sm font-medium text-green-500">99.9%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Database Health</span>
                    <span className="text-sm font-medium text-green-500">Optimal</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Active Users</span>
                    <span className="text-sm font-medium text-accent">342</span>
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