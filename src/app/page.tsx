"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen morphing-bg relative overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Aurora-like flowing gradients */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-96 h-96 shader-orb aurora-effect" />
          <div
            className="absolute top-1/3 right-20 w-80 h-80 shader-orb aurora-effect"
            style={{ animationDelay: "8s" }}
          />
          <div
            className="absolute bottom-20 left-1/3 w-72 h-72 shader-orb aurora-effect"
            style={{ animationDelay: "15s" }}
          />
        </div>

        {/* Particle-like floating elements with shader effects */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full particle-shader" />
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-accent/10 rounded-full particle-shader wave-effect"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-32 left-1/4 w-40 h-40 bg-secondary/10 rounded-full particle-shader"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-28 h-28 bg-primary/8 rounded-full particle-shader wave-effect"
          style={{ animationDelay: "6s" }}
        />

        {/* Shimmer overlay effects */}
        <div className="absolute inset-0 shimmer-effect opacity-30" />
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-8">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg soft-pulse wave-effect" />
            <span className="font-serif text-2xl font-bold text-foreground">Serene Journal</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              How It Works
            </a>
            <a
              href="#testimonials"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Stories
            </a>
            <Button
              variant="outline"
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 glass-shader bg-transparent"
            >
              Sign In
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium glass-shader">
              ✨ Your AI Wellness Companion
            </Badge>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
              Journal with
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent gradient-shift relative">
                Mindful AI
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent shimmer-effect" />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform your daily reflections into a journey of growth with personalized AI insights, gentle guidance,
              and emotional wellness tracking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="px-8 py-4 text-lg font-medium bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Journey
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 bg-transparent"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Gentle AI Guidance</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience journaling enhanced by compassionate AI that adapts to your emotional needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-shader border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 shimmer-effect opacity-20" />
              <CardContent className="p-8 text-center relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl mx-auto mb-6 flex items-center justify-center soft-pulse wave-effect">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Empathetic Responses</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Receive thoughtful, personalized reflections that understand your emotional state and provide gentle
                  guidance.
                </p>
              </CardContent>
            </Card>

            <Card
              className="glass-shader border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="absolute inset-0 shimmer-effect opacity-20" style={{ animationDelay: "1s" }} />
              <CardContent className="p-8 text-center relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-2xl mx-auto mb-6 flex items-center justify-center soft-pulse wave-effect">
                  <span className="text-2xl">🎭</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Adaptive Tones</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Choose from empathetic, motivational, structured, or casual response styles that match your current
                  needs.
                </p>
              </CardContent>
            </Card>

            <Card
              className="glass-shader border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="absolute inset-0 shimmer-effect opacity-20" style={{ animationDelay: "2s" }} />
              <CardContent className="p-8 text-center relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl mx-auto mb-6 flex items-center justify-center soft-pulse wave-effect">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Growth Insights</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Track emotional patterns, celebrate progress, and receive weekly summaries of your wellness journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative z-10 px-6 py-20 bg-card/30 glass-shader">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Your Daily Ritual</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A simple, mindful process designed to fit seamlessly into your daily routine
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Write Freely</h3>
                  <p className="text-muted-foreground">
                    Express your thoughts, feelings, and experiences in our distraction-free writing space.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Receive Insights</h3>
                  <p className="text-muted-foreground">
                    Get personalized AI reflections that offer perspective, encouragement, and gentle guidance.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Track Growth</h3>
                  <p className="text-muted-foreground">
                    Watch your emotional patterns evolve and celebrate your progress over time.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8 glass-shader relative overflow-hidden">
                <div className="absolute inset-0 wave-effect opacity-30" />
                <div className="bg-background rounded-2xl p-6 shadow-lg relative z-10">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                    <div className="h-4 bg-muted rounded w-full"></div>
                    <div className="h-4 bg-muted rounded w-2/3"></div>
                    <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                      <div className="h-3 bg-primary/30 rounded w-5/6 mb-2"></div>
                      <div className="h-3 bg-primary/30 rounded w-4/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-3xl p-12 glass-shader relative overflow-hidden">
            <div className="absolute inset-0 aurora-effect opacity-20" />
            <div className="relative z-10">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                Begin Your Wellness Journey
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands who have discovered the power of mindful journaling with AI guidance. Start your free
                journey today.
              </p>
              <Button
                size="lg"
                className="px-12 py-4 text-lg font-medium bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Free
              </Button>
              <p className="text-sm text-muted-foreground mt-4">No credit card required • 7-day free trial</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-md" />
              <span className="font-serif text-xl font-bold text-foreground">Serene Journal</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Support
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
            <p>© 2025 Serene Journal. Crafted with care for your mental wellness journey.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
