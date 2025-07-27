import { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageSelector } from '@/components/LanguageSelector';
import { RoleSelector } from '@/components/RoleSelector';
import { Login } from '@/components/Login';
import { Navigation } from '@/components/Navigation';
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import StudentPortal from "./pages/StudentPortal";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import TeacherDashboard from "./pages/TeacherDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import StudentDashboard from "./pages/StudentDashboard";

const queryClient = new QueryClient();

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [requiresAuth, setRequiresAuth] = useState<boolean>(false);

  // Language Selection Step
  if (!selectedLanguage) {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <div className="animate-fade-in">
            <LanguageSelector onLanguageSelect={setSelectedLanguage} />
          </div>
        </TooltipProvider>
      </QueryClientProvider>
    );
  }

  // Role Selection Step
  if (!selectedRole) {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <div className="animate-fade-in">
            <RoleSelector 
              onRoleSelect={(role, needsAuth) => {
                setSelectedRole(role);
                setRequiresAuth(needsAuth);
                if (!needsAuth) {
                  setIsAuthenticated(true);
                }
              }} 
            />
          </div>
        </TooltipProvider>
      </QueryClientProvider>
    );
  }

  // Authentication Step (if required)
  if (requiresAuth && !isAuthenticated) {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <div className="animate-fade-in">
            <Login 
              role={selectedRole}
              onLogin={() => setIsAuthenticated(true)}
              onBack={() => setSelectedRole(null)}
            />
          </div>
        </TooltipProvider>
      </QueryClientProvider>
    );
  }

  // Main Application based on role
  const renderMainContent = () => {
    switch (selectedRole) {
      case 'teacher':
        return (
          <Routes>
            <Route path="/" element={<TeacherDashboard />} />
            <Route path="/dashboard" element={<TeacherDashboard />} />
            <Route path="/portal" element={<StudentPortal />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        );
      case 'administrator':
        return (
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
            <Route path="/portal" element={<StudentPortal />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        );
      case 'student':
        return (
          <Routes>
            <Route path="/" element={<StudentDashboard />} />
            <Route path="/dashboard" element={<StudentDashboard />} />
            <Route path="/portal" element={<StudentPortal />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        );
      case 'guest':
      default:
        return (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        );
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="animate-fade-in">
          <BrowserRouter>
            <Navigation />
            {renderMainContent()}
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;