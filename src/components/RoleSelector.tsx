import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { User, Shield, GraduationCap, Users, LucideIcon } from 'lucide-react';
import schoolLogo from '@/assets/school-logo.png';

interface Role {
  id: 'teacher' | 'administrator' | 'student' | 'guest';
  name: string;
  icon: LucideIcon;
  description: string;
  requiresAuth: boolean;
}

const roles: Role[] = [
  { 
    id: 'teacher', 
    name: 'Teacher', 
    icon: User, 
    description: 'Access teaching tools and student management',
    requiresAuth: true
  },
  { 
    id: 'administrator', 
    name: 'Administrator', 
    icon: Shield, 
    description: 'Manage school operations and oversight',
    requiresAuth: true
  },
  { 
    id: 'student', 
    name: 'Student', 
    icon: GraduationCap, 
    description: 'Access learning materials and track progress',
    requiresAuth: true
  },
  { 
    id: 'guest', 
    name: 'Guest', 
    icon: Users, 
    description: 'Explore Unifarm and learn about our programs',
    requiresAuth: false
  },
];

interface RoleSelectorProps {
  onRoleSelect: (role: string, requiresAuth: boolean) => void;
}

export const RoleSelector = ({ onRoleSelect }: RoleSelectorProps) => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleSelect = (roleId: string, requiresAuth: boolean) => {
    setSelectedRole(roleId);
    setTimeout(() => {
      onRoleSelect(roleId, requiresAuth);
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="bubble-bg">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="bubble"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${30 + Math.random() * 80}px`,
              height: `${30 + Math.random() * 80}px`,
              animationDelay: `${Math.random() * 25}s`,
              animationDuration: `${18 + Math.random() * 12}s`,
            }}
          />
        ))}
      </div>

      <div className="glass-card p-8 max-w-2xl w-full mx-4 animate-fade-in">
        {/* School Logo and Header */}
        <div className="text-center mb-8">
          <div className="floating-animation">
            <img 
              src={schoolLogo} 
              alt="Unifarm Logo" 
              className="w-24 h-24 mx-auto mb-6 drop-shadow-2xl"
            />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-3">
            Welcome to Unifarm
          </h1>
          <p className="text-lg text-muted-foreground">Please select your role to continue</p>
        </div>

        {/* Role Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {roles.map((role, index) => (
            <Button
              key={role.id}
              variant="glass"
              className={`h-auto p-6 flex flex-col items-center text-center transition-all duration-500 group ${
                selectedRole === role.id ? 'scale-95 opacity-50' : 'hover:scale-105'
              }`}
              onClick={() => handleSelect(role.id, role.requiresAuth)}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 mb-4">
                <role.icon size={32} className="text-accent group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{role.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{role.description}</p>
              {role.requiresAuth && (
                <div className="mt-3 px-3 py-1 bg-accent/20 rounded-full">
                  <span className="text-xs text-accent font-medium">Login Required</span>
                </div>
              )}
            </Button>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Choose your role to access personalized features and content
          </p>
        </div>
      </div>
    </div>
  );
};