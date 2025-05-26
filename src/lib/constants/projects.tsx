import { IconBrandGithub } from "@/components/icons";
import {
  ModalLI,
  ModalLink,
  ModalP,
  ModalSeparator,
  ModalUL,
} from "@/components/projects/modal/content";
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
    modal: (
      <>
        <ModalP>
          Réalisation d&apos;un serveur serveur RolePlay dans l&apos;univers de
          GTA&nbsp;V à partir de ressources open-source de la communauté sur{" "}
          <ModalLink href="https://fivem.net/">FiveM</ModalLink>.
        </ModalP>
        <ModalP>
          En travaillant sur ce projet, j&apos;ai eu l&apos;occasion de
          m&apos;occuper de communautés de centaines de joueurs, de gérer des
          équipes de modération, de développer mes propres scripts/mods et de
          gérer toute l&apos;infrastructure du serveur.
        </ModalP>
        <ModalSeparator />
        <ModalP>
          J&apos;ai également eu l&apos;occasion de participer à des projets
          open-source, de signaler des bugs et de rédiger des tutoriels pour
          aider les autres membres de cette communauté.
        </ModalP>
        <ModalP className="mb-0">
          Vous pouvez trouver ci-dessous certains posts que j&apos;ai pu écrire
          sur le forum de la communauté&nbsp;:
        </ModalP>
        <ModalUL>
          <ModalLI>
            Informations sur les modifications apportées par une mise à jour du
            jeu&nbsp;:{" "}
            <ModalLink href="https://forum.cfx.re/t/the-contract-infos-build-2545/4792123?u=avan0x">
              forum.cfx.re (+63&nbsp;800&nbsp;vues)
            </ModalLink>
            .
          </ModalLI>
          <ModalLI>
            Tutoriel pour utiliser des peintures de véhicules spéciales&nbsp;:{" "}
            <ModalLink href="https://forum.cfx.re/t/how-to-get-the-chameleon-paints/4869883?u=avan0x">
              forum.cfx.re (+23&nbsp;200&nbsp;vues)
            </ModalLink>
            .
          </ModalLI>
          <ModalLI>
            Tutoriel pour charger plusieurs cartes en même temps&nbsp;:{" "}
            <ModalLink href="https://forum.cfx.re/t/how-to-load-cayoperico-minimap-all-of-the-time/4808760?u=avan0x">
              forum.cfx.re (+10&nbsp;800&nbsp;vues)
            </ModalLink>
            .
          </ModalLI>
        </ModalUL>
      </>
    ),
    techs: [TECHS.LUA, TECHS.MYSQL, TECHS.JS, TECHS.HTML, TECHS.CSS],
  },
  {
    title: "Site personnel",
    links: [
      // { href: "https://github.com/AvaN0x/avan0x.github.io", type: "github" },
      { href: "https://github.com/AvaN0x/clementricatte.fr", type: "github" },
      { href: "https://clementricatte.fr/" },
    ],
    modal: (
      <>
        <ModalP>
          Mon site personnel a pour but de me présenter moi et les différents
          projets que j&apos;ai pu réaliser.
        </ModalP>
        <ModalP className="mb-0">
          Il a existé sous plusieurs versions, chacune me permettant de tester
          de nouvelles technologies et de nouvelles manières de présenter mes
          projets.
        </ModalP>
        <ModalUL>
          <ModalLI>
            La version actuelle a été réalisée avec{" "}
            <ModalLink href="https://nextjs.org/">Next.js</ModalLink> et est
            hébergée sur <ModalLink href="https://vercel.com">Vercel</ModalLink>
            .
          </ModalLI>
          <ModalLI>
            La version précédente utilisait{" "}
            <ModalLink href="https://react.dev/">React</ModalLink>, son code est
            toujours disponible depuis{" "}
            <ModalLink href="https://github.com/AvaN0x/avan0x.github.io/tree/v2">
              <IconBrandGithub className="inline" /> github
            </ModalLink>
            .
          </ModalLI>
          <ModalLI>
            La première version quant à elle était une simple page HTML/CSS, son
            code est également accessible depuis{" "}
            <ModalLink href="https://github.com/AvaN0x/avan0x.github.io/tree/v1">
              <IconBrandGithub className="inline" /> github
            </ModalLink>
            .
          </ModalLI>
        </ModalUL>
      </>
    ),
    techs: [TECHS.HTML, TECHS.CSS, TECHS.TS, TECHS.REACT],
  },
  {
    name: "YoutubeDownloader",
    title: "Outils de téléchargement de vidéos Youtube",
    links: [
      { href: "https://github.com/AvaN0x/YoutubeDownloader", type: "github" },
    ],
    modal: (
      <>
        <ModalP>
          Petite application utilisant une bibliothèque tierce (
          <ModalLink href="https://github.com/Tyrrrz/YoutubeExplode">
            <IconBrandGithub className="inline" /> Tyrrrz/YoutubeExplode
          </ModalLink>
          ) pour télécharger des vidéos Youtube.
          <br />
          Il est également possible d&apos;en récupérer que la source audio et
          de télécharger des playlists entières.
        </ModalP>
      </>
    ),
    techs: [TECHS.CS, TECHS.WPF],
  },
  {
    name: "TextCapsModifier",
    title: "Outils de modifications de majuscule sur un texte",
    links: [
      { href: "https://github.com/AvaN0x/textCapsModifier", type: "github" },
    ],
    modal: (
      <>
        <ModalP>
          Petite application permettant de modifier les majuscules d&apos;un
          texte à sa guise.
        </ModalP>
      </>
    ),
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
    modal: (
      <>
        <ModalP>
          Bot proposant quelques commandes simples pour les serveurs{" "}
          <ModalLink href="https://discord.com/">Discord</ModalLink>.
          <br />
          Il réagit également à certains contenu de messages.
        </ModalP>
      </>
    ),
    techs: [TECHS.CS],
  },
] as const;

