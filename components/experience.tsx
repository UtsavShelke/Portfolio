import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, Building, TrendingUp } from "lucide-react"

const experiences = [
  {
    title: "Web Developer Intern",
    company: "Laxyo Energy Pvt. Ltd.",
    period: "March 2022 – April 2022",
    description:
      "Successfully completed an internship under the Web Developer Program, focusing on HTML ,CSS ,Javascript, Bootstrap and PHP. Worked on a client project involving scalable web solutions and gained hands-on experience in full-stack development under the guidance of Mr. SOurabh Joshi and Ms. Nehal Shikannia.",
    technologies: ["HTML", "CSS", "JS", "PHP", "Bootstrap"],
    color: "from-emerald-500 to-teal-600",
    current: true,
  },
  {
    title: "Full Stack Developer Intern",
    company: "Amstech Incorporation Pvt. Ltd.",
    period: "July 2024 – January 2025",
    description:
      "Successfully completed an internship under the Full Stack Developer Program, focusing on Java Technology (J2SE/J2EE), MySQL, and Angular 12. Worked on a client project involving scalable web solutions and gained hands-on experience in full-stack development under the mentorship of the CTO and co-founder.",
    technologies: ["Java", "J2SE/J2EE", "MySQL", "Angular 12"],
    color: "from-emerald-500 to-teal-600",
    current: false,
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 gradient-bg-2">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Briefcase className="h-8 w-8 text-primary animate-float" />
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text-netflix">Experience</h2>
            <TrendingUp className="h-8 w-8 text-primary animate-float animate-delay-300" />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building technical expertise through hands-on development experience
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent animate-fade-in-up animate-delay-200" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div
                  className={`absolute left-6 w-4 h-4 bg-gradient-to-r ${exp.color} rounded-full animate-scale-in animate-delay-${(index + 1) * 200} ${exp.current ? "animate-pulse-glow" : ""}`}
                />

                <Card
                  className={`enhanced-card bg-card border-border ml-16 animate-slide-in-right animate-delay-${(index + 1) * 300} ${exp.current ? "ring-2 ring-primary/30" : ""}`}
                >
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl gradient-text-blue flex items-center gap-2">
                          {exp.title}
                          {exp.current && (
                            <Badge className="bg-gradient-to-r from-green-400 to-emerald-500 text-black animate-pulse">
                              Current
                            </Badge>
                          )}
                        </CardTitle>
                        <p className="text-primary font-medium flex items-center gap-2 mt-2">
                          <Building className="h-4 w-4" />
                          {exp.company}
                        </p>
                      </div>
                      <Badge
                        variant="secondary"
                        className={`w-fit bg-gradient-to-r ${exp.color} text-white animate-fade-in-up animate-delay-100`}
                      >
                        <Calendar className="h-3 w-3 mr-1" />
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed animate-fade-in-up animate-delay-200">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className={`netflix-card hover:bg-gradient-to-r ${exp.color} hover:text-white transition-all duration-300 animate-bounce-in animate-delay-${techIndex * 50}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
