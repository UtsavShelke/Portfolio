import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Wrench, Users, Zap, Sparkles } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    color: "from-blue-500 to-purple-600",
    skills: ["Java", "HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    title: "Technologies & Frameworks",
    icon: Database,
    color: "from-green-500 to-teal-600",
    skills: ["React.js", "Tailwind CSS", "Bootstrap", "MySQL", "Git/GitHub"],
  },
  {
    title: "Development Tools",
    icon: Wrench,
    color: "from-orange-500 to-red-600",
    skills: ["VS Code", "IntelliJ IDEA", "Eclipse", "Figma", "Canva"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    color: "from-pink-500 to-rose-600",
    skills: ["Problem-Solving", "Communication", "Teamwork", "Time Management", "Leadership-Skills"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 gradient-bg-3">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Zap className="h-8 w-8 text-primary animate-float hover:text-accent hover:scale-125 transition-all duration-300 cursor-default" />
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text-primary hover:gradient-text-accent transition-all duration-500 cursor-default hover:scale-105">
              Skills & Technologies
            </h2>
            <Sparkles className="h-8 w-8 text-primary animate-float animate-delay-300 hover:text-secondary hover:scale-125 transition-all duration-300 cursor-default" />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto hover:text-foreground transition-colors duration-300">
            Technical expertise and professional skills for building exceptional solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`enhanced-card bg-card border-border animate-slide-in-${index % 2 === 0 ? "left" : "right"} animate-delay-${(index + 1) * 200} hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 group`}
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div
                    className={`bg-gradient-to-br ${category.color} p-3 rounded-lg animate-glow hover:scale-110 hover:rotate-6 transition-all duration-300 hover:shadow-lg`}
                  >
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl gradient-text-secondary hover:gradient-text-primary transition-all duration-300 cursor-default group-hover:scale-105">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={`netflix-card hover:bg-gradient-to-r ${category.color} hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-300 animate-bounce-in animate-delay-${skillIndex * 50} cursor-default hover:rotate-2`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
