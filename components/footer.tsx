import { Github, Linkedin, Mail, Heart } from "lucide-react";

const currentYear = new Date().getFullYear();

// Define your social media links
const socialLinks = [
  { icon: Github, href: "https://github.com/utsavshelke", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/utsav-shelke-061b7a197/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:ushelke390@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="bg-background/95 border-t border-primary/10 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Content Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          
          {/* Copyright and Build Info */}
          <p className="text-sm text-muted-foreground mb-4 sm:mb-0 flex items-center">
            &copy; {currentYear} Utsav Shelke. Developed with <Heart className="h-3 w-3 mx-1 text-red-500 fill-red-500 transition-colors" />.
          </p>
          
          {/* Social Media Links */}
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
        
      </div>
    </footer>
  );
}