import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { User, Lock, Eye, EyeOff, Fingerprint } from 'lucide-react';
import { StudentNav } from '@/components/student/StudentNav';
import { StudentHome } from '@/components/student/StudentHome';
import { StudentSubjects } from '@/components/student/StudentSubjects';
import { StudentStatus } from '@/components/student/StudentStatus';
import { StudentWhatsUp } from '@/components/student/StudentWhatsUp';
import { StudentSettings } from '@/components/student/StudentSettings';

export default function StudentDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [activeSection, setActiveSection] = useState('home');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveSection('home');
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return <StudentHome />;
      case 'subjects':
        return <StudentSubjects />;
      case 'status':
        return <StudentStatus />;
      case 'whats-up':
        return <StudentWhatsUp />;
      case 'settings':
        return <StudentSettings />;
      default:
        return <StudentHome />;
    }
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
        <StudentNav
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          onLogout={handleLogout}
          studentName="Alex"
        />
        {renderActiveSection()}
      </div>
    </div>
  );
}