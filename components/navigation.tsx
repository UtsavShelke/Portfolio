"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1))
      const scrollPosition = window.scrollY + 100

      setIsScrolled(window.scrollY > 50)

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    // Initialize scroll position once on mount
    handleScroll();
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${ 
          isScrolled ? "glass-nav py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <div
                className="relative w-12 h-12 cursor-pointer group"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <Image
                  src="/us-logo.jpg"
                  alt="Utsav Shelke Logo"
                  width={43}
                  height={42}
                  className="rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
              <div className="flex items-center space-x-1">
                {navItems.map((item, index) => (
                  <Button
                    key={item.name}
                    variant="ghost"
                    size="sm"
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                      activeSection === item.href.slice(1)
                        ? "text-primary bg-primary/10 shadow-lg"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    } animate-fade-in-up`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {activeSection === item.href.slice(1) && (
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full animate-subtle-glow" />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-foreground hover:text-primary transition-colors"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[90] md:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-20 right-4 left-4 glass-nav rounded-2xl p-6 animate-scale-in">
            <div className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  className={`
                    justify-start text-left px-4 py-3 text-base font-medium transition-all duration-300 rounded-xl w-full
                    ${
                      activeSection === item.href.slice(1)
                        ? "text-primary bg-primary/10 shadow-lg"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/5 active:bg-primary/10"
                    } 
                    /* CRITICAL: Removed confusing focus/ring classes as the global CSS now handles the override */
                    
                    animate-slide-in-left
                  `}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}