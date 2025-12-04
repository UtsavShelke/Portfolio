import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

const projects = [
  {
    title: "Music Streaming Software",
    description:
      "Developed a comprehensive web-based system for streaming and downloading music with enhanced UI/UX for better user interaction and usability. Features tools to personalize music experience.",
    image: "/music-streaming-interface.jpg",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    period: "Jan 2023 – Apr 2023",
    githubUrl: "https://github.com/UtsavShelke/Sword-Music-App.git",
  },
  {
    title: "Game Library System",
    description:
      "Built a web-based system for downloading all types of PC games with secure role-based access and CRUD operations using MySQL. Enhanced UI/UX for better interaction and usability.",
    image: "/game-library-system-interface.jpg",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    period: "Jan 2025 – Apr 2025",
    githubUrl: "https://github.com/UtsavShelke/Phoenix-App.git",
  },
  {
    title: "Automated Testing Software",
    description:
      "Developed a frontend interface for Automated Testing Software using React and TypeScript. Designed modular UI components for code input, testing results, and performance metrics with responsive design.",
    image: "/automated-testing-software-dashboard.jpg",
    technologies: ["React", "TypeScript", "Frontend Design", "Docker", "Python"],
    period: "Jul 2025 – Present",
    githubUrl: "https://github.com/UtsavShelke/ConfigWhiz.git",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 gradient-bg-2">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text-primary hover:gradient-text-accent transition-all duration-500 cursor-default hover:scale-105">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto hover:text-foreground transition-colors duration-300">
            Showcasing innovative solutions and practical applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`enhanced-card bg-card border-border overflow-hidden animate-scale-in animate-delay-${(index + 1) * 200} hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 ring-2 ring-primary/20 hover:ring-primary/40 transition-all duration-500 group flex flex-col`}
            >
              <div className="relative aspect-video bg-muted overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <CardHeader>
                <CardTitle className="text-xl gradient-text-secondary hover:gradient-text-primary transition-all duration-300 cursor-default">
                  {project.title}
                </CardTitle>
                <Badge variant="outline" className="w-fit">
                  {project.period}
                </Badge>
              </CardHeader>

              <CardContent className="flex flex-col justify-between flex-1">
                <div>
                  <p className="text-muted-foreground mb-4 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className={`netflix-card hover:bg-gradient-to-r hover:from-primary/30 hover:to-secondary/30 hover:text-primary hover:border-primary/50 hover:scale-105 transition-all duration-300 animate-fade-in-up animate-delay-${(techIndex + 1) * 100}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 mt-auto">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 w-full"
                    >
                      <Button
                        size="sm"
                        className="flex-1 btn-gradient-primary hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 w-full"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
