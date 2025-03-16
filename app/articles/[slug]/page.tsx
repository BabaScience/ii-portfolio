import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Sparkles, Calendar, Clock, BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ArticleClientContent from "./article-client";

// Define the Article type
interface Article {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  content: string;
}

// Mock data for articles (same as in the articles/page.tsx)
const articlesData = [
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
    image: "https://images.unsplash.com/photo-1599739291060-4578e77dac5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
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
      
      <h3>Face aux Réseaux Sociaux et à la Technologie</h3>
      
      <p>Les réseaux sociaux nous encouragent souvent à rechercher la validation externe et à nous comparer constamment aux autres. La perspective stoïcienne, qui place la vertu au-dessus de la réputation, nous offre un contrepoids salutaire à cette tendance. Elle nous invite à évaluer nos actions selon nos propres valeurs plutôt que selon l'opinion des autres.</p>
      
      <h2>Pratiques Stoïciennes pour la Vie Quotidienne</h2>
      
      <p>Voici quelques pratiques stoïciennes qui peuvent être intégrées dans notre quotidien :</p>
      
      <ul>
        <li><strong>La préméditation des adversités</strong> : Imaginer à l'avance les difficultés possibles pour s'y préparer mentalement.</li>
        <li><strong>L'examen de conscience</strong> : Réfléchir chaque soir à nos actions de la journée, en évaluant ce que nous avons bien fait et ce que nous pourrions améliorer.</li>
        <li><strong>La perspective cosmique</strong> : Considérer nos préoccupations à l'échelle de l'univers pour relativiser leur importance.</li>
        <li><strong>La gratitude délibérée</strong> : Cultiver la conscience des aspects positifs de notre existence que nous tenons souvent pour acquis.</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>Le stoïcisme n'est pas une philosophie de résignation passive, comme on le croit parfois, mais une approche active et engagée de la vie. Elle nous invite à cultiver notre caractère, à agir avec vertu dans toutes les circonstances, et à trouver la liberté intérieure même face aux contraintes externes.</p>
      
      <p>Dans notre monde moderne caractérisé par la distraction, l'incertitude et la recherche constante de validation externe, les enseignements stoïciens offrent un cadre précieux pour cultiver la résilience, l'intégrité et la paix intérieure. Peut-être que ces anciens principes sont exactement ce dont nous avons besoin pour naviguer les défis de la vie contemporaine avec sagesse et sérénité.</p>
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
        <li><strong>Amélioration de la mémoire et de l'apprentissage</strong> : Des études ont montré que la méditation régulière peut améliorer ces fonctions cognitives essentielles.</li>
      </ul>
      
      <h2>La Méditation et la Connaissance de Soi</h2>
      
      <p>Au-delà de ces bienfaits cognitifs, la méditation offre un chemin vers une compréhension plus profonde de soi-même. En observant avec attention le flux de nos pensées, de nos émotions et de nos sensations, nous commençons à discerner des schémas et des tendances dans notre fonctionnement mental que nous n'aurions pas remarqués autrement.</p>
      
      <p>Cette auto-observation n'est pas narcissique ; elle est la base d'une véritable transformation intérieure. Comme l'a souligné le philosophe Socrate, "Une vie sans examen ne vaut pas la peine d'être vécue."</p>
      
      <h2>Intégrer la Méditation dans la Vie Quotidienne</h2>
      
      <p>La méditation n'a pas besoin d'être compliquée ou chronophage. Voici quelques approches simples pour commencer :</p>
      
      <ul>
        <li><strong>Méditation de la respiration</strong> : Portez simplement votre attention sur le mouvement naturel de votre respiration pendant 5-10 minutes chaque jour.</li>
        <li><strong>Marche méditative</strong> : Pratiquez la pleine conscience pendant que vous marchez, en portant une attention délibérée à chaque pas et aux sensations corporelles.</li>
        <li><strong>Pauses conscientes</strong> : Intégrez de courtes pauses dans votre journée pour revenir à votre respiration et à l'instant présent.</li>
        <li><strong>Contemplation réflexive</strong> : Prenez du temps pour contempler une question ou un sujet important avec une attention calme et soutenue.</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>Dans un monde caractérisé par la distraction constante et la surinformation, la capacité à maintenir une attention claire et à penser profondément devient de plus en plus précieuse. La méditation nous offre un moyen éprouvé de cultiver cette capacité.</p>
      
      <p>Mais les bienfaits de la méditation vont bien au-delà de l'amélioration cognitive. En nous permettant de nous relier plus profondément à notre expérience intérieure, elle ouvre la voie à une compréhension plus riche de nous-mêmes et du monde qui nous entoure. Dans ce sens, la méditation n'est pas simplement une technique de bien-être, mais un chemin vers une vie plus consciente, plus équilibrée et plus significative.</p>
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
      
      <h2>Les Questions comme Outil de Transformation Personnelle</h2>
      
      <p>Les questions que nous nous posons régulièrement façonnent profondément notre expérience et notre développement :</p>
      
      <ul>
        <li>"Qu'est-ce qui est important pour moi ?" nous aide à clarifier nos valeurs.</li>
        <li>"Qu'est-ce que j'ai appris aujourd'hui ?" cultive une mentalité de croissance.</li>
        <li>"Comment puis-je contribuer ?" nous oriente vers le service et la création de valeur.</li>
        <li>"Quelle est la meilleure interprétation possible de cette situation ?" nous aide à adopter une perspective plus constructive face aux difficultés.</li>
      </ul>
      
      <p>En changeant consciemment les questions que nous nous posons habituellement, nous pouvons transformer notre expérience subjective et notre développement personnel.</p>
      
      <h2>Les Questions dans la Science et l'Innovation</h2>
      
      <p>L'histoire de la science et de l'innovation est essentiellement une histoire de questions transformatrices. Einstein n'a pas commencé par des réponses, mais par des questions profondes sur la nature du temps et de l'espace. Les grandes découvertes commencent généralement par des questions qui remettent en cause les paradigmes existants.</p>
      
      <p>Comme l'a souligné le physicien John Wheeler : "Nous vivons sur une île entourée par un océan d'ignorance. Au fur et à mesure que notre île de connaissance grandit, les rivages de notre ignorance s'allongent."</p>
      
      <h2>Cultiver une Vie Riche en Questions</h2>
      
      <p>Comment pouvons-nous intégrer le pouvoir des questions dans notre vie quotidienne ?</p>
      
      <ul>
        <li><strong>Pratiquer la curiosité délibérée</strong> : Cultiver activement l'intérêt pour ce qui nous entoure.</li>
        <li><strong>Tenir un journal de questions</strong> : Noter les questions qui nous intriguent ou nous inspirent.</li>
        <li><strong>Créer des espaces de questionnement</strong> : Réserver du temps pour la réflexion profonde et l'exploration de questions importantes.</li>
        <li><strong>Engager des conversations basées sur des questions</strong> : Approfondir nos échanges en posant des questions significatives.</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>Dans un monde qui valorise souvent les réponses rapides et les certitudes, cultiver l'art du questionnement peut sembler contre-intuitif. Pourtant, c'est précisément notre capacité à poser des questions profondes et à rester ouverts à l'exploration qui nous permet d'approfondir notre compréhension et d'enrichir notre expérience humaine.</p>
      
      <p>Comme l'a écrit le poète Rainer Maria Rilke : "Soyez patient envers tout ce qui n'est pas résolu dans votre cœur... Aimez les questions elles-mêmes comme des chambres fermées et comme des livres écrits dans une langue étrangère. Ne cherchez pas maintenant des réponses qui ne peuvent pas vous être données parce que vous ne seriez pas capable de les vivre. Et le point est de vivre tout. Vivez les questions maintenant. Peut-être alors, progressivement, sans même le remarquer, vous vivrez un jour lointain dans la réponse."</p>
    `
  }
] as Article[];

// This function is required for static site generation with 'output: export'
// It tells Next.js which routes to pre-generate at build time
export function generateStaticParams() {
  return articlesData.map((article) => ({
    slug: article.id,
  }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  // Find the article based on the slug
  const article = articlesData.find(a => a.id === params.slug);
  
  // Find related articles (excluding the current one)
  const relatedArticles = article 
    ? articlesData.filter(a => a.id !== params.slug).slice(0, 2)
    : [];
  
  if (!article) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <p>Article non trouvé...</p>
      </main>
    );
  }

  // Generate a clean excerpt for meta description by removing HTML tags
  const cleanExcerpt = article.excerpt.replace(/<[^>]*>?/gm, '');
  
  return (
    <main className="min-h-screen bg-background">
      {/* Header Image */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          aria-hidden="true"
        >
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="100vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              filter: 'brightness(0.5)'
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-[1]" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Link href="/articles">
            <Button variant="ghost" className="absolute top-8 left-8 text-white hover:bg-white/10" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux articles
            </Button>
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {article.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-gray-300">
            <time 
              className="flex items-center" 
              dateTime={article.date.replace(/(\d+) (\w+) (\d+)/, "$3-$2-$1")}
            >
              <Calendar className="w-4 h-4 mr-2" />
              <span>{article.date}</span>
            </time>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{article.readTime} de lecture</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Author Box */}
          <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-border mb-8 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Inspiration Illimitée</h3>
              <p className="text-sm text-muted-foreground">
                Explorer les profondeurs de la conscience et de la sagesse humaine.
              </p>
            </div>
          </div>
          
          {/* Use the client component for rendering the article content and JSON-LD */}
          <ArticleClientContent 
            title={article.title}
            content={article.content}
            excerpt={cleanExcerpt}
            image={article.image}
            date={article.date}
            slug={article.id}
          />
          
          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Articles Similaires</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <Link href={`/articles/${relatedArticle.id}`} key={relatedArticle.id}>
                    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                      <div className="aspect-video relative bg-gray-100">
                        <Image
                          src={relatedArticle.image}
                          alt={relatedArticle.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="group-hover:scale-105 transition-transform duration-300"
                          style={{
                            objectFit: 'cover',
                            objectPosition: 'center'
                          }}
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                          {relatedArticle.title}
                        </h3>
                        <div className="mt-2 flex items-center text-xs text-primary font-medium">
                          <BookOpen className="w-3 h-3 mr-1" />
                          Lire l'article
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
          
          {/* Back to Articles Link */}
          <div className="text-center mt-12">
            <Link href="/articles">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Voir tous les articles
              </Button>
            </Link>
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