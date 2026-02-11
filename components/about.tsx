import { User, MapPin, Calendar, Briefcase, Heart, Gamepad2 } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 gradient-bg-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="flex items-center gap-4 mb-8">
              <User className="h-8 w-8 text-primary animate-float" />
              <h2 className="text-4xl sm:text-5xl font-bold gradient-text-netflix">About Me</h2>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="animate-fade-in-up animate-delay-200 text-lg">
                I am a B.Tech Computer Science student with strong expertise in Full Stack Web Development. Organized
                and dependable candidate successful at managing priorities with a positive attitude. I am willing to
                take on added responsibilities to meet team goals while continuously enhancing my technical proficiency.
              </p>
              <p className="animate-fade-in-up animate-delay-400 text-lg">
                I worked as a Full Stack Developer Intern at Amstech Incorporation Pvt. Ltd., I focused on Java
                Technology (J2SE/J2EE), MySQL, and Angular 12. I have gained hands-on experience in full-stack
                development under the mentorship of the CTO and co-founder.
              </p>
              <p className="animate-fade-in-up animate-delay-600 text-lg">
                I am also active in co-curricular activities like playing table tennis and have a keen interest in video
                games. I enjoy working on scalable web solutions and creating better user experiences through innovative
                design and development.
              </p>
            </div>

            <div className="flex items-center gap-6 mt-8 animate-fade-in-up animate-delay-800">
              <div className="flex items-center gap-2 text-primary">
                <Heart className="h-5 w-5 animate-pulse" />
                <span className="text-sm font-medium">Table Tennis Player</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Gamepad2 className="h-5 w-5 animate-bounce" />
                <span className="text-sm font-medium">Gaming Enthusiast</span>
              </div>
            </div>
          </div>

          <div className="animate-scale-in animate-delay-200">
            <div className="enhanced-card bg-card border border-border rounded-lg p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-6 gradient-text-blue flex items-center gap-2">
                  <Briefcase className="h-6 w-6" />
                  Quick Facts
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center animate-slide-in-right animate-delay-300">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Location
                    </span>
                    <span className="font-medium">Indore, India</span>
                  </div>
                  <div className="flex justify-between items-center animate-slide-in-right animate-delay-400">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Status
                    </span>
                    <span className="font-medium">B.Tech Student (Current)</span>
                  </div>
                  <div className="flex justify-between items-center animate-slide-in-right animate-delay-500">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Briefcase className="h-4 w-4" />
                      Focus
                    </span>
                    <span className="font-medium">Full-Stack Development</span>
                  </div>
                  <div className="flex justify-between items-center animate-slide-in-right animate-delay-600">
                    <span className="text-muted-foreground">Contact</span>
                    <span className="text-primary font-medium">+91-9399219122</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
