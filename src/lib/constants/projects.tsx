import {
  EducationProjects,
  PersonalProjects,
  Projects,
} from "@/components/projects/type";
import { TECHS } from "@/lib/constants/techs";

export const PERSONAL_PROJECTS: PersonalProjects = [
  {
    name: "AdezouRP",
    title: "Serveur de roleplay sur FiveM",
    links: [{ href: "https://github.com/AvaN0x/AdezouRP", type: "github" }],
    // objective: {
    //   en: "Creation of a RolePlay server in GTA V thanks to open-source ressources from the community and [FiveM](https://fivem.net/).",
    //   fr: "Réaliser à partir de ressources open-source de la communauté, un serveur RolePlay dans l'univers de GTA V grâce à [FiveM](https://fivem.net/).",
    // },
    techs: [TECHS.LUA, TECHS.MYSQL, TECHS.JS, TECHS.HTML, TECHS.CSS],
  },
  {
    title: "Site personnel",
    links: [
      // { href: "https://github.com/AvaN0x/avan0x.github.io", type: "github" },
      { href: "https://github.com/AvaN0x/clementricatte.fr", type: "github" },
      { href: "https://clementricatte.fr/" },
    ],
    // objective: {
    //   en: "Creation of a personal website",
    //   fr: "Création d'un site personnel",
    // },
    techs: [TECHS.HTML, TECHS.CSS, TECHS.TS, TECHS.REACT],
  },
  {
    name: "YoutubeDownloader",
    title: "Outils de téléchargement de vidéos Youtube",
    links: [
      { href: "https://github.com/AvaN0x/YoutubeDownloader", type: "github" },
    ],
    // objective: {
    //   en: "Creation of a small app that allow you to download Youtube videos.",
    //   fr: "Réaliser une petite application permettant de télécharger des vidéos Youtube.",
    // },
    techs: [TECHS.CS, TECHS.WPF],
  },
  {
    name: "TextCapsModifier",
    title: "Outils de modifications de majuscule sur un texte",
    links: [
      { href: "https://github.com/AvaN0x/textCapsModifier", type: "github" },
    ],
    // objective: {
    //   en: "Creation of a small app that allow you to tweak caps from a text.",
    //   fr: "Réaliser une petite application permettant de contôler les majuscules d'un texte.",
    // },
    techs: [TECHS.CS, TECHS.WPF],
  },
  {
    name: "AvaBot",
    title: "Bot de commandes sur Discord",
    links: [
      { href: "https://github.com/AvaN0x/AvaBot", type: "github" },
      {
        href: "https://discord.com/api/oauth2/authorize?client_id=724252598437412915&permissions=8&scope=bot",
      },
    ],
    // objective: {
    //   en: "Make a bot using [Discord.net](https://github.com/discord-net/Discord.Net).",
    //   fr: "Réaliser un bot utilisant [Discord.net](https://github.com/discord-net/Discord.Net).",
    // },
    techs: [TECHS.CS],
  },
] as const;

