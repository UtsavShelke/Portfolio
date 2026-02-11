import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, Building, TrendingUp } from "lucide-react"

const experiences = [
  {
    title: "Web Developer Intern",
    company: "Laxyo Energy Pvt. Ltd.",
    period: "March 2022 – April 2022",
    description:
      "Successfully completed an internship under the Web Developer Program, focusing on HTML, CSS, JavaScript, Bootstrap and PHP. Worked on scalable web solutions and gained hands-on experience in full-stack development.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap"],
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Full Stack Developer Intern",
    company: "Amstech Incorporation Pvt. Ltd.",
    period: "July 2024 – January 2025",
    description:
      "Successfully completed an internship under the Full Stack Developer Program, focusing on Java (J2SE/J2EE), MySQL, and Angular 12. Developed scalable applications under CTO mentorship.",
    technologies: ["Java", "J2SE/J2EE", "MySQL", "Angular 12"],
    color: "from-blue-500 to-indigo-600",
  },
]

export function Experience() {
  return (
    <section
      id="experience"
      className="py-16 px-4 sm:px-6 lg:px-8 gradient-bg-2 relative"
    >
      <div className="max-w-6xl mx-auto">

    
       <div className="text-center mb-12 animate-fade-in-up">
  <div className="flex justify-center items-center gap-4 mb-6">
    <Briefcase className="h-8 w-8 text-primary animate-float" />

    <h2 className="text-4xl sm:text-5xl font-bold 
      bg-gradient-to-r from-red-600 via-pink-500 to-purple-600 
      bg-clip-text text-transparent">
      Experience
    </h2>

    <TrendingUp className="h-8 w-8 text-primary animate-float animate-delay-300" />
  </div>

  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
    Building technical expertise through hands-on development experience
  </p>
</div>
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-primary via-primary/50 to-transparent h-full animate-fade-in-up animate-delay-200" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0

              return (
                <div key={index} className="relative flex items-center">

                  <div
                    className={`w-full md:w-1/2 ${
                      isLeft ? "md:pr-12" : "md:pl-12 md:ml-auto"
                    }`}
                  >
                    <Card
                      className={`relative enhanced-card bg-card border-border shadow-xl animate-slide-in-right animate-delay-${
                        (index + 1) * 200
                      }`}
                    >
                      {/* Subtle Accent Strip */}
                      <div
                        className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${exp.color} rounded-l-md`}
                      />

                      <CardHeader>
                        <CardTitle className="text-xl gradient-text-blue flex items-center gap-2">
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
                          className={`mb-4 bg-gradient-to-r ${exp.color} text-white animate-fade-in-up animate-delay-100`}
                        >
                          <Calendar className="h-3 w-3 mr-1" />
                          {exp.period}
                        </Badge>

                        <p className="text-muted-foreground mb-4 leading-relaxed animate-fade-in-up animate-delay-200">
                          {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className={`netflix-card hover:bg-gradient-to-r ${exp.color} hover:text-white transition-all duration-300 animate-bounce-in animate-delay-${
                                techIndex * 50
                              }`}
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
                      className={`w-4 h-4 bg-gradient-to-r ${exp.color} rounded-full ring-4 ring-background shadow-lg animate-scale-in animate-delay-${
                        (index + 1) * 200
                      }`}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
