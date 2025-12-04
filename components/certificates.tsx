import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileText } from "lucide-react"

const certificates = [
  {
    title: "Google Fundamentals of Digital Marketing",
    issuer: "Google",
    date: "Jul 2023",
    validUntil: "Lifetime",
    credentialId: "169958385",
    description:
      "Comprehensive certification covering digital marketing fundamentals, including SEO, SEM, social media marketing, and analytics.",
    verifyUrl: "/Google.pdf", 
  },
  {
    title: "Database Management System Excellence",
    issuer: "Udemy",
    date: "Oct 2024",
    validUntil: "Lifetime",
    credentialId: "0004",
    description:
      "Advanced certification in database management systems, covering design, optimization, and administration of relational databases.",
    verifyUrl: "http://ude.my/UC-dd663771-6aa8-4f18-9ffb-76b3271d6fct", 
  },
  {
    title: "AWS Academy Machine Learning Foundations",
    issuer: "AWS Academy",
    date: "Dec 2025",
    validUntil: "Lifetime",
    credentialId: "uk8BbevD",
    description:
      "Foundation-level certification in machine learning concepts and AWS ML services, covering supervised and unsupervised learning techniques.",
    verifyUrl: "https://www.credly.com/go/uk8BbevD", 
  },
]

export function Certificates() {
  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Certifications</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>

              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                      {cert.title}
                    </CardTitle>
                    <p className="text-primary font-medium group-hover:text-primary/80 transition-colors duration-300">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center gap-4 mt-2">
                      <Badge variant="secondary" className="group-hover:scale-105 transition-transform duration-300">
                        Issued: {cert.date}
                      </Badge>
                      <Badge variant="outline" className="group-hover:bg-primary/10 transition-colors duration-300">
                        {cert.validUntil}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {cert.description}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/60 transition-colors duration-300">
                      Credential ID:
                    </p>
                    <p className="font-mono text-sm group-hover:text-primary transition-colors duration-300">
                      {cert.credentialId}
                    </p>
                  </div>
                  
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-105 transition-all duration-300 bg-transparent"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Verify
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}