export const EDUCATION_PROJECTS: EducationProjects = [
  {
    // aimedSkills: [
    //   {
    //     en: "Mastery of algorithms and programming concepts",
    //     fr: "Maîtrise des concepts de l'algorithmique et de la programmation",
    //   },
    // ],
    title: "Jeu de Nim",
    education: "DUT",
    links: [
      {
        href: "https://github.com/AvaN0x/IUT-ProjetNim",
        type: "github",
      },
    ],
    contributorsCount: 3,
    // objective: {
    //   en: "Use of knowledge of programming in a teamwork.",
    //   fr: "Mise en application des acquis dans le domaine de l'analyse et de la programmation dans un travail de groupe",
    // },
    techs: [TECHS.C],
  },
  {
    // aimedSkills: [
    //   {
    //     en: "Ability to synthesize written information and its oral presentation",
    //     fr: "Aptitudes à synthétiser l'information écrite et sa présentation orale",
    //   },
    //   {
    //     en: "Control of documentary research",
    //     fr: "Maitrise de la recherche documentaire",
    //   },
    //   {
    //     en: "Ability to synthesize acquired technical skills",
    //     fr: "Aptitudes à la synthèse des compétences techniques acquises",
    //   },
    // ],
    title: "Développement d'un site web statique",
    education: "DUT",

    links: [
      {
        href: "https://github.com/AvaN0x/IUT-ProjetWeb",
        type: "github",
      },
      { href: "https://avan0x.github.io/IUT-ProjetWeb" },
    ],
    contributorsCount: 4,
    // objective: {
    //   en: "Development of autonomy at work",
    //   fr: "Développement des compétences relationnelles et l'autonomie dans le travail",
    // },
    techs: [TECHS.HTML, TECHS.CSS],
  },
  {
    nonRelevant: true,
    // aimedSkills: [
    //   {
    //     en: "Using of the mothodology of project management",
    //     fr: "Mise en pratique de la méthodologie de conduite de projets",
    //   },
    //   {
    //     en: "Development of student autonomy and initiative skills",
    //     fr: "Développement des compétences d'autonomie et d'initiative de l'étudiant",
    //   },
    //   {
    //     en: "Development of teamwork skills",
    //     fr: "Développement des aptitudes au travail en équipe",
    //   },
    // ],
    title: "Développement d'un site web",
    education: "DUT",
    description:
      "Le but principal de ce projet était de mettre en place les méthodes de conduite de projet vues en cours.",
    links: [
      {
        href: "https://github.com/oxypomme/AnciensEtudiantsIUTMetz",
        type: "github",
      },
      { href: "https://oxypomme.github.io/AnciensEtudiantsIUTMetz" },
    ],
    contributorsCount: 5,
    // objective: {
    //   en: "Implementation of project management methods",
    //   fr: "Mise en œuvre des méthodes de conduite de projet",
    // },
    techs: [TECHS.HTML, TECHS.CSS],
  },
  {
    // aimedSkills: [
    //   {
    //     en: "Ability to do good research",
    //     fr: "Aptitudes à faire de bonnes recherches",
    //   },
    //   {
    //     en: "Understanding of how CPU works",
    //     fr: "Comprendre les fonctionnement d'un processeur",
    //   },
    // ],
    name: "SimpsonoVirus",
    title: "Réalisation d'un jeu vidéo pour Intel 8086",
    education: "DUT",
    links: [
      { href: "https://github.com/AvaN0x/IUT-asmGame", type: "github" },
      { href: "https://youtu.be/W9PVjym2soM", type: "youtube" },
    ],
    contributorsCount: 2,
    // objective: {
    //   en: "Production of a video game in assembly",
    //   fr: "Création d'un jeu vidéo en langage assembleur",
    // },
    techs: [TECHS.ASM],
  },
  {
    // aimedSkills: [
    //   {
    //     en: "Object oriented programming",
    //     fr: "Programmation orientée objets",
    //   },
    //   "UML",
    //   {
    //     en: "User Interface",
    //     fr: "Interface utilisateur",
    //   },
    // ],
    title: "Réalisation d'un logiciel de gestion d'une vidéothèque",
    education: "DUT",

    links: [
      {
        href: "https://github.com/AvaN0x/IUT-ProjetJava",
        type: "github",
      },
    ],
    contributorsCount: 2,
    // objective: {
    //   en: "Complete modeling of a problem with UML and its implementation in Java",
    //   fr: "Modélisation complète d'un problème avec UML et sa mise en œuvre en Java",
    // },
    techs: [TECHS.JAVA, TECHS.SWING],
  },
  {
    // aimedSkills: [
    //   {
    //     en: "Event-driven programming",
    //     fr: "Programmation évènementielle",
    //   },
    //   "Java Database Connectivity",
    //   "Design Pattern DAO",
    //   "MVC",
    //   {
    //     en: "Unit testing",
    //     fr: "tests unitaires",
    //   },
    // ],
    title: "Projet CPOA",
    education: "DUT",
    links: [
      {
        href: "https://github.com/AvaN0x/ricatte_sublet_cpoa",
        type: "github",
      },
    ],
    contributorsCount: 2,
    // objective: {
    //   en: "Develop software by following the precepts of agility and implementing a set of best practices",
    //   fr: "Développer un logiciel en suivant les préceptes de l'agilité et mettant en œuvre un ensemble de bonnes pratiques",
    // },
    techs: [TECHS.JAVA, TECHS.JAVAFX, TECHS.MYSQL],
  },
  {
    title: "Site de gestion d'actualités",
    education: "DUT",
    links: [
      {
        href: "https://github.com/oxypomme/IUT-InfoNews",
        type: "github",
      },
    ],
    contributorsCount: 2,
    // objective: {
    //   en: "Development of a newsletter system, where everyone can write an article by creating an account",
    //   fr: "Développement d'un système de newsletter, ou chacun peut écrire un article en créant un compte",
    // },
    techs: [TECHS.JS, TECHS.PHP, TECHS.HTML, TECHS.CSS],
  },
  {
    // features: [
    //   {
    //     en: "Exchange of text messages",
    //     fr: "Echange de messages textuels",
    //   },
    //   {
    //     en: "Exchange of voice messages",
    //     fr: "Echange de messages vocaux",
    //   },
    //   {
    //     en: "Exchange of photos taken from the device's camera",
    //     fr: "Echange de photos prises depuis la caméra de l'appareil",
    //   },
    //   {
    //     en: "Exchange of gifs",
    //     fr: "Echange de gifs",
    //   },
    // ],
    name: "Matchable",
    title: "Site de rencontre en ligne",
    education: "DUT",
    links: [
      {
        href: "https://github.com/oxypomme/IUT-PrjTutS3",
        type: "github",
      },
      { href: "https://matchable-80a41.web.app/" },
    ],
    contributorsCount: 4,
    // objective: {
    //   en: "Develop a web dating application",
    //   fr: "Développer une application web de rencontre",
    // },
    techs: [TECHS.TS, TECHS.HTML, TECHS.CSS, TECHS.REACT],
  },
  {
    // aimedSkills: [
    //   {
    //     en: "Manage several simultaneous connections from clients to a server",
    //     fr: "Gérer plusieurs connexions en simultané de clients vers un serveur",
    //   },
    // ],
    title: "Application console de gestion de places de concert",
    education: "DUT",
    links: [
      {
        href: "https://github.com/AvaN0x/IUT-ProjetSysteme",
        type: "github",
      },
    ],
    contributorsCount: 2,
    // objective: {
    //   en: "Create a client / server application to manage the seats of a concert",
    //   fr: "Réaliser une application client/serveur permettant de gérer les places d'un concert",
    // },
    techs: [TECHS.C],
  },
  {
    // aimedSkills: [
    //   {
    //     en: "Discover C++ language and QT",
    //     fr: "Découvrir le langage C++ et QT",
    //   },
    // ],
    title: "Application de génération de classes",
    description:
      "Réaliser une application permettant la génération de classes Java en C++.",
    education: "DUT",
    links: [
      {
        href: "https://github.com/AvaN0x/IUT-UMLDesigner",
        type: "github",
      },
    ],
    contributorsCount: 2,
    // objective: {
    //   en: "Create an application to create classes.",
    //   fr: "Réaliser une application de génération de classe.",
    // },
    techs: [TECHS.CPP, TECHS.QT],
  },
  {
    // aimedSkills: [
    //   {
    //     en: "Work on small games over network with Java RMI.",
    //     fr: "Travailler sur des mini jeux en réseau avec Java RMI.",
    //   },
    // ],
    title: "Serveur de jeu en Java",
    education: "DUT",

    links: [{ href: "https://github.com/AvaN0x/IUT-ProgRep", type: "github" }],
    contributorsCount: 3,
    // objective: {
    //   en: "Create a game server.",
    //   fr: "Réaliser un serveur de jeu.",
    // },
    techs: [TECHS.JAVA, TECHS.RMI],
  },

  {
    nonRelevant: true,
    title: "Site de recettes de cocktails",
    education: "Licence",
    links: [
      {
        href: "https://github.com/AvaN0x/MIM-ProjetWeb",
        type: "github",
      },
    ],
    contributorsCount: 3,
    // objective: {
    //   en: "Allow to see cocktail recipes and add them to your favorites.",
    //   fr: "Permettre de voir des recettes de cocktails et de les ajouter à ses favoris.",
    // },
    techs: [TECHS.JS, TECHS.PHP, TECHS.HTML, TECHS.CSS],
  },
  {
    // aimedSkills: [
    //   {
    //     en: "Manage several simultaneous connections from clients to a server",
    //     fr: "Gérer plusieurs connexions en simultané de clients vers un serveur",
    //   },
    //   {
    //     en: "Understand how BZIP2 works and each of its stages (BWT, M2F, RLE, Huffman)",
    //     fr: "Comprendre le fonctionnement du BZIP2 et chacune de ses étapes (BWT, M2F, RLE, Huffman)",
    //   },
    // ],
    title: "Serveur BZIP2",
    education: "Licence",
    links: [
      {
        href: "https://github.com/AvaN0x/MIM-bzip2-server",
        type: "github",
      },
    ],
    contributorsCount: 2,
    // objective: {
    //   en: "Create a client / server application to receive compressed files from a server and decompress them.",
    //   fr: "Réaliser une application client/serveur permettant de récupérer des fichiers compressés d'un serveur et de les décomprésser",
    // },
    techs: [TECHS.C],
  },
] as const;

export const PROJECTS: Projects = [
  ...PERSONAL_PROJECTS,
  ...EDUCATION_PROJECTS,
] as const;
