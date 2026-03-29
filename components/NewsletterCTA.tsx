"use client";

import { useState } from "react";
import { Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface NewsletterCTAProps {
  variant?: "inline" | "sticky";
}

export default function NewsletterCTA({ variant = "inline" }: NewsletterCTAProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: wire up to newsletter provider (Brevo, Resend, etc.)
    await new Promise((r) => setTimeout(r, 600));
    toast.success("Merci ! Vérifiez votre boîte mail pour confirmer votre inscription.");
    setEmail("");
    setLoading(false);
  };

  if (variant === "sticky") {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-lg px-4 py-3 md:hidden">
        <form onSubmit={handleSubmit} className="flex gap-2 max-w-lg mx-auto">
          <Input
            type="email"
            placeholder="Votre email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 text-sm"
          />
          <Button type="submit" size="sm" disabled={loading}>
            <Mail className="h-4 w-4 mr-1" />
            S&apos;abonner
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div className="my-10 rounded-xl border border-primary/20 bg-primary/5 p-6 md:p-8">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles className="w-5 h-5 text-primary" />
        <span className="text-sm font-semibold text-primary uppercase tracking-wide">
          Newsletter
        </span>
      </div>
      <h3 className="text-xl md:text-2xl font-bold font-serif mb-2">
        Recevez la sagesse chaque semaine
      </h3>
      <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
        Des réflexions philosophiques, des enseignements stoïciens et des outils
        concrets pour votre transformation intérieure — directement dans votre boîte mail.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="votre@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1"
        />
        <Button type="submit" disabled={loading}>
          <Mail className="mr-2 h-4 w-4" />
          {loading ? "Inscription..." : "S'abonner gratuitement"}
        </Button>
      </form>
      <p className="text-xs text-muted-foreground mt-3">
        Pas de spam. Désabonnement en un clic. Vos données restent confidentielles.
      </p>
    </div>
  );
}
