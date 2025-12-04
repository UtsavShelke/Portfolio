"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MessageSquare, Phone, MapPin, Send, Heart } from "lucide-react"

// Define your email address for the mailto links
const MY_EMAIL = "ushelke390@gmail.com";
const MAILTO_LINK = `mailto:${MY_EMAIL}?subject=Website%20Inquiry%20from%20Portfolio`;

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50 bg-background/90 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 gradient-text animate-fade-in-up">Get In Touch</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Contact Info and Socials */}
          <div className="space-y-8 animate-fade-in-up">
            
            {/* Contact Details Card */}
            <Card className="bg-card backdrop-blur-md border-border/70 shadow-lg p-6"> 
              <h3 className="text-2xl font-semibold text-white border-b border-primary/30 pb-3 mb-6">Contact Details</h3>
              
              <div className="space-y-5 text-muted-foreground text-left">
                <div className="flex items-center gap-4 group hover:text-primary transition-colors duration-300">
                  <Mail className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                  <a href={MAILTO_LINK} className="break-all">{MY_EMAIL}</a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <p>+91 9399219122</p>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <p>Indore, Madhya Pradesh, India</p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="lg:col-span-2 bg-card backdrop-blur-md border-border/70 shadow-2xl animate-fade-in-up animate-delay-200">
            <CardHeader>
              <CardTitle className="text-3xl gradient-text">Send a Message</CardTitle>
              <CardDescription className="text-muted-foreground">
                I typically respond within 24 hours. Let's discuss your project or opportunity.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form 
                 action="https://formspree.io/f/xyzozryl"
                 method="POST"
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Your Full Name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" placeholder="Project Inquiry, Job Offer, etc." required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Type your message here..." rows={5} required />
                </div>
                <Button type="submit" className="btn-gradient-primary w-full sm:w-auto hover:scale-[1.02] transition-transform duration-300">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

//FOOTER COMPONENT

const currentYear = new Date().getFullYear();
const socialLinks = [
  { icon: Github, href: "https://github.com/utsavshelke", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/utsav-shelke-061b7a197/", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-background/95 border-t border-primary/10 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          
          <p className="text-sm text-muted-foreground mb-4 sm:mb-0 flex items-center tracking-wide">
            &copy; {currentYear} Utsav Shelke. Developed with <Heart className="h-3 w-3 mx-1 text-red-500 fill-red-500 transition-colors" />.
          </p>
          <div className="flex space-x-6"> 
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5 stroke-[1.5]" /> 
              </a>
            ))}
          </div>
        </div>
        
      </div>
    </footer>
  );
}