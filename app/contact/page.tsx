import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Mail, Youtube, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez l'équipe Inspiration Illimitée — partenariats, collaborations, questions ou simplement pour dire bonjour.",
  openGraph: {
    title: "Contact | Inspiration Illimitée",
    description:
      "Contactez l'équipe Inspiration Illimitée — partenariats, collaborations, questions ou simplement pour dire bonjour.",
  },
};

const socials = [
  {
    icon: Youtube,
    label: "YouTube",
    handle: "@inspiration_illimitee",
    href: "https://www.youtube.com/@inspiration_illimitee",
    color: "text-red-500",
  },
  {
    icon: Twitter,
    label: "Twitter / X",
    handle: "@inspillimitee",
    href: "https://twitter.com/inspillimitee",
    color: "text-sky-500",
  },
  {
    icon: Instagram,
    label: "Instagram",
    handle: "@inspiration_illimitee",
    href: "https://www.instagram.com/inspiration_illimitee",
    color: "text-pink-500",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "contact@inspirationillimitee.com",
    href: "mailto:contact@inspirationillimitee.com",
    color: "text-primary",
  },
];

export default function ContactPage() {
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
      <section className="py-20 px-4 text-center bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-2xl mx-auto">
          <Mail className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            Contactez-nous
          </h1>
          <p className="text-xl text-muted-foreground">
            Une question, une collaboration, un partenariat ? Nous sommes à votre écoute.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact form */}
          <div>
            <h2 className="text-2xl font-bold font-serif mb-6">Envoyez-nous un message</h2>
            <ContactForm />
          </div>

          {/* Social links */}
          <div>
            <h2 className="text-2xl font-bold font-serif mb-6">Retrouvez-nous</h2>
            <div className="space-y-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/40 bg-background hover:bg-muted/30 transition-colors group"
                >
                  <s.icon className={`w-6 h-6 ${s.color} shrink-0`} />
                  <div>
                    <div className="font-medium text-sm">{s.label}</div>
                    <div className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                      {s.handle}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-xl bg-muted/40 border border-border">
              <h3 className="font-semibold mb-2">Partenariats & collaborations</h3>
              <p className="text-sm text-muted-foreground">
                Pour toute demande de partenariat, collaboration éditoriale ou
                sponsoring, écrivez-nous à{" "}
                <a
                  href="mailto:contact@inspirationillimitee.com"
                  className="text-primary hover:underline"
                >
                  contact@inspirationillimitee.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 dark:bg-muted/10 py-12 px-4 border-t border-border mt-8">
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
