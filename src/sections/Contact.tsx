
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SocialLinks from "@/components/SocialLinks";
import { useToast } from "@/hooks/use-toast";
import profile from "@/data/profile";
import { useState } from "react";

export default function Contact() {
  const { email, phone, location, social } = profile.basics;
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  
  return (
    <AnimatedSection id="contact">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {prefersReducedMotion ? (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Mail className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href={`mailto:${email}`} className="hover:text-primary">
                        {email}
                      </a>
                    </div>
                  </div>
                  
                  {phone && (
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <Phone className="text-primary h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <a href={`tel:${phone}`} className="hover:text-primary">
                          {phone}
                        </a>
                      </div>
                    </div>
                  )}
                  
                  {location && (
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <MapPin className="text-primary h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p>{location}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Follow Me</h3>
                <SocialLinks links={social} iconSize={24} />
              </div>
            </div>
          ) : (
            <motion.div 
              className="space-y-6"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <div>
                <motion.h3 
                  className="text-xl font-bold mb-4"
                  variants={item}
                  transition={{ duration: 0.5 }}
                >
                  Contact Information
                </motion.h3>
                
                <div className="space-y-4">
                  <motion.div 
                    className="flex items-center"
                    variants={item}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Mail className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href={`mailto:${email}`} className="hover:text-primary">
                        {email}
                      </a>
                    </div>
                  </motion.div>
                  
                  {phone && (
                    <motion.div 
                      className="flex items-center"
                      variants={item}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <Phone className="text-primary h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <a href={`tel:${phone}`} className="hover:text-primary">
                          {phone}
                        </a>
                      </div>
                    </motion.div>
                  )}
                  
                  {location && (
                    <motion.div 
                      className="flex items-center"
                      variants={item}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <MapPin className="text-primary h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p>{location}</p>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
              
              <motion.div
                variants={item}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-4">Follow Me</h3>
                <SocialLinks links={social} iconSize={24} />
              </motion.div>
            </motion.div>
          )}
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">Send a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            
            <Button type="submit" className="w-full">
              <Send className="mr-2 h-4 w-4" /> Send Message
            </Button>
          </form>
        </div>
      </div>
    </AnimatedSection>
  );
}
