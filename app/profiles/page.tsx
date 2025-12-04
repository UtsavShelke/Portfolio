"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Code, Briefcase, GraduationCap, Play } from "lucide-react"

const profiles = [
  {
    id: "developer",
    name: "Utsav Shelke",
    title: "Recruiter",
    avatar: "/profilep.jpg",
    description: "Explore my development journey",
    icon: Code,
    gradient: "from-blue-500 to-purple-600",
    hoverGradient: "from-blue-400 to-purple-500",
  },
  {
    id: "student",
    name: "Utsav Shelke",
    title: "Stalker",
    avatar: "/placeholder-jw887.jpg",
    description: "Discover my educational path",
    icon: GraduationCap,
    gradient: "from-orange-500 to-red-600",
    hoverGradient: "from-orange-400 to-red-500",
  },
]

const portfolioShowcase = [
  { title: "E-Commerce Platform", image: "/modern-ecommerce-dashboard.png", category: "Web Development" },
  { title: "Task Management", image: "/kanban-task-management.png", category: "React App" },
  { title: "Analytics Dashboard", image: "/analytics-dashboard.png", category: "Data Viz" },
  { title: "Mobile Banking", image: "/mobile-banking-app.png", category: "Mobile" },
  { title: "AI Chat Bot", image: "/ai-chatbot-interface.png", category: "AI/ML" },
  { title: "Social Media", image: "/social-media-dashboard.png", category: "Social" },
  { title: "Crypto Wallet", image: "/cryptocurrency-wallet.jpg", category: "Blockchain" },
  { title: "Food Delivery", image: "/food-delivery-app-screen.png", category: "Mobile" },
  { title: "Learning Platform", image: "/online-learning-platform.png", category: "Education" },
  { title: "Fitness Tracker", image: "/fitness-tracking-app-interface.png", category: "Health" },
  { title: "Music Streaming", image: "/music-streaming-interface.jpg", category: "Entertainment" },
  { title: "Travel Booking", image: "/travel-booking-website.png", category: "Travel" },
]

export default function ProfilesPage() {
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null)
  const [hoveredShowcase, setHoveredShowcase] = useState<number | null>(null)
  const router = useRouter()

  const handleProfileSelect = (profileId: string) => {
    setSelectedProfile(profileId)
    setTimeout(() => {
      router.push("/portfolio")
    }, 800)
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-1 opacity-30">
        {portfolioShowcase.map((item, index) => (
          <div
            key={index}
            className="relative aspect-[3/4] group cursor-pointer"
            onMouseEnter={() => setHoveredShowcase(index)}
            onMouseLeave={() => setHoveredShowcase(null)}
          >
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-xs font-semibold truncate">{item.title}</p>
              <p className="text-blue-300 text-xs">{item.category}</p>
            </div>
            {hoveredShowcase === index && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors duration-200">
                  <Play className="h-6 w-6 text-white fill-white" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
              Who's watching?
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light">
              Select a profile ----- Spoiler: They're all me.
              
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12">
            {profiles.map((profile) => {
              const IconComponent = profile.icon
              const isSelected = selectedProfile === profile.id

              return (
                <div
                  key={profile.id}
                  className={`group cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                    isSelected ? "scale-105" : ""
                  }`}
                  onClick={() => handleProfileSelect(profile.id)}
                >
                  {/* Avatar Container */}
                  <div className="relative mb-4">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden border-4 border-transparent group-hover:border-white/50 transition-all duration-300">
                      <img
                        src={profile.avatar || "/placeholder.svg"}
                        alt={profile.name}
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient overlay on hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${profile.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                      />
                    </div>

                    {/* Icon badge */}
                    <div className="absolute -bottom-2 -right-2">
                      <div
                        className={`bg-gradient-to-br ${profile.gradient} p-2 rounded-full border-2 border-black group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="h-4 w-4 text-white" />
                      </div>
                    </div>

                    {/* Selection loading overlay */}
                    {isSelected && (
                      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center rounded-lg">
                        <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
                      </div>
                    )}
                  </div>

                  {/* Profile Name */}
                  <h3 className="text-center text-white text-lg md:text-xl font-medium group-hover:text-gray-300 transition-colors duration-200">
                    {profile.title}
                  </h3>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </div>
  )
}
