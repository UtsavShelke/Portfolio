import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Star, Target, Sparkles, Crown, Lock, Unlock } from "lucide-react"

export function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50 bg-background/90">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Crown className="h-8 w-8 text-primary animate-float" />
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text">Achievements & Recognition</h2>
            <Sparkles className="h-8 w-8 text-primary animate-float animate-delay-300" />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Celebrating milestones and recognition in the journey of innovation
          </p>
        </div>

        <div className="flex justify-center">
          <Card
            className="group relative overflow-hidden bg-background/50 backdrop-blur-3xl border-border
                       hover:border-primary/50 transition-all duration-700
                       hover:scale-[1.03] hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20
                       w-full max-w-md h-64 flex flex-col items-center justify-center text-center
                       cursor-pointer"
          >
            {/* Gradient blur effect */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0
                         group-hover:opacity-40 blur-3xl transition-opacity duration-700"
            ></div>
            {/* Base Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-10
                         group-hover:opacity-100 transition-opacity duration-700"
            ></div>

            <CardContent className="flex flex-col items-center justify-center p-6 z-10">
              <div className="relative h-12 w-12 mb-4">
                <Lock
                  className="absolute inset-0 h-12 w-12 text-muted-foreground
                             group-hover:opacity-0 group-hover:scale-0 transition-all duration-700 ease-in-out
                             animate-pulse-slow"
                />
                <Unlock
                  className="absolute inset-0 h-12 w-12 text-cyan-400 opacity-0 scale-0
                             group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-in-out
                             group-hover:animate-pulse-light"
                />
                <div className="absolute inset-0 rounded-full border-2 border-cyan-400 opacity-0 scale-0
                                group-hover:opacity-40 group-hover:scale-125 transition-all duration-700 ease-out
                                group-hover:animate-ping-once-subtle"></div>
              </div>
              <CardTitle className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-700">
                Yet to be Unlocked
              </CardTitle>
              <p className="text-muted-foreground mt-2 group-hover:text-foreground/70 transition-colors duration-700">
                New achievements coming soon!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}