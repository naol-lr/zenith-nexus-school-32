import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: MapPin, title: 'Address', info: '123 Education Boulevard, Smart City, SC 12345' },
    { icon: Phone, title: 'Phone', info: '+1 (555) 123-4567' },
    { icon: Mail, title: 'Email', info: 'info@smartschool.edu' },
    { icon: Clock, title: 'Office Hours', info: 'Mon-Fri: 8:00 AM - 5:00 PM' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="bubble"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${30 + Math.random() * 60}px`,
                height: `${30 + Math.random() * 60}px`,
                animationDelay: `${Math.random() * 15}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get in touch with our team. We're here to help you start your educational journey.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="glass-card p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Send us a Message
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    className="ios-input"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    className="ios-input"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 123-4567"
                    className="ios-input"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="What is this regarding?"
                    className="ios-input"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  name="message"
                  placeholder="Tell us more about your inquiry..."
                  className="ios-input min-h-[120px] resize-none"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full group">
                <Send className="mr-2 group-hover:translate-x-1 transition-transform" size={20} />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information & Map */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent p-1 flex-shrink-0">
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                        <item.icon className="text-primary" size={20} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-4 text-foreground">Visit Our Campus</h3>
              <div className="relative h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="mx-auto mb-2 text-accent" size={32} />
                    <p className="text-foreground font-medium">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">Click to view directions</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-50"></div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-4 text-foreground">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="glass" className="w-full justify-start group">
                  <MessageCircle className="mr-3 group-hover:scale-110 transition-transform" size={16} />
                  Live Chat Support
                </Button>
                <Button variant="glass" className="w-full justify-start group">
                  <Phone className="mr-3 group-hover:scale-110 transition-transform" size={16} />
                  Schedule a Call
                </Button>
                <Button variant="glass" className="w-full justify-start group">
                  <MapPin className="mr-3 group-hover:scale-110 transition-transform" size={16} />
                  Campus Tour
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}