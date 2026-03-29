import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Inspiration Illimitée, conformément à la loi française.",
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
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

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold font-serif mb-2">Mentions légales</h1>
          <p className="text-muted-foreground mb-12 text-sm">
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004
            pour la confiance dans l&apos;économie numérique.
          </p>

          <div className="prose dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold font-serif mb-4">1. Éditeur du site</h2>
              <p className="text-muted-foreground leading-relaxed">
                Le site <strong>inspirationillimitee.com</strong> est édité par :<br />
                <strong>Inspiration Illimitée</strong><br />
                Email : contact@inspirationillimitee.com<br />
                Directeur de la publication : BabaScience
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-serif mb-4">2. Hébergement</h2>
              <p className="text-muted-foreground leading-relaxed">
                Le site est hébergé par :<br />
                <strong>Vercel Inc.</strong><br />
                440 N Barranca Ave #4133<br />
                Covina, CA 91723<br />
                États-Unis<br />
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  vercel.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-serif mb-4">3. Propriété intellectuelle</h2>
              <p className="text-muted-foreground leading-relaxed">
                L&apos;ensemble du contenu de ce site (textes, images, vidéos, graphismes, logo)
                est protégé par le droit d&apos;auteur et appartient à Inspiration Illimitée,
                sauf mention contraire. Toute reproduction, même partielle, est interdite
                sans autorisation préalable écrite.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-serif mb-4">4. Données personnelles</h2>
              <p className="text-muted-foreground leading-relaxed">
                Les données personnelles collectées sur ce site (adresse email pour la
                newsletter) sont utilisées uniquement pour l&apos;envoi de la newsletter
                Inspiration Illimitée. Elles ne sont pas transmises à des tiers.
                Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification
                et de suppression de vos données en contactant :{" "}
                <a href="mailto:contact@inspirationillimitee.com" className="text-primary hover:underline">
                  contact@inspirationillimitee.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-serif mb-4">5. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ce site utilise Google Analytics pour mesurer l&apos;audience. Ces cookies
                sont déposés après votre consentement. Vous pouvez les refuser ou les
                supprimer à tout moment via les paramètres de votre navigateur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-serif mb-4">6. Liens hypertextes</h2>
              <p className="text-muted-foreground leading-relaxed">
                Le site peut contenir des liens vers des sites tiers. Inspiration Illimitée
                ne peut être tenu responsable du contenu de ces sites externes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-serif mb-4">7. Droit applicable</h2>
              <p className="text-muted-foreground leading-relaxed">
                Les présentes mentions légales sont soumises au droit français. En cas
                de litige, les tribunaux français seront seuls compétents.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Dernière mise à jour : mars 2026
            </p>
            <Link href="/" className="mt-4 inline-block">
              <Button variant="ghost" className="pl-0">
                ← Retour à l&apos;accueil
              </Button>
            </Link>
          </div>
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
