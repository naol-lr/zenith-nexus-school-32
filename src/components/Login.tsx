import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import schoolLogo from '@/assets/school-logo.png';

interface LoginProps {
  role: string;
  onLogin: () => void;
  onBack: () => void;
}

export const Login = ({ role, onLogin, onBack }: LoginProps) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!credentials.username || !credentials.password) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 1500);
  };

  const getRoleIcon = () => {
    switch (role) {
      case 'teacher': return '👨‍🏫';
      case 'administrator': return '🛡️';
      case 'student': return '🎓';
      default: return '👤';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="bubble-bg">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="bubble"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${25 + Math.random() * 60}px`,
              height: `${25 + Math.random() * 60}px`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${16 + Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      <div className="glass-card p-8 max-w-md w-full mx-4 animate-fade-in">
        {/* Header */}
        <div className="text-center mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="absolute top-4 left-4"
          >
            <ArrowLeft size={20} />
          </Button>
          
          <div className="floating-animation">
            <img 
              src={schoolLogo} 
              alt="Unifarm Logo" 
              className="w-20 h-20 mx-auto mb-4 drop-shadow-2xl"
            />
          </div>
          
          <div className="text-4xl mb-3">{getRoleIcon()}</div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
            {role.charAt(0).toUpperCase() + role.slice(1)} Login
          </h1>
          <p className="text-muted-foreground">Sign in to access your Unifarm dashboard</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-foreground">Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={credentials.username}
              onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
              className="ios-input"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-foreground">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={credentials.password}
                onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                className="ios-input pr-12"
                required
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </Button>
            </div>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            disabled={isLoading || !credentials.username || !credentials.password}
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary-foreground/20 border-t-primary-foreground"></div>
                <span>Signing in...</span>
              </div>
            ) : (
              'Sign In'
            )}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Forgot your password? Contact system administrator
          </p>
        </div>
      </div>
    </div>
  );
};