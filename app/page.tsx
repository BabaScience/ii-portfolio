"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Youtube, Mail, Twitter, Instagram, Sparkles, BookOpen, Quote } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Merci pour votre inscription!");
    setEmail("");
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50 z-[1]" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Sparkles className="w-20 h-20 text-primary mx-auto mb-6" />
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Inspiration <span className="text-primary">Illimitée</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-8">
            Explorez les profondeurs de la conscience humaine et de la sagesse philosophique
          </p>
          
          <div className="flex items-center justify-center mb-8">
            <div className="bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-lg p-6 max-w-2xl">
              <Quote className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-xl italic text-gray-100">
                "La sagesse commence dans l'émerveillement. La plus belle expérience que nous puissions vivre est celle du mystère."
              </p>
              <p className="text-right text-primary mt-3">- Albert Einstein</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => window.open("https://www.youtube.com/@inspiration_illimitee", "_blank")}>
              <Youtube className="mr-2 h-5 w-5" />
              S'abonner
            </Button>
            <Button size="lg" variant="secondary">
              <BookOpen className="mr-2 h-5 w-5" />
              Découvrir
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-12">
            <Quote className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold text-center">Vidéos Populaires</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/mDMARzV4w6o?si=fwx1hutXrSSLj27_"
                title="La Conscience et l'Univers"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/O2eU0rLx5X0?si=9g2nALlKV-rNwO1H"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Insights Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Dernières Réflexions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "La Nature de la Conscience",
                desc: "Une exploration profonde de ce qui constitue notre conscience et notre perception de la réalité.",
                image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
              },
              {
                title: "Le Temps et l'Existence",
                desc: "Réflexions sur la nature du temps et son impact sur notre compréhension de l'existence.",
                image: "https://images.unsplash.com/photo-1502790671504-542ad42d5189?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
              },
              {
                title: "L'Art de la Pensée",
                desc: "Comment développer une pensée plus profonde et plus significative dans un monde en constante évolution.",
                image: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
              }
            ].map((item, i: number) => (
              <Card key={i.toString()} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="aspect-video relative bg-gray-100">
                  <div 
                    className="absolute inset-0 group-hover:scale-105 transition-transform duration-300"
                    style={{
                      backgroundImage: `url('${item.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1475070929565-c985b496cb9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.1)"
          }}
        />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <Mail className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">Restez Inspiré</h2>
          <p className="text-xl text-gray-300 mb-8">
            Recevez nos réflexions philosophiques et contenus exclusifs directement dans votre boîte mail
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 text-white placeholder:text-gray-400 border-white/20 outline-none"
              required
            />
            <Button type="submit" className="bg-primary hover:bg-primary/90">
              S'inscrire
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-12 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Sparkles className="w-8 h-8 text-primary mr-2" />
            <span className="text-xl font-bold">Inspiration Illimitée</span>
          </div>
          <div className="flex space-x-6">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:text-primary"
              onClick={() => window.open("https://www.youtube.com/@inspiration_illimitee", "_blank")}
            >
              <Youtube className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </footer>
    </main>
  );
}