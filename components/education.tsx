import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, BookOpen, Star, Trophy } from "lucide-react"

const education = [
  {
    degree: "B.Tech Computer Science",
    school: "Institute of Engineering and Science, IPS Academy",
    period: "2023 – Present",
    gpa: "7.05 CGPA",
    description:
      "Currently pursuing Bachelor of Technology in Computer Science with strong focus on Full Stack Web Development, algorithms, and software engineering principles.",
    achievements: ["Current Student", "Strong Practical Skills", "Active in Co-curricular Activities"],
    color: "from-blue-500 to-indigo-600",
    prestigious: true,
  },
  {
    degree: "Diploma in Computer Science and Engineering",
    school: "Shri Vaishnav Polytechnic College, RGPV Board",
    period: "2020 – 2023",
    gpa: "76.7%",
    description:
      "Completed Diploma in CSE with excellent academic performance, building strong foundation in technical concepts and practical applications.",
    achievements: ["First Class with Distinction", "Strong Technical Foundation", "Practical Skills Development"],
    color: "from-green-500 to-teal-600",
    prestigious: false,
  },
  {
    degree: "Secondary Education",
    school: "St. Joseph Convent Sr. Sec. School, CBSE Board",
    period: "2019 – 2020",
    gpa: "76.4%",
    description:
      "Completed secondary education with strong academic performance in science and mathematics, laying the groundwork for technical education.",
    achievements: ["First Class with Distinction", "Strong Foundation in Science & Math", "Well-rounded Education"],
    color: "from-purple-500 to-pink-600",
    prestigious: false,
  },
]

export function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 gradient-bg-3">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex justify-center items-center gap-4 mb-6">
            <BookOpen className="h-8 w-8 text-primary animate-float" />
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text">Education</h2>
            <GraduationCap className="h-8 w-8 text-primary animate-float animate-delay-300" />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic foundation and continuous learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <Card
              key={index}
              className={`enhanced-card bg-card border-border animate-scale-in animate-delay-${(index + 1) * 300} ${
                edu.prestigious ? "ring-2 ring-primary/20" : ""
              } group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105 cursor-pointer overflow-hidden relative`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <CardHeader className="relative z-10">
                <div className="flex items-start gap-4">
                  <div
                    className={`bg-gradient-to-br ${edu.color} p-3 rounded-lg animate-glow relative group-hover:scale-110 transition-all duration-300`}
                  >
                    <GraduationCap className="h-6 w-6 text-white" />
                    {edu.prestigious && (
                      <div className="absolute -top-1 -right-1">
                        <Star className="h-4 w-4 text-yellow-400 animate-pulse" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2 gradient-text-blue animate-slide-in-left animate-delay-200 group-hover:text-primary transition-colors duration-300">
                      {edu.degree}
                    </CardTitle>
                    <p className="text-primary font-medium animate-fade-in-up animate-delay-300 group-hover:text-foreground transition-colors duration-300">
                      {edu.school}
                    </p>
                    <div className="flex items-center gap-4 mt-2">
                      <Badge
                        variant="secondary"
                        className={`bg-gradient-to-r ${edu.color} text-white animate-fade-in-up animate-delay-400 group-hover:shadow-lg group-hover:scale-105 transition-all duration-300`}
                      >
                        {edu.period}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="animate-fade-in-up animate-delay-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                      >
                        {edu.gpa}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground mb-4 leading-relaxed animate-fade-in-up animate-delay-600 group-hover:text-foreground transition-colors duration-300">
                  {edu.description}
                </p>

                <div className="space-y-2 animate-fade-in-up animate-delay-700">
                  <h4 className="font-medium flex items-center gap-2 gradient-text-blue group-hover:text-primary transition-colors duration-300">
                    <Trophy className="h-4 w-4 group-hover:text-yellow-500 transition-all duration-300" />
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className={`flex items-center gap-2 text-muted-foreground animate-slide-in-left animate-delay-${(i + 1) * 100} group-hover:text-foreground transition-all duration-300`}
                      >
                        <Award className="h-3 w-3 text-primary flex-shrink-0 group-hover:text-yellow-500 transition-all duration-300" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
