import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Mail, 
  Phone, 
  Lock, 
  Bell, 
  Shield, 
  Palette, 
  HelpCircle,
  Eye,
  EyeOff,
  Camera,
  Save,
  RefreshCw
} from 'lucide-react';

export const StudentSettings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'Alex',
    lastName: 'Johnson',
    email: 'alex.johnson@school.edu',
    phone: '+1 (555) 123-4567',
    studentId: 'STU2024001',
    grade: '12th Grade',
    avatar: '👨‍🎓'
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: true,
    gradeAlerts: true,
    assignmentReminders: true,
    announcementUpdates: true,
    socialMessages: false
  });

  const [privacy, setPrivacy] = useState({
    profileVisibility: 'friends',
    showOnlineStatus: true,
    allowDirectMessages: true,
    showAcademicInfo: false
  });

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy', icon: Lock },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'help', label: 'Help & Support', icon: HelpCircle },
  ];

  const renderProfileTab = () => (
    <div className="space-y-6">
      <div className="glass-card p-6">
        <h3 className="text-xl font-bold text-foreground mb-4">Personal Information</h3>
        
        <div className="flex items-center space-x-6 mb-6">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-3xl">
              {profileData.avatar}
            </div>
            <Button
              size="icon"
              variant="secondary"
              className="absolute -bottom-1 -right-1 w-8 h-8"
            >
              <Camera size={14} />
            </Button>
          </div>
          <div>
            <h4 className="text-lg font-bold text-foreground">{profileData.firstName} {profileData.lastName}</h4>
            <p className="text-muted-foreground">{profileData.studentId}</p>
            <Badge variant="secondary">{profileData.grade}</Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              value={profileData.firstName}
              onChange={(e) => setProfileData({...profileData, firstName: e.target.value})}
            />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              value={profileData.lastName}
              onChange={(e) => setProfileData({...profileData, lastName: e.target.value})}
            />
          </div>
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={profileData.email}
              onChange={(e) => setProfileData({...profileData, email: e.target.value})}
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              value={profileData.phone}
              onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
            />
          </div>
        </div>

        <Button className="mt-4">
          <Save className="mr-2" size={16} />
          Save Changes
        </Button>
      </div>
    </div>
  );

  const renderSecurityTab = () => (
    <div className="space-y-6">
      <div className="glass-card p-6">
        <h3 className="text-xl font-bold text-foreground mb-4">Password & Security</h3>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="currentPassword">Current Password</Label>
            <div className="relative">
              <Input
                id="currentPassword"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter current password"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </Button>
            </div>
          </div>
          
          <div>
            <Label htmlFor="newPassword">New Password</Label>
            <Input
              id="newPassword"
              type="password"
              placeholder="Enter new password"
            />
          </div>
          
          <div>
            <Label htmlFor="confirmPassword">Confirm New Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm new password"
            />
          </div>
        </div>

        <Button className="mt-4">
          <Lock className="mr-2" size={16} />
          Update Password
        </Button>
      </div>

      <div className="glass-card p-6">
        <h3 className="text-xl font-bold text-foreground mb-4">Two-Factor Authentication</h3>
        <p className="text-muted-foreground mb-4">Add an extra layer of security to your account</p>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-foreground">Authenticator App</p>
            <p className="text-sm text-muted-foreground">Use Google Authenticator or similar apps</p>
          </div>
          <Button variant="outline">Setup</Button>
        </div>
      </div>
    </div>
  );

  const renderNotificationsTab = () => (
    <div className="glass-card p-6">
      <h3 className="text-xl font-bold text-foreground mb-4">Notification Preferences</h3>
      
      <div className="space-y-6">
        {Object.entries(notifications).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </p>
              <p className="text-sm text-muted-foreground">
                {getNotificationDescription(key)}
              </p>
            </div>
            <Switch
              checked={value}
              onCheckedChange={(checked) => setNotifications({...notifications, [key]: checked})}
            />
          </div>
        ))}
      </div>
    </div>
  );

  const renderPrivacyTab = () => (
    <div className="glass-card p-6">
      <h3 className="text-xl font-bold text-foreground mb-4">Privacy Settings</h3>
      
      <div className="space-y-6">
        <div>
          <Label htmlFor="profileVisibility">Profile Visibility</Label>
          <select
            id="profileVisibility"
            className="w-full mt-1 p-2 rounded-md border border-border bg-background text-foreground"
            value={privacy.profileVisibility}
            onChange={(e) => setPrivacy({...privacy, profileVisibility: e.target.value})}
          >
            <option value="public">Public</option>
            <option value="friends">Friends Only</option>
            <option value="private">Private</option>
          </select>
        </div>

        {Object.entries(privacy).filter(([key]) => key !== 'profileVisibility').map(([key, value]) => (
          <div key={key} className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </p>
              <p className="text-sm text-muted-foreground">
                {getPrivacyDescription(key)}
              </p>
            </div>
            <Switch
              checked={typeof value === 'boolean' ? value : false}
              onCheckedChange={(checked) => setPrivacy({...privacy, [key]: checked})}
            />
          </div>
        ))}
      </div>
    </div>
  );

  const renderAppearanceTab = () => (
    <div className="glass-card p-6">
      <h3 className="text-xl font-bold text-foreground mb-4">Appearance & Theme</h3>
      
      <div className="space-y-6">
        <div>
          <Label>Theme</Label>
          <div className="grid grid-cols-3 gap-3 mt-2">
            <div className="p-3 rounded-lg border border-border text-center cursor-pointer hover:bg-primary/5">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-gray-900 to-gray-600 mx-auto mb-2"></div>
              <p className="text-sm">Dark</p>
            </div>
            <div className="p-3 rounded-lg border border-border text-center cursor-pointer hover:bg-primary/5">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-gray-100 to-gray-300 mx-auto mb-2"></div>
              <p className="text-sm">Light</p>
            </div>
            <div className="p-3 rounded-lg border border-border text-center cursor-pointer hover:bg-primary/5">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-primary to-accent mx-auto mb-2"></div>
              <p className="text-sm">Auto</p>
            </div>
          </div>
        </div>

        <div>
          <Label>Accent Color</Label>
          <div className="grid grid-cols-6 gap-2 mt-2">
            {['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-red-500', 'bg-yellow-500', 'bg-pink-500'].map((color) => (
              <div key={color} className={`w-8 h-8 rounded-full ${color} cursor-pointer hover:scale-110 transition-transform`}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderHelpTab = () => (
    <div className="space-y-6">
      <div className="glass-card p-6">
        <h3 className="text-xl font-bold text-foreground mb-4">Help & Support</h3>
        
        <div className="space-y-4">
          <Button variant="outline" className="w-full justify-start">
            <HelpCircle className="mr-3" size={16} />
            Frequently Asked Questions
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <Mail className="mr-3" size={16} />
            Contact IT Support
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <RefreshCw className="mr-3" size={16} />
            Reset Account Settings
          </Button>
        </div>
      </div>

      <div className="glass-card p-6">
        <h3 className="text-xl font-bold text-foreground mb-4">Contact Information</h3>
        
        <div className="space-y-3 text-sm">
          <div>
            <p className="font-medium text-foreground">IT Help Desk</p>
            <p className="text-muted-foreground">support@school.edu</p>
            <p className="text-muted-foreground">+1 (555) 123-HELP</p>
          </div>
          <div>
            <p className="font-medium text-foreground">Technical Support Hours</p>
            <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM</p>
            <p className="text-muted-foreground">Saturday: 9:00 AM - 2:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );

  const getNotificationDescription = (key: string) => {
    const descriptions = {
      emailNotifications: 'Receive notifications via email',
      pushNotifications: 'Get push notifications on your device',
      gradeAlerts: 'Get notified when new grades are posted',
      assignmentReminders: 'Reminders for upcoming assignments',
      announcementUpdates: 'School and class announcements',
      socialMessages: 'Messages from classmates and study groups'
    };
    return descriptions[key as keyof typeof descriptions] || '';
  };

  const getPrivacyDescription = (key: string) => {
    const descriptions = {
      showOnlineStatus: 'Let others see when you\'re online',
      allowDirectMessages: 'Allow classmates to send you messages',
      showAcademicInfo: 'Display your grades and academic achievements'
    };
    return descriptions[key as keyof typeof descriptions] || '';
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-2">Settings</h2>
        <p className="text-muted-foreground">Manage your account preferences and privacy</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <div className="glass-card p-6">
          <nav className="space-y-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab(tab.id)}
                >
                  <Icon className="mr-3" size={16} />
                  {tab.label}
                </Button>
              );
            })}
          </nav>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3">
          {activeTab === 'profile' && renderProfileTab()}
          {activeTab === 'security' && renderSecurityTab()}
          {activeTab === 'notifications' && renderNotificationsTab()}
          {activeTab === 'privacy' && renderPrivacyTab()}
          {activeTab === 'appearance' && renderAppearanceTab()}
          {activeTab === 'help' && renderHelpTab()}
        </div>
      </div>
    </div>
  );
};