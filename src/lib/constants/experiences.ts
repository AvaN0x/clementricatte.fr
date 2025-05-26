import { Experiences } from "@/components/experiences/type";
import { TECHS } from "@/lib/constants/techs";

export const EXPERIENCES: Experiences = [
  {
    range: {
      start: new Date("2024-10"),
    },
    title: "Développeur web",
    enterprise: "Happiso",
    location: "Metz, France",
  },
  {
    range: {
      start: new Date("2022-09"),
      end: new Date("2024-08"),
    },
    title: "Alternance en développement web et mobile",
    enterprise: "DIGIpepss - Groupe VISIOcompte",
    location: "Metz, France",
    techs: [
      TECHS.TS,
      TECHS.VUEJS,
      TECHS.NUXTJS,
      TECHS.PHP,
      TECHS.ANDROID,
      TECHS.IOS,
    ],
  },
  {
    range: {
      start: new Date("2022-04"),
      end: new Date("2022-06"),
    },
    title: "Développeur web et application mobile",
    enterprise: "Groupe VISIOcompte",
    location: "Metz, France",
    techs: [
      TECHS.TS,
      TECHS.VUEJS,
      TECHS.NUXTJS,
      TECHS.PHP,
      TECHS.ANDROID,
      TECHS.IOS,
    ],
  },
  {
    range: {
      start: new Date("2021-04"),
      end: new Date("2021-06"),
    },
    title: "Développeur web et application mobile",
    enterprise: "Groupe VISIOcompte",
    location: "Metz, France",
    techs: [TECHS.JS, TECHS.PHP, TECHS.ANDROID, TECHS.IOS],
  },
  {
    nonRelevant: true,
    range: {
      start: new Date("2015-12-07"),
      end: new Date("2015-12-11"),
    },
    title: "Stage de découverte",
    enterprise: "Tabac Presse Loto",
    location: "Metz, France",
  },
] as const;
