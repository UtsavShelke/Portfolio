import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, Building, TrendingUp, Sparkles } from "lucide-react"

const experiences = [
  {
    title: "Web Developer Intern",
    company: "Laxyo Energy Pvt. Ltd.",
    period: "March 2022 – April 2022",
    description:
      "Worked on scalable web solutions using HTML, CSS, JavaScript, Bootstrap and PHP. Gained hands-on full-stack experience.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap"],
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Full Stack Developer Intern",
    company: "Amstech Incorporation Pvt. Ltd.",
    period: "July 2024 – January 2025",
    description:
      "Developed scalable applications using Java (J2SE/J2EE), MySQL and Angular 12 under CTO mentorship.",
    technologies: ["Java", "MySQL", "Angular 12"],
    color: "from-blue-500 to-indigo-600",
  },
]

export function Experience() {
  return (
    <section id="experience" className="relative py-16 px-4 gradient-bg-2 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Briefcase className="h-7 w-7 text-primary" />
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text-netflix">
              Experience
            </h2>
            <TrendingUp className="h-7 w-7 text-primary" />
          </div>
          <p className="text-muted-foreground">
            Building expertise through real-world development
          </p>
        </div>

        {/* Creative Center Label */}
        <div className="hidden md:flex justify-center mb-8">
          <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full backdrop-blur-md shadow-lg animate-pulse">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Career Journey
            </span>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-primary via-primary/40 to-transparent h-full" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0

              return (
                <div key={index} className="relative flex items-center">

                  {/* Card */}
                  <div
                    className={`w-full md:w-1/2 ${
                      isLeft ? "md:pr-10" : "md:pl-10 md:ml-auto"
                    }`}
                  >
                    <Card className="shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-lg bg-card/80 border border-border/50">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">
                          {exp.title}
                        </CardTitle>
                        <p className="text-sm text-primary flex items-center gap-1 mt-1">
                          <Building className="h-4 w-4" />
                          {exp.company}
                        </p>
                      </CardHeader>

                      <CardContent>
                        <Badge
                          className={`mb-3 text-white bg-gradient-to-r ${exp.color}`}
                        >
                          <Calendar className="h-3 w-3 mr-1" />
                          {exp.period}
                        </Badge>

                        <p className="text-sm text-muted-foreground mb-3">
                          {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs hover:scale-105 transition-transform"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
                    <div
                      className={`w-4 h-4 bg-gradient-to-r ${exp.color} rounded-full ring-4 ring-background shadow-lg`}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-30 animate-pulse" />
    </section>
  )
}
