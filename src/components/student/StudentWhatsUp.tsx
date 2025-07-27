import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  MessageCircle, 
  Users, 
  Hash, 
  Send, 
  Plus, 
  Search,
  Phone,
  Video,
  MoreVertical,
  Pin,
  Heart,
  Share
} from 'lucide-react';

export const StudentWhatsUp = () => {
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState('');

  const chatRooms = [
    {
      id: 'general',
      name: 'General Discussion',
      type: 'group',
      members: 156,
      lastMessage: 'Hey everyone! How did the math test go?',
      lastTime: '2 min ago',
      unread: 3,
      avatar: '📚'
    },
    {
      id: 'study-group',
      name: 'Study Group - Science',
      type: 'group',
      members: 12,
      lastMessage: 'Meeting tomorrow at 3 PM in library',
      lastTime: '15 min ago',
      unread: 1,
      avatar: '🔬'
    },
    {
      id: 'class-12a',
      name: 'Class 12A',
      type: 'group',
      members: 28,
      lastMessage: 'Assignment due date extended!',
      lastTime: '1 hour ago',
      unread: 0,
      avatar: '🎓'
    }
  ];

  const privateChats = [
    {
      id: 'sarah',
      name: 'Sarah Johnson',
      status: 'online',
      lastMessage: 'Can you help me with the chemistry homework?',
      lastTime: '5 min ago',
      unread: 2,
      avatar: '👩‍🎓'
    },
    {
      id: 'mike',
      name: 'Mike Chen',
      status: 'away',
      lastMessage: 'Thanks for the notes!',
      lastTime: '30 min ago',
      unread: 0,
      avatar: '👨‍🎓'
    },
    {
      id: 'teacher-adams',
      name: 'Mr. Adams (Teacher)',
      status: 'online',
      lastMessage: 'Good work on your essay',
      lastTime: '2 hours ago',
      unread: 0,
      avatar: '👨‍🏫'
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'Sarah Johnson',
      content: 'Hey Alex! How did you find the chemistry test today?',
      time: '10:30 AM',
      isOwn: false,
      avatar: '👩‍🎓'
    },
    {
      id: 2,
      sender: 'You',
      content: 'It was challenging but I think I did okay. The organic chemistry section was tough!',
      time: '10:32 AM',
      isOwn: true,
      avatar: '👨‍🎓'
    },
    {
      id: 3,
      sender: 'Sarah Johnson',
      content: 'Same here! Want to study together for the next one?',
      time: '10:33 AM',
      isOwn: false,
      avatar: '👩‍🎓'
    },
    {
      id: 4,
      sender: 'You',
      content: 'Absolutely! How about tomorrow after classes?',
      time: '10:35 AM',
      isOwn: true,
      avatar: '👨‍🎓'
    }
  ];

  const announcements = [
    {
      id: 1,
      title: 'Study Group Formation',
      content: 'New study groups forming for midterm preparation. Join the channels below!',
      time: '1 hour ago',
      type: 'study',
      reactions: 12
    },
    {
      id: 2,
      title: 'Weekend Social Event',
      content: 'Movie night this Saturday! Poll for movie selection in #social-events',
      time: '3 hours ago',
      type: 'social',
      reactions: 8
    }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Handle sending message
      setNewMessage('');
    }
  };

  if (activeChat) {
    const chat = [...chatRooms, ...privateChats].find(c => c.id === activeChat);
    if (!chat) return null;

    return (
      <div className="h-[600px] flex flex-col">
        {/* Chat Header */}
        <div className="glass-card p-4 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" onClick={() => setActiveChat(null)}>
                ← Back
              </Button>
              <div className="text-2xl">{chat.avatar}</div>
              <div>
                <h3 className="font-bold text-foreground">{chat.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {'members' in chat ? `${chat.members} members` : chat.status}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Phone size={16} />
              </Button>
              <Button variant="ghost" size="icon">
                <Video size={16} />
              </Button>
              <Button variant="ghost" size="icon">
                <MoreVertical size={16} />
              </Button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="glass-card flex-1 p-4 mb-4 overflow-y-auto">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-xs lg:max-w-md ${message.isOwn ? 'order-2' : 'order-1'}`}>
                  <div
                    className={`p-3 rounded-2xl ${
                      message.isOwn
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}
                  >
                    {!message.isOwn && (
                      <p className="text-xs font-medium mb-1">{message.sender}</p>
                    )}
                    <p className="text-sm">{message.content}</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 px-3">
                    {message.time}
                  </p>
                </div>
                <div className={`text-xl ${message.isOwn ? 'order-1 mr-2' : 'order-2 ml-2'}`}>
                  {message.avatar}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <div className="glass-card p-4">
          <div className="flex items-center space-x-2">
            <Input
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1"
            />
            <Button onClick={handleSendMessage} size="icon">
              <Send size={16} />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-2">What's Up</h2>
        <p className="text-muted-foreground">Connect with classmates and join study groups</p>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="glass-card p-6 text-center">
          <div className="text-2xl font-bold text-accent mb-2">{chatRooms.length}</div>
          <p className="text-muted-foreground">Group Chats</p>
        </div>
        <div className="glass-card p-6 text-center">
          <div className="text-2xl font-bold text-primary mb-2">{privateChats.length}</div>
          <p className="text-muted-foreground">Private Chats</p>
        </div>
        <div className="glass-card p-6 text-center">
          <div className="text-2xl font-bold text-accent mb-2">5</div>
          <p className="text-muted-foreground">Unread Messages</p>
        </div>
        <div className="glass-card p-6 text-center">
          <div className="text-2xl font-bold text-primary mb-2">Online</div>
          <p className="text-muted-foreground">Status</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Chat List */}
        <div className="lg:col-span-2 space-y-6">
          {/* Search */}
          <div className="glass-card p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
              <Input placeholder="Search chats..." className="pl-10" />
            </div>
          </div>

          {/* Group Chats */}
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-foreground flex items-center">
                <Hash className="mr-3 text-accent" size={20} />
                Group Chats
              </h3>
              <Button variant="outline" size="sm">
                <Plus className="mr-2" size={14} />
                Join Group
              </Button>
            </div>
            
            <div className="space-y-3">
              {chatRooms.map((room) => (
                <div
                  key={room.id}
                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-primary/5 transition-colors cursor-pointer"
                  onClick={() => setActiveChat(room.id)}
                >
                  <div className="text-2xl">{room.avatar}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-foreground">{room.name}</h4>
                      <span className="text-xs text-muted-foreground">{room.lastTime}</span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{room.lastMessage}</p>
                    <p className="text-xs text-muted-foreground">{room.members} members</p>
                  </div>
                  {room.unread > 0 && (
                    <Badge variant="destructive" className="text-xs">
                      {room.unread}
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Private Chats */}
          <div className="glass-card p-6">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
              <MessageCircle className="mr-3 text-accent" size={20} />
              Private Messages
            </h3>
            
            <div className="space-y-3">
              {privateChats.map((chat) => (
                <div
                  key={chat.id}
                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-primary/5 transition-colors cursor-pointer"
                  onClick={() => setActiveChat(chat.id)}
                >
                  <div className="relative">
                    <div className="text-2xl">{chat.avatar}</div>
                    <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-background ${
                      chat.status === 'online' ? 'bg-green-400' : 'bg-muted-foreground'
                    }`}></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-foreground">{chat.name}</h4>
                      <span className="text-xs text-muted-foreground">{chat.lastTime}</span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
                  </div>
                  {chat.unread > 0 && (
                    <Badge variant="destructive" className="text-xs">
                      {chat.unread}
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Social Announcements */}
          <div className="glass-card p-6">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
              <Pin className="mr-3 text-accent" size={20} />
              Announcements
            </h3>
            
            <div className="space-y-4">
              {announcements.map((announcement) => (
                <div key={announcement.id} className="p-3 rounded-xl bg-muted/20">
                  <h4 className="font-medium text-foreground mb-1">{announcement.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{announcement.content}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{announcement.time}</span>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Heart size={12} />
                        <span className="ml-1 text-xs">{announcement.reactions}</span>
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share size={12} />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="glass-card p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Plus className="mr-3" size={16} />
                Start New Chat
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Users className="mr-3" size={16} />
                Create Study Group
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Hash className="mr-3" size={16} />
                Browse Channels
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};