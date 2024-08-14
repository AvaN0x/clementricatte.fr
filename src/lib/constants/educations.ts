import { Educations } from "@/components/educations/type";

export const EDUCATIONS: Educations = [
  {
    range: {
      start: new Date("2022-09"),
      end: new Date("2024-07"),
    },
    title: "Formation Expert en Systèmes d'Information",
    speciality: "option Développement",
    diploma: "BAC +5",
    school: "MEWO",
    location: "57 Metz, France",
    highlight: "Major de promotion",
  },
  {
    range: {
      start: new Date("2021-09"),
      end: new Date("2022-06"),
    },
    title: "Licence générale en informatique",
    diploma: "BAC +3",
    school: "UFR MIM",
    location: "57 Metz, France",
    highlight: "Major de promotion",
  },
  {
    range: {
      start: new Date("2019-09"),
      end: new Date("2021-06"),
    },
    title: "Diplôme Universitaire de Technologie",
    speciality: "filière Informatique",
    diploma: "BAC +2",
    school: "Université de Lorraine",
    location: "57 Metz, France",
    highlight: "Major de promotion",
  },
  {
    range: {
      start: new Date("2016-09"),
      end: new Date("2019-07"),
    },
    title: "Baccalauréat Scientifique",
    speciality: "spécialité Science et Vie de la Terre",
    school: "Lycée Robert Schuman",
    location: "57 Metz, France",
  },
  {
    nonRelevant: true,
    range: {
      start: new Date("2012-09"),
      end: new Date("2016-07"),
    },
    title: "Diplôme National du Brevet",
    school: "Collège Jules Lagneau",
    location: "57 Metz, France",
  },
] as const;