export const EDUCATION_PROJECTS: EducationProjects = [
  {
    name: "pedaki",
    title: "Outils de génération de classes scolaires",
    education: "MEWO",
    links: [
      {
        href: "https://github.com/PedakiHQ/pedaki-community/",
        type: "github",
      },
      {
        href: "https://www.pedaki.fr/",
      },
    ],
    contributorsCount: 3,
    modal: (
      <>
        <ModalP>
          La création des classes pour les écoles est une tâche complexe et très
          manuelle. L&apos;objectif de ce projet est de simplifier cette tâche
          en proposant un outil de génération de classes.
        </ModalP>
      </>
    ),
    techs: [TECHS.TS, TECHS.REACT, TECHS.NEXTJS],
  },
  {
    name: "SimpsonoVirus",
    title: "Réalisation d'un jeu vidéo pour Intel 8086",
    education: "DUT",
    links: [
      { href: "https://github.com/AvaN0x/IUT-asmGame", type: "github" },
      { href: "https://youtu.be/W9PVjym2soM", type: "youtube" },
    ],
    contributorsCount: 2,
    modal: (
      <>
        <ModalP>
          Réalisation d&apos;un jeu vidéo en assembleur pour processeur Intel
          8086.
        </ModalP>
        <ModalP>
          Ce projet m&apos;a permis de comprendre le fonctionnement d&apos;un
          processeur et de la chance que l&apos;on a aujourd&apos;hui de ne pas
          avoir à travailler directement avec dans la majorité des cas.
        </ModalP>
        <ModalP>
          Bien que ce projet ai pu être compliqué, je suis très fier du résultat
          final et de ce que j&apos;ai pu apprendre en le réalisant.
        </ModalP>
      </>
    ),
    techs: [TECHS.ASM],
  },
  {
    name: "MEWO BullsEye",
    title: "Jeu de tir sur des cible en réalité augmentée",
    education: "MEWO",
    links: [
      {
        href: "https://github.com/AvaN0x/mewo_ar_target",
        type: "github",
      },
      {
        href: "https://avan0x.github.io/mewo_ar_target/",
      },
    ],
    contributorsCount: 1,
    modal: (
      <>
        <ModalP>
          Réalisation d&apos;un jeu de tir sur des cibles en réalité augmentée.
          Le but est d&apos;obtenir le plus de points possible dans le temps
          imparti.
        </ModalP>
        <ModalP>
          La difficulté impacte le nombre de cible, la fréquence à laquelle
          elles vont se rétracter et le temps imparti.
          <br />
          Un mode bac à sable est également disponible où la limite de temps
          n&apos;est pas présente.
        </ModalP>
      </>
    ),
    techs: [TECHS.VUEJS, TECHS.NUXTJS, TECHS.TS, TECHS["3D"]],
  },
  {
    title: "Faussaire de cryptomonnaie",
    education: "MEWO",
    links: [
      {
        href: "https://github.com/AvaN0x/mewo_faucet",
        type: "github",
      },
      {
        href: "https://avan0x.github.io/mewo_faucet/",
      },
    ],
    contributorsCount: 1,
    modal: (
      <>
        <ModalP>
          Réalisation d&apos;un faussaire simple pour une monnaie fictive
          disponible sur le canal &quot;sepolia&quot; d&apos;Ethereum.
        </ModalP>
        <ModalP>
          Un site a été créé pour permettre aux utilisateurs de récupérer des
          fonds fictifs avec une intervalle.
          <br />
          Ce projet a nécessité la création de deux contrats&nbsp;: la monnaie
          &quot;Mewo&quot; et le faussaire &quot;Faucet&quot;.
        </ModalP>
      </>
    ),
    techs: [TECHS.REACT, TECHS.TS, TECHS.SOLIDITY],
  },
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
