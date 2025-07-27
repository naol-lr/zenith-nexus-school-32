import { Button } from '@/components/ui/button';
import { Bell, Calendar, AlertCircle, Info, Users } from 'lucide-react';

export const StudentHome = () => {
  const announcements = [
    { 
      title: 'Science Fair Registration Open', 
      date: '2024-01-15', 
      type: 'event',
      content: 'Registration for the annual science fair is now open. Submit your project proposals by January 30th.',
      priority: 'high'
    },
    { 
      title: 'Parent-Teacher Conference Schedule', 
      date: '2024-01-20', 
      type: 'meeting',
      content: 'Individual conferences will be held next week. Check your calendar for assigned time slots.',
      priority: 'medium'
    },
    { 
      title: 'Winter Break Schedule Update', 
      date: '2024-01-10', 
      type: 'info',
      content: 'Updated schedule for winter break activities and library hours.',
      priority: 'low'
    },
    {
      title: 'New Study Group Formation',
      date: '2024-01-12',
      type: 'social',
      content: 'Join study groups for upcoming midterm exams. Mathematics and Science groups forming.',
      priority: 'medium'
    }
  ];

  const upcomingEvents = [
    { title: 'Mathematics Quiz', date: '2024-01-18', time: '10:00 AM' },
    { title: 'Science Lab Session', date: '2024-01-19', time: '2:00 PM' },
    { title: 'Literature Essay Due', date: '2024-01-22', time: '11:59 PM' },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'event': return <Calendar className="text-accent" size={16} />;
      case 'meeting': return <Users className="text-primary" size={16} />;
      case 'info': return <Info className="text-muted-foreground" size={16} />;
      case 'social': return <Users className="text-accent" size={16} />;
      default: return <Bell className="text-muted-foreground" size={16} />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-4 border-l-destructive';
      case 'medium': return 'border-l-4 border-l-accent';
      case 'low': return 'border-l-4 border-l-muted-foreground';
      default: return '';
    }
  };

  return (
    <div className="space-y-8">
      {/* Quick Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="glass-card p-6 text-center">
          <div className="text-2xl font-bold text-accent mb-2">4</div>
          <p className="text-muted-foreground">New Announcements</p>
        </div>
        <div className="glass-card p-6 text-center">
          <div className="text-2xl font-bold text-primary mb-2">3</div>
          <p className="text-muted-foreground">Upcoming Events</p>
        </div>
        <div className="glass-card p-6 text-center">
          <div className="text-2xl font-bold text-accent mb-2">95%</div>
          <p className="text-muted-foreground">Attendance Rate</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Announcements */}
        <div className="lg:col-span-2">
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground flex items-center">
                <Bell className="mr-3 text-accent" size={24} />
                Latest Announcements
              </h2>
              <Button variant="outline" size="sm">View All</Button>
            </div>

            <div className="space-y-4">
              {announcements.map((announcement, index) => (
                <div key={index} className={`glass-card p-4 hover:scale-105 transition-transform duration-300 ${getPriorityColor(announcement.priority)}`}>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      {getTypeIcon(announcement.type)}
                      <h3 className="font-semibold text-foreground">{announcement.title}</h3>
                    </div>
                    <span className="text-sm text-muted-foreground">{announcement.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{announcement.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div>
          <div className="glass-card p-6">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
              <Calendar className="mr-3 text-accent" size={20} />
              Upcoming Events
            </h3>
            <div className="space-y-3">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="p-3 rounded-xl hover:bg-primary/5 transition-colors">
                  <h4 className="font-medium text-foreground text-sm">{event.title}</h4>
                  <p className="text-xs text-muted-foreground">{event.date} • {event.time}</p>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4" size="sm">
              View Full Calendar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};