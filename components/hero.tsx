"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 gradient-bg-1 relative overflow-hidden">
      {/* Left side decorative shapes */}
      <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
        <div className="absolute left-8 top-20 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute left-16 top-1/3 w-24 h-24 bg-gradient-to-br from-secondary/15 to-accent/10 rounded-full blur-lg animate-float animate-delay-300"></div>
        <div className="absolute left-4 bottom-1/4 w-40 h-40 bg-gradient-to-br from-accent/10 to-primary/15 rounded-full blur-2xl animate-float animate-delay-500"></div>
        <div className="absolute left-20 bottom-32 w-16 h-16 bg-gradient-to-br from-primary/25 to-secondary/15 rounded-full blur-md animate-float animate-delay-700"></div>
      </div>

      {/* Right side decorative shapes */}
      <div className="absolute right-0 top-0 w-full h-full pointer-events-none">
        <div className="absolute right-8 top-32 w-28 h-28 bg-gradient-to-bl from-secondary/20 to-primary/10 rounded-full blur-xl animate-float animate-delay-200"></div>
        <div className="absolute right-12 top-2/3 w-36 h-36 bg-gradient-to-bl from-accent/15 to-secondary/10 rounded-full blur-2xl animate-float animate-delay-400"></div>
        <div className="absolute right-6 bottom-40 w-20 h-20 bg-gradient-to-bl from-primary/20 to-accent/15 rounded-full blur-lg animate-float animate-delay-600"></div>
        <div className="absolute right-16 bottom-16 w-32 h-32 bg-gradient-to-bl from-secondary/15 to-primary/10 rounded-full blur-xl animate-float animate-delay-800"></div>
      </div>

      {/* Additional geometric shapes for more visual interest */}
      <div className="absolute left-1/4 top-16 w-2 h-16 bg-gradient-to-b from-primary/30 to-transparent rotate-12 animate-pulse"></div>
      <div className="absolute right-1/4 bottom-20 w-2 h-20 bg-gradient-to-t from-secondary/30 to-transparent -rotate-12 animate-pulse animate-delay-300"></div>
      <div className="absolute left-1/3 bottom-32 w-16 h-2 bg-gradient-to-r from-accent/30 to-transparent rotate-45 animate-pulse animate-delay-500"></div>
      <div className="absolute right-1/3 top-24 w-20 h-2 bg-gradient-to-l from-primary/30 to-transparent -rotate-45 animate-pulse animate-delay-700"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-bounce-in">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 group cursor-default">
            <span className="gradient-text-primary hover:gradient-text-accent transition-all duration-500 hover:scale-105 inline-block">
              Utsav Shelke
            </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-8 animate-fade-in-up animate-delay-200 group cursor-default">
            <span className="gradient-text-secondary hover:gradient-text-primary transition-all duration-500 hover:scale-102 inline-block">
              Full Stack Developer | Java | MySQL
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animate-delay-400 hover:text-foreground transition-colors duration-300">
            A B.Tech Computer Science student with strong expertise in Full Stack Web Development. 
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            className="btn-gradient-primary professional-card animate-slide-in-left animate-delay-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300"
            onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=ushelke390@gmail.com")}
          >
            <Mail className="mr-2 h-4 w-4" />
            Get In Touch
          </Button>
          <Button
    variant="outline"
    size="lg"
    className="btn-gradient-secondary professional-card animate-slide-in-right animate-delay-600 bg-transparent border-primary/30 hover:scale-105 hover:shadow-2xl hover:shadow-secondary/25 hover:border-primary/60 transition-all duration-300"
    onClick={() => {
        const link = document.createElement("a")
        link.href = "/Resume.pdf" 
        link.download = "Utsav_Resume.pdf" 
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }}
>
    <Download className="mr-2 h-4 w-4" />
    Download Resume
</Button>
        </div>
       <div className="flex items-center justify-center gap-6">
          <Button
            variant="ghost"
            size="icon"
            className="professional-card animate-scale-in animate-delay-700 
                       hover:text-primary transition-all duration-300 
                       hover:scale-125 hover:-translate-y-1 
                       hover:bg-transparent hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]" 
            onClick={() => window.open("https://github.com/utsavshelke", "_blank")}
          >
            <Github className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="professional-card animate-scale-in animate-delay-800 
                       hover:text-primary transition-all duration-300 
                       hover:scale-125 hover:-translate-y-1 
                       hover:bg-transparent hover:shadow-[0_0_15px_rgba(var(--secondary-rgb),0.5)]"
            onClick={() => window.open("https://www.linkedin.com/in/utsav-shelke-061b7a197/", "_blank")}
          >
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="professional-card animate-scale-in animate-delay-700 
                       hover:text-primary transition-all duration-300 
                       hover:scale-125 hover:-translate-y-1 
                       hover:bg-transparent hover:shadow-[0_0_15px_rgba(var(--accent-rgb),0.5)]"
           onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=ushelke390@gmail.com")}
          >
            <Mail className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
