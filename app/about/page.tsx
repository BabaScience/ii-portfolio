import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Youtube, BookOpen, Heart, Lightbulb, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez Inspiration Illimitée — une marque de développement personnel ancrée dans la philosophie stoïcienne, la sagesse ancienne et la transformation intérieure.",
  openGraph: {
    title: "À propos | Inspiration Illimitée",
    description:
      "Découvrez Inspiration Illimitée — une marque de développement personnel ancrée dans la philosophie stoïcienne, la sagesse ancienne et la transformation intérieure.",
  },
};

const pillars = [
  {
    icon: BookOpen,
    title: "Philosophie Stoïcienne",
    description:
      "Les enseignements de Marc Aurèle, Sénèque et Épictète appliqués à la vie moderne. Des outils concrets pour cultiver la sagesse et la sérénité.",
  },
  {
    icon: Star,
    title: "Sagesse Ancienne",
    description:
      "Les grandes traditions orientales et occidentales recèlent des trésors intemporels. Nous les rendons accessibles, vivants et transformateurs.",
  },
  {
    icon: Lightbulb,
    title: "L'Art de Penser",
    description:
      "La pensée critique, les modèles mentaux et la clarté cognitive comme fondement d'une vie délibérée et authentique.",
  },
  {
    icon: Heart,
    title: "Transformation Personnelle",
    description:
      "La paix intérieure, la résilience et la construction du caractère. Non pas des formules magiques, mais un travail profond sur soi.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Sparkles className="w-6 h-6 text-primary mr-2" />
            <span className="font-bold text-foreground">Inspiration Illimitée</span>
          </Link>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link href="/articles">
              <Button variant="ghost">Articles</Button>
            </Link>
            <Link href="/about">
              <Button variant="ghost">À propos</Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost">Contact</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-24 px-4 text-center bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-3xl mx-auto">
          <Sparkles className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">
            À propos d&apos;Inspiration Illimitée
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Une marque de développement personnel pour tous ceux qui cherchent à
            penser plus profondément, vivre plus consciemment et grandir de l&apos;intérieur.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold font-serif mb-6 text-center">Notre mission</h2>
          <div className="prose prose-lg dark:prose-invert mx-auto text-muted-foreground space-y-4">
            <p>
              Inspiration Illimitée est née d&apos;une conviction simple : la sagesse des
              grands philosophes et traditions spirituelles n&apos;appartient pas à une élite
              intellectuelle. Elle est pour tout le monde — et elle peut changer des vies.
            </p>
            <p>
              À travers notre chaîne YouTube et nos articles, nous explorons la philosophie
              stoïcienne, la conscience, l&apos;art de penser et la transformation personnelle.
              Notre approche est à la fois rigoureuse et accessible, ancrée dans l&apos;expérience
              humaine concrète.
            </p>
            <p>
              Nous croyons que chaque personne porte en elle un potentiel illimité —
              et que la philosophie, bien comprise, est l&apos;outil le plus puissant pour
              l&apos;éveiller.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold font-serif mb-12 text-center">Nos piliers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-background border border-border rounded-xl p-6 hover:border-primary/40 transition-colors"
              >
                <pillar.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <Youtube className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold font-serif mb-4">
            Rejoignez notre communauté
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Plus de 52 000 abonnés sur YouTube. Rejoignez-nous pour des vidéos
            hebdomadaires sur la philosophie, la sagesse et la transformation personnelle.
          </p>
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white"
            asChild
          >
            <a
              href="https://www.youtube.com/@inspiration_illimitee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="mr-2 h-5 w-5" />
              S&apos;abonner sur YouTube
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 dark:bg-muted/10 py-12 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Sparkles className="w-8 h-8 text-primary mr-2" />
            <span className="text-xl font-medium">Inspiration Illimitée</span>
          </div>
          <div className="flex gap-x-8 gap-y-4 flex-wrap justify-center">
            <Link href="/articles" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Articles</Link>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">À propos</Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            <Link href="/mentions-legales" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Mentions légales</Link>
          </div>
        </div>
        <div className="max-w-7xl mx-auto text-center mt-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Inspiration Illimitée. Tous droits réservés.
        </div>
      </footer>
    </main>
  );
}
