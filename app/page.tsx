"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, FileText, BarChart3, Settings, Shield } from "lucide-react"

export default function Home() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <FileText className="h-5 w-5 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold gradient-text">Doc It</h1>
            </div>
            <Badge variant="secondary" className="text-xs">
              SIH 2025 • PS: SIH25080
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge className="mb-6" variant="outline">
            Smart India Hackathon 2025
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Intelligent Document Management & <span className="gradient-text">Decision Support</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
            Transform document overloading into streamlined decision-making with our AI-powered optimization platform.
            It is just a prototype and not a full fledged product.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => router.push("/login")} className="text-lg px-8 py-6">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="glass-effect">
            <CardHeader className="pb-3">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Document Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Seamlessly integrate heterogeneous data sources and eliminate document silos.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="glass-effect">
            <CardHeader className="pb-3">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                <BarChart3 className="h-6 w-6 text-accent" />
              </div>
              <CardTitle className="text-lg">Smart Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                AI-powered insights with multi-objective optimization and predictive modeling.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="glass-effect">
            <CardHeader className="pb-3">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Decision Support</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Algorithm-driven recommendations with explainable reasoning and conflict alerts.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="glass-effect">
            <CardHeader className="pb-3">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <CardTitle className="text-lg">Enterprise Security</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Auditable processes with role-based access and compliance tracking.</CardDescription>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-2xl mx-auto glass-effect">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Team Error404</CardTitle>
            <CardDescription className="text-lg">Jadavpur University • Smart India Hackathon 2025</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Badge variant="outline" className="mb-4">
              Problem Statement: SIH25080
            </Badge>
            <p className="text-muted-foreground">
              Addressing document overloading challenges in kochi rail management through intelligent automation and decision
              support systems.
            </p>
          </CardContent>
        </Card>
      </main>

      <footer className="border-t border-border bg-card/30 mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-sm text-muted-foreground">
            © 2025 Doc It by Team Error404. Built for Smart India Hackathon 2025.
          </div>
        </div>
      </footer>
    </div>
  )
}
