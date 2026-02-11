import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, Building, TrendingUp } from "lucide-react"

const experiences = [
  {
    title: "Web Developer Intern",
    company: "Laxyo Energy Pvt. Ltd.",
    period: "March 2022 – April 2022",
    description:
      "Successfully completed an internship under the Web Developer Program, focusing on HTML, CSS, JavaScript, Bootstrap and PHP. Worked on scalable web solutions and gained hands-on experience in full-stack development under the guidance of Mr. Sourabh Joshi and Ms. Nehal Shikannia.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap"],
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Full Stack Developer Intern",
    company: "Amstech Incorporation Pvt. Ltd.",
    period: "July 2024 – January 2025",
    description:
      "Successfully completed an internship under the Full Stack Developer Program, focusing on Java Technology (J2SE/J2EE), MySQL, and Angular 12. Worked on scalable web solutions and gained hands-on experience under the mentorship of the CTO and co-founder.",
    technologies: ["Java", "J2SE/J2EE", "MySQL", "Angular 12"],
    color: "from-blue-500 to-indigo-600",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 gradient-bg-2">
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Briefcase className="h-8 w-8 text-primary animate-float" />
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text-netflix">
              Experience
            </h2>
            <TrendingUp className="h-8 w-8 text-primary animate-float animate-delay-300" />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building technical expertise through hands-on development experience
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Center Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-primary/40 to-transparent h-full" />

          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0

              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center">

                  {/* Left Side */}
                  {isLeft && (
                    <div className="md:w-1/2 md:pr-12">
                      <Card className="enhanced-card bg-card border-border shadow-xl">
                        <CardHeader>
                          <CardTitle className="text-xl gradient-text-blue">
                            {exp.title}
                          </CardTitle>
                          <p className="text-primary font-medium flex items-center gap-2 mt-2">
                            <Building className="h-4 w-4" />
                            {exp.company}
                          </p>
                        </CardHeader>

                        <CardContent>
                          <Badge
                            variant="secondary"
                            className={`mb-4 bg-gradient-to-r ${exp.color} text-white`}
                          >
                            <Calendar className="h-3 w-3 mr-1" />
                            {exp.period}
                          </Badge>

                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {exp.description}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="outline"
                                className={`hover:bg-gradient-to-r ${exp.color} hover:text-white transition-all duration-300`}
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )}

                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
                    <div
                      className={`w-5 h-5 bg-gradient-to-r ${exp.color} rounded-full shadow-lg ring-4 ring-background`}
                    />
                  </div>

                  {/* Right Side */}
                  {!isLeft && (
                    <div className="md:w-1/2 md:pl-12 md:ml-auto">
                      <Card className="enhanced-card bg-card border-border shadow-xl">
                        <CardHeader>
                          <CardTitle className="text-xl gradient-text-blue">
                            {exp.title}
                          </CardTitle>
                          <p className="text-primary font-medium flex items-center gap-2 mt-2">
                            <Building className="h-4 w-4" />
                            {exp.company}
                          </p>
                        </CardHeader>

                        <CardContent>
                          <Badge
                            variant="secondary"
                            className={`mb-4 bg-gradient-to-r ${exp.color} text-white`}
                          >
                            <Calendar className="h-3 w-3 mr-1" />
                            {exp.period}
                          </Badge>

                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {exp.description}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="outline"
                                className={`hover:bg-gradient-to-r ${exp.color} hover:text-white transition-all duration-300`}
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
