import { Button } from '@/components/ui/button';
import { Home, BookOpen, BarChart3, MessageCircle, Settings, Bell, LogOut } from 'lucide-react';

interface StudentNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  onLogout: () => void;
  studentName: string;
}

export const StudentNav = ({ activeSection, onSectionChange, onLogout, studentName }: StudentNavProps) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'subjects', label: 'Subjects', icon: BookOpen },
    { id: 'status', label: 'Status', icon: BarChart3 },
    { id: 'whats-up', label: "What's Up", icon: MessageCircle },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="glass-card p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Welcome back, {studentName}!</h1>
          <p className="text-muted-foreground">Ready to continue your learning journey?</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="relative">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></span>
          </Button>
          <Button variant="ghost" size="icon" onClick={onLogout}>
            <LogOut size={20} />
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "default" : "ghost"}
              className={`flex items-center space-x-2 ${
                activeSection === item.id ? 'bg-primary text-primary-foreground' : ''
              }`}
              onClick={() => onSectionChange(item.id)}
            >
              <Icon size={16} />
              <span>{item.label}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
};