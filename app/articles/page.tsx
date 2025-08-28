"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Sparkles, BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Define the Article type for consistency
interface Article {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  content: string; // Adding content property
}

// Mock data for articles with full content
const articles: Article[] = [
  {
    id: "comment-cesser-de-trop-penser",
    title: "Comment cesser de trop penser : 5 leçons stoïciennes pour retrouver la paix intérieure",
    excerpt: "Découvrez comment les principes stoïciens peuvent vous aider à calmer l'esprit et rétablir le silence intérieure face aux ruminations incessantes.",
    image: "/thumnails/trop-penser.png",
    date: "20 Mars 2025",
    readTime: "8 min",
    content: `
      <p>Trop penser est un mal qui touche de nombreuses personnes au quotidien : remords du passé, inquiétudes pour l'avenir, ruminations sans fin. Mais il existe des méthodes puissantes, issues de la philosophie stoïcienne, pour calmer l'esprit et rétablir le silence intérieur. Voici cinq grandes leçons tirées de notre vidéo : <strong>« Comment Cesser de Trop Penser (Grâce au Stoïcisme) »</strong>. Découvrez comment apaiser vos pensées et retrouver la maîtrise de soi.</p>
      
      <h2>1. Identifier les pensées parasites</h2>
      
      <p>Commencez par observer vos propres pensées. Les pensées qui jugent, anticipent ou se répètent créent souvent agitation et souffrance. Les stoïciens disent :</p>
      
      <blockquote>"Ce n'est pas ce qui arrive qui trouble l'homme, mais l'opinion qu'il s'en fait."</blockquote>
      
      <p>La première étape du retour au calme est donc la lucidité. Mettez vos pensées par écrit. Notez sans filtre tout ce qui vous traverse l'esprit. Cette pratique simple permet de reconnaître les schémas récurrents et crée de la distance entre vous et ce flot incessant. Plus vous apprenez à distinguer les faits des interprétations, moins vous êtes prisonnier de votre mental.</p>
      
      <h2>2. Se rappeler ce qui dépend de vous</h2>
      
      <p>L'une des idées clés du stoïcisme est la dichotomie du contrôle : distinguer ce qui dépend de vous et ce qui ne dépend pas. Vos paroles, vos attitudes, vos réactions émotionnelles – voilà ce qui est sous votre contrôle. En revanche, les actions des autres, la météo ou le passé vous échappent.</p>
      
      <p>Votre paix commence là où s'arrête votre besoin de contrôler ce qui ne vous appartient pas, et s'amplifie quand vous focalisez votre énergie sur ce qui dépend véritablement de vous. Ce changement de perspective réduit instantanément le niveau d'anxiété, tout en redonnant la sensation de pouvoir personnel.</p>
      
      <h2>3. Ralentir le rythme intérieur : la vertu du silence stoïcien</h2>
      
      <p>Dans un monde bruyant où tout va vite, les stoïciens cultivaient l'art du calme intérieur. Il ne s'agit pas de fuir la réalité, mais de choisir de s'arrêter, de respirer et d'observer ce qui se passe en soi, même au milieu du tumulte. Accordez-vous chaque jour un espace de silence, sans distractions. Cette pratique ralentit le système nerveux, réduit l'agitation mentale et prépare l'esprit à la clarté.</p>
      
      <h2>4. Le pouvoir du présent : la triple conscience</h2>
      
      <p>Le stoïcisme enseigne que la sagesse commence dans le moment présent. Pour couper le flux des pensées automatiques, exercez la triple conscience :</p>
      
      <ul>
        <li>Nommez trois choses que vous voyez autour de vous</li>
        <li>Trois sons que vous entendez</li>
        <li>Trois sensations que vous ressentez dans le corps</li>
      </ul>
      
      <p>Cet ancrage ramène à l'instant, brise la tempête de pensées et vous reconnecte à votre pouvoir d'acteur conscient.</p>
      
      <h2>5. L'action comme remède à l'inaction mentale</h2>
      
      <p>Pensées en boucle et paralysie mentale sont étroitement liées. Les stoïciens affirment que le meilleur remède au surmenage mental, c'est l'action, même minime : appeler quelqu'un, ranger une pièce, écrire une ligne dans un carnet… L'important est de rompre le cercle des ruminations par un geste concret.</p>
      
      <blockquote>"Nous souffrons plus dans notre imagination que dans la réalité." – Sénèque</blockquote>
      
      <p>Agir ramène à la réalité du présent, dissipe les brouillards mentaux et redonne la sensation de maîtrise.</p>
      
      <h2>Pour aller plus loin</h2>
      
      <p>Cet article est inspiré de notre vidéo :</p>
      <p>👉 <strong><a href="https://www.youtube.com/watch?v=eobstFIMl_4" target="_blank" rel="noopener noreferrer">Comment Cesser de Trop Penser (Grâce au Stoïcisme)</a></strong></p>
      
      <p>Pour découvrir toutes les techniques expliquées en détail, retrouvez la vidéo complète sur notre chaîne YouTube. N'hésitez pas à vous abonner, à liker et à partager si le sujet vous a aidé !</p>
      
      <p>Avez-vous testé l'une de ces pratiques ? Partagez votre expérience en commentaire et ensemble, cultivons un esprit serein et puissant.</p>
    `
  },
  {
    id: "la-nature-de-la-conscience",
    title: "La Nature de la Conscience",
    excerpt: "Une exploration profonde de ce qui constitue notre conscience et notre perception de la réalité.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    date: "15 Mars 2025",
    readTime: "7 min",
    content: `
      <p>Qu'est-ce que la conscience ? Cette question a intrigué les philosophes, les scientifiques et les penseurs depuis des millénaires. La conscience peut être définie comme notre expérience subjective du monde, notre perception intime de la réalité.</p>
      
      <p>La conscience n'est pas simplement la capacité de percevoir notre environnement ; c'est également notre capacité à réfléchir, à contempler, à ressentir et à comprendre. C'est ce qui fait de nous des êtres pleinement humains.</p>
      
      <h2>Les Différentes Perspectives sur la Conscience</h2>
      
      <p>Il existe de nombreuses perspectives sur la nature de la conscience :</p>
      
      <ul>
        <li><strong>La perspective matérialiste</strong> : La conscience est simplement le résultat de processus neurobiologiques dans le cerveau.</li>
        <li><strong>La perspective dualiste</strong> : La conscience est distincte du corps physique et représente une substance ou une réalité différente.</li>
        <li><strong>La perspective panpsychiste</strong> : La conscience est une propriété fondamentale de la réalité, présente à différents degrés dans toute matière.</li>
      </ul>
      
      <p>Chacune de ces perspectives offre des insights intéressants sur la nature de notre expérience subjective, mais aucune n'a encore fourni une explication complète et définitive.</p>
      
      <h2>La Conscience et l'Univers</h2>
      
      <p>Certains philosophes et scientifiques suggèrent que la conscience pourrait jouer un rôle fondamental dans la structure même de l'univers. Selon cette perspective, la conscience n'est pas simplement un épiphénomène résultant de l'évolution biologique, mais une caractéristique intrinsèque de la réalité.</p>
      
      <p>Cette idée rejoint certaines interprétations de la mécanique quantique, qui suggèrent que l'observation consciente peut influencer le comportement des particules subatomiques. Si cette perspective est correcte, alors notre compréhension actuelle de l'univers pourrait être fondamentalement incomplète sans une théorie adéquate de la conscience.</p>
      
      <h2>La Conscience et l'Identité Personnelle</h2>
      
      <p>Notre conscience est intimement liée à notre sentiment d'identité personnelle. C'est à travers notre expérience consciente que nous nous percevons comme des individus uniques, avec une histoire personnelle, des désirs, des croyances et des valeurs.</p>
      
      <p>Cependant, cette identité n'est pas statique. Notre conscience évolue constamment, influencée par nos expériences, nos apprentissages et nos interactions avec le monde extérieur. En ce sens, notre conscience est à la fois le fondement de notre identité et le moyen par lequel cette identité se transforme continuellement.</p>
      
      <h2>Conclusion</h2>
      
      <p>La nature de la conscience reste l'un des plus grands mystères de l'existence humaine. Alors que nous continuons à explorer les profondeurs de notre esprit et les mystères de l'univers, nous nous rapprochons peut-être d'une compréhension plus complète de ce phénomène extraordinaire.</p>
      
      <p>En fin de compte, la conscience est ce qui nous permet de nous émerveiller devant les mystères de l'existence, de contempler les questions profondes de la vie, et de rechercher une compréhension plus riche de nous-mêmes et de notre place dans l'univers.</p>
    `
  },
  {
    id: "le-temps-et-lexistence",
    title: "Le Temps et l'Existence",
    excerpt: "Réflexions sur la nature du temps et son impact sur notre compréhension de l'existence.",
    image: "https://images.unsplash.com/photo-1502790671504-542ad42d5189?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    date: "10 Mars 2025",
    readTime: "5 min",
    content: `
      <p>Le temps est l'une des dimensions les plus fondamentales de notre expérience, et pourtant, c'est aussi l'une des plus mystérieuses. Qu'est-ce que le temps exactement ? Est-ce une propriété fondamentale de l'univers, ou simplement une construction de notre esprit ?</p>
      
      <h2>Les Différentes Conceptions du Temps</h2>
      
      <p>Au cours de l'histoire, de nombreuses conceptions du temps ont émergé :</p>
      
      <ul>
        <li><strong>Le temps cyclique</strong> : Dans de nombreuses cultures anciennes, le temps était perçu comme cyclique, avec des motifs qui se répètent éternellement.</li>
        <li><strong>Le temps linéaire</strong> : La conception moderne dominante voit le temps comme une progression linéaire du passé vers le futur.</li>
        <li><strong>Le temps comme illusion</strong> : Certaines traditions philosophiques, notamment dans la pensée orientale, considèrent le temps comme une illusion de la perception humaine.</li>
      </ul>
      
      <p>La physique moderne a ajouté d'autres dimensions à notre compréhension du temps. La théorie de la relativité d'Einstein a montré que le temps n'est pas absolu, mais relatif à l'observateur et influencé par la gravité.</p>
      
      <h2>Le Temps et la Conscience Humaine</h2>
      
      <p>Notre expérience subjective du temps est intimement liée à notre conscience. Nous percevons le temps de manière non linéaire : certains moments semblent s'étirer indéfiniment, tandis que d'autres passent en un clin d'œil.</p>
      
      <p>Cette perception subjective du temps influence profondément notre expérience de l'existence. Elle façonne notre mémoire, notre anticipation de l'avenir, et notre sentiment de présence dans l'instant.</p>
      
      <h2>Le Temps et le Sens de l'Existence</h2>
      
      <p>La conscience de la temporalité est fondamentale pour notre compréhension de l'existence humaine. C'est parce que nous sommes conscients du passage du temps et de notre propre finitude que les questions de sens et de but deviennent si importantes.</p>
      
      <p>Comme l'a souligné le philosophe Martin Heidegger, c'est notre être-vers-la-mort qui nous pousse à vivre de manière authentique et à chercher un sens à notre existence temporelle.</p>
      
      <h2>Conclusion</h2>
      
      <p>Le temps reste l'un des aspects les plus énigmatiques de notre existence. En continuant à explorer sa nature, nous approfondissons non seulement notre compréhension de l'univers, mais aussi notre compréhension de nous-mêmes en tant qu'êtres temporels.</p>
      
      <p>Peut-être que la véritable sagesse consiste non pas à résoudre le mystère du temps, mais à apprendre à vivre pleinement dans sa dimension, conscients à la fois de sa fluidité et de sa préciosité.</p>
    `
  },
  {
    id: "lart-de-la-pensee",
    title: "L'Art de la Pensée",
    excerpt: "Comment développer une pensée plus profonde et plus significative dans un monde en constante évolution.",
    image: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    date: "5 Mars 2025",
    readTime: "8 min",
    content: `
      <p>Dans un monde caractérisé par la surcharge d'informations et la distraction constante, l'art de la pensée profonde devient de plus en plus précieux. Mais qu'est-ce que signifie vraiment "penser" ? Et comment pouvons-nous cultiver une pensée plus riche et plus significative ?</p>
      
      <h2>Les Différentes Dimensions de la Pensée</h2>
      
      <p>La pensée humaine est multidimensionnelle :</p>
      
      <ul>
        <li><strong>La pensée analytique</strong> : La capacité à décomposer des problèmes complexes en éléments simples et à les examiner méthodiquement.</li>
        <li><strong>La pensée créative</strong> : La capacité à générer de nouvelles idées, à voir des connexions inattendues et à imaginer des possibilités alternatives.</li>
        <li><strong>La pensée critique</strong> : La capacité à évaluer des arguments, à détecter des biais et à porter des jugements rationnels.</li>
        <li><strong>La pensée intuitive</strong> : La capacité à saisir des vérités sans raisonnement conscient, souvent basée sur l'expérience accumulée.</li>
      </ul>
      
      <p>Une pensée riche et profonde implique généralement l'interaction de ces différentes dimensions.</p>
      
      <h2>Les Obstacles à la Pensée Profonde</h2>
      
      <p>De nombreux facteurs dans notre société moderne font obstacle à la pensée profonde :</p>
      
      <ul>
        <li>La surcharge d'informations et la distraction constante</li>
        <li>La valorisation de la vitesse au détriment de la profondeur</li>
        <li>La pression sociale pour la conformité intellectuelle</li>
        <li>La peur de l'incertitude et de la complexité</li>
      </ul>
      
      <p>Surmonter ces obstacles nécessite une intention consciente et des pratiques délibérées.</p>
      
      <h2>Cultiver l'Art de la Pensée</h2>
      
      <p>Voici quelques pratiques qui peuvent nous aider à développer une pensée plus profonde :</p>
      
      <ul>
        <li><strong>La lecture lente et réflexive</strong> : Prendre le temps d'absorber pleinement les idées et de dialoguer intérieurement avec elles.</li>
        <li><strong>L'écriture exploratoire</strong> : Utiliser l'écriture non pas simplement pour communiquer des idées déjà formées, mais pour découvrir ce que nous pensons.</li>
        <li><strong>La contemplation solitaire</strong> : Créer des espaces de silence et de solitude où les pensées peuvent émerger et se développer librement.</li>
        <li><strong>Le dialogue socratique</strong> : Engager des conversations profondes où les idées sont explorées collaborativement, questionnées et affinées.</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>L'art de la pensée n'est pas simplement un exercice intellectuel ; c'est une dimension essentielle d'une vie humaine riche et significative. En cultivant notre capacité à penser profondément, nous enrichissons non seulement notre compréhension du monde, mais aussi notre expérience subjective de l'existence.</p>
      
      <p>Dans un monde qui valorise souvent la rapidité et la superficialité, la cultivation délibérée d'une pensée profonde devient un acte à la fois de résistance culturelle et d'épanouissement personnel.</p>
    `
  },
  {
    id: "la-philosophie-stoicienne",
    title: "La Philosophie Stoïcienne et la Vie Moderne",
    excerpt: "Comment les principes stoïciens peuvent nous aider à naviguer les défis de la vie contemporaine.",
    image: "/thumnails/trop-penser.png",
    date: "1 Mars 2025",
    readTime: "10 min",
    content: `
      <p>Le stoïcisme, philosophie développée dans la Grèce antique et perfectionnée à Rome, connaît aujourd'hui un regain d'intérêt remarquable. Dans un monde moderne caractérisé par l'incertitude, la complexité et le stress constant, les enseignements stoïciens offrent des outils précieux pour cultiver la résilience et la sérénité intérieure.</p>
      
      <h2>Les Principes Fondamentaux du Stoïcisme</h2>
      
      <p>Le stoïcisme repose sur plusieurs principes clés :</p>
      
      <ul>
        <li><strong>La distinction entre ce qui dépend de nous et ce qui ne dépend pas de nous</strong> : Les stoïciens nous enseignent à concentrer notre énergie sur ce que nous pouvons contrôler (nos jugements, nos actions, nos valeurs) et à accepter avec équanimité ce qui échappe à notre contrôle.</li>
        <li><strong>Les passions comme jugements erronés</strong> : Pour les stoïciens, les émotions négatives comme la colère ou l'anxiété ne sont pas des forces externes qui nous submergent, mais des jugements que nous portons sur les événements.</li>
        <li><strong>La vertu comme seul véritable bien</strong> : La sagesse, le courage, la justice et la tempérance sont les seules choses intrinsèquement bonnes ; tout le reste (richesse, santé, réputation) sont des "indifférents préférables".</li>
      </ul>
      
      <h2>Le Stoïcisme dans la Vie Moderne</h2>
      
      <p>Comment ces principes anciens peuvent-ils être appliqués à la vie contemporaine ?</p>
      
      <h3>Face à l'Anxiété et l'Incertitude</h3>
      
      <p>Dans un monde d'information constante et de changement rapide, l'anxiété est omniprésente. La distinction stoïcienne entre ce qui dépend de nous et ce qui ne dépend pas de nous nous offre un antidote puissant. En reconnaissant que nous ne pouvons pas contrôler les événements externes mais uniquement notre réponse à ces événements, nous pouvons trouver une forme de liberté intérieure.</p>
      
      <h3>Dans nos Relations Professionnelles</h3>
      
      <p>Le lieu de travail moderne est souvent caractérisé par la compétition, les conflits et la pression constante. Les enseignements stoïciens sur la vertu nous rappellent l'importance d'agir avec intégrité, quelles que soient les circonstances externes. De plus, la capacité stoïcienne à accepter les revers avec équanimité peut être un atout précieux dans un environnement professionnel imprévisible.</p>
      
      <h2>Conclusion</h2>
      
      <p>Le stoïcisme n'est pas une philosophie de résignation passive, comme on le croit parfois, mais une approche active et engagée de la vie. Elle nous invite à cultiver notre caractère, à agir avec vertu dans toutes les circonstances, et à trouver la liberté intérieure même face aux contraintes externes.</p>
    `
  },
  {
    id: "limportance-de-la-meditation",
    title: "L'Importance de la Méditation",
    excerpt: "Les bienfaits de la méditation sur notre bien-être mental et notre capacité à penser clairement.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    date: "25 Février 2025",
    readTime: "6 min",
    content: `
      <p>La méditation, pratique millénaire originaire des traditions orientales, a gagné une reconnaissance croissante dans le monde occidental au cours des dernières décennies. Loin d'être simplement une mode passagère, la méditation s'est révélée être un outil puissant pour cultiver la clarté mentale, la paix intérieure et une compréhension plus profonde de soi-même.</p>
      
      <h2>Qu'est-ce que la Méditation ?</h2>
      
      <p>La méditation englobe un large éventail de pratiques, mais toutes partagent un objectif commun : cultiver l'attention consciente et la présence mentale. Contrairement à une idée répandue, méditer ne consiste pas à vider l'esprit de toutes pensées, mais plutôt à développer une relation différente avec nos pensées et nos expériences.</p>
      
      <p>Dans sa forme la plus simple, la méditation peut consister à porter une attention soutenue à la respiration, à observer le flux des sensations corporelles, ou à contempler un objet ou une question avec une attention concentrée.</p>
      
      <h2>Les Bienfaits de la Méditation sur la Clarté Mentale</h2>
      
      <p>De nombreuses recherches scientifiques ont mis en évidence les effets bénéfiques de la méditation sur notre fonctionnement cognitif :</p>
      
      <ul>
        <li><strong>Amélioration de l'attention</strong> : La méditation renforce notre capacité à maintenir une attention soutenue et à résister aux distractions.</li>
        <li><strong>Réduction du bavardage mental</strong> : Elle nous aide à prendre conscience de nos pensées incessantes et à créer un espace intérieur plus paisible.</li>
        <li><strong>Meilleure régulation émotionnelle</strong> : La méditation nous permet de reconnaître nos émotions sans être submergés par elles, favorisant ainsi un jugement plus clair.</li>
      </ul>
      
      <h2>Intégrer la Méditation dans la Vie Quotidienne</h2>
      
      <p>La méditation n'a pas besoin d'être compliquée ou chronophage. Voici quelques approches simples pour commencer :</p>
      
      <ul>
        <li><strong>Méditation de la respiration</strong> : Portez simplement votre attention sur le mouvement naturel de votre respiration pendant 5-10 minutes chaque jour.</li>
        <li><strong>Marche méditative</strong> : Pratiquez la pleine conscience pendant que vous marchez, en portant une attention délibérée à chaque pas et aux sensations corporelles.</li>
        <li><strong>Pauses conscientes</strong> : Intégrez de courtes pauses dans votre journée pour revenir à votre respiration et à l'instant présent.</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>Dans un monde caractérisé par la distraction constante et la surinformation, la capacité à maintenir une attention claire et à penser profondément devient de plus en plus précieuse. La méditation nous offre un moyen éprouvé de cultiver cette capacité.</p>
    `
  },
  {
    id: "le-pouvoir-des-questions",
    title: "Le Pouvoir des Questions",
    excerpt: "Comment les bonnes questions peuvent transformer notre perception et notre compréhension du monde.",
    image: "https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    date: "20 Février 2025",
    readTime: "9 min",
    content: `
      <p>Les questions sont peut-être les outils les plus puissants dont nous disposons pour explorer et comprendre le monde. Elles ouvrent de nouvelles perspectives, remettent en question nos présupposés et nous guident vers une compréhension plus profonde de nous-mêmes et de la réalité qui nous entoure.</p>
      
      <h2>L'Art de Poser des Questions</h2>
      
      <p>Poser des questions est un art qui peut être cultivé et affiné. Toutes les questions ne se valent pas :</p>
      
      <ul>
        <li><strong>Les questions fermées</strong> (qui appellent une réponse par oui ou par non) ont leur utilité pour clarifier des faits spécifiques, mais elles limitent l'exploration.</li>
        <li><strong>Les questions ouvertes</strong> ("Comment", "Pourquoi", "Qu'est-ce que") invitent à une réflexion plus approfondie et à des réponses plus nuancées.</li>
        <li><strong>Les questions puissantes</strong> sont celles qui nous font voir quelque chose sous un angle entièrement nouveau, qui remettent en question nos suppositions les plus fondamentales.</li>
      </ul>
      
      <h2>Les Questions Socratiques</h2>
      
      <p>Socrate, le philosophe grec, est célèbre pour sa méthode basée sur le questionnement. Il ne prétendait pas détenir la vérité, mais aidait les autres à découvrir leurs propres inconsistances et à approfondir leur compréhension par des questions ciblées.</p>
      
      <p>Cette méthode reste tout aussi pertinente aujourd'hui. Les questions socratiques nous invitent à :</p>
      
      <ul>
        <li>Clarifier nos concepts et définitions</li>
        <li>Examiner nos présupposés sous-jacents</li>
        <li>Explorer les implications de nos croyances</li>
        <li>Considérer des perspectives alternatives</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>Dans un monde qui valorise souvent les réponses rapides et les certitudes, cultiver l'art du questionnement peut sembler contre-intuitif. Pourtant, c'est précisément notre capacité à poser des questions profondes et à rester ouverts à l'exploration qui nous permet d'approfondir notre compréhension et d'enrichir notre expérience humaine.</p>
    `
  }
];

// Required for static site generation with 'output: export'
export const dynamic = 'force-static';

export default function Articles() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative py-20 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <h1 className="text-4xl font-bold">Articles</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Explorez nos réflexions philosophiques et insights sur la conscience, l'existence, et la sagesse.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link href={`/articles/${article.id}`} key={article.id}>
                <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="aspect-video relative bg-gray-100">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="group-hover:scale-105 transition-transform duration-300"
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center'
                      }}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                      <time dateTime={article.date.replace(/(\d+) (\w+) (\d+)/, "$3-$2-$1")}>
                        {article.date}
                      </time>
                      <span>{article.readTime} de lecture</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground flex-grow">{article.excerpt}</p>
                    <div className="mt-4 pt-4 border-t flex items-center text-sm font-medium text-primary">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Lire l'article
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-12 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Link href="/">
              <div className="flex items-center">
                <Sparkles className="w-8 h-8 text-primary mr-2" />
                <span className="text-xl font-bold">Inspiration Illimitée</span>
              </div>
            </Link>
          </div>
          <div className="text-muted-foreground">
            Nourrissez votre esprit, illuminez votre âme
          </div>
        </div>
      </footer>
    </main>
  );
} 