import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Zap, Star, ChevronRight, PlayCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">WishlistConqueror</span>
            </div>
            <Button variant="outline">Login</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <Badge className="mb-6 animate-float">Steam Marketing Masterclass</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            How to Market a Game
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Master Steam marketing, skyrocket your wishlists, and turn your indie game into a success story
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-xl px-8 py-6">
              Get Instant Access
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-xl px-8 py-6">
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch Preview
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">75K+</div>
              <p className="text-muted-foreground">Wishlists generated in 6 weeks</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">500%</div>
              <p className="text-muted-foreground">Average wishlist increase</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">1000+</div>
              <p className="text-muted-foreground">Games successfully launched</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Imagine This Monday Morning...</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              You log into Steamworks and see your wishlist graph shooting up to 1,000... then 1,500 the next day. 
              A YouTuber covered your game, causing a domino effect. But this isn't luck—it's the result of 
              strategic marketing you learned from this masterclass.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">From Invisible to Unstoppable</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <TrendingUp className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>Influencers actively covering your game</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>Trailers getting thousands of organic views</span>
                </li>
                <li className="flex items-start">
                  <Zap className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>Wishlists rolling in consistently</span>
                </li>
              </ul>
              <p className="text-lg text-muted-foreground mt-6">
                When you know which marketing tactics to apply when, results come fast.
              </p>
            </div>
            
            <Card className="bg-gradient-card border-primary/20">
              <CardContent className="p-8">
                <div className="text-6xl mb-4">📈</div>
                <h4 className="text-2xl font-bold mb-4">Real Results</h4>
                <p className="text-muted-foreground">
                  Students regularly achieve 10x wishlist growth using the proven strategies 
                  taught in this masterclass.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Success Stories</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gradient-card border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-lg mb-6 italic">
                  "Thanks to the Wishlist & Visibility Masterclass I learned how to outreach to the press 
                  and I managed to get covered in PC Gamer and Famitsu which earned me more wishlists 
                  in a week than my previous game did in 6 months."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-bold">R</span>
                  </div>
                  <div>
                    <div className="font-bold">Ralph Barbagallo</div>
                    <div className="text-muted-foreground">Founder, FLARB LLC</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-lg mb-6 italic">
                  "We achieved a super successful Steam page launch with over 75K wishlists in 6 weeks! 
                  It has been insane and we couldn't have done it without your incredible work on the masterclass."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-bold">J</span>
                  </div>
                  <div>
                    <div className="font-bold">Julian Beiboer</div>
                    <div className="text-muted-foreground">Fat Alien Cat</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">What You'll Master</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to transform your Steam presence from invisible to irresistible
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-card border-primary/20 hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Wishlist Optimization</h3>
                <p className="text-muted-foreground">
                  Master the art of converting visitors into wishlisters with proven page optimization techniques
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/20 hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Press & Influencer Outreach</h3>
                <p className="text-muted-foreground">
                  Learn the exact templates and strategies to get featured in major gaming publications
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/20 hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Steam Algorithm Mastery</h3>
                <p className="text-muted-foreground">
                  Understand and leverage Steam's discovery algorithms to maximize organic visibility
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Conquer Your Wishlist?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful indie developers who've transformed their Steam marketing 
            and achieved remarkable results.
          </p>
          <Button variant="cta" size="lg" className="bg-white text-primary hover:bg-white/90">
            Get Instant Access Now
            <ChevronRight className="ml-2 h-6 w-6" />
          </Button>
          <p className="text-white/60 mt-4">30-day money-back guarantee</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Zap className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">WishlistConqueror</span>
          </div>
          <p className="text-muted-foreground">
            © 2024 WishlistConqueror. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
