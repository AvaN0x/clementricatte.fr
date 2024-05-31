import {
  SECTION_PRESENTATION_ID,
  SECTION_PROJECTS_ID,
} from "@/app/(main)/constants";
import { HeaderLinks } from "@/components/header/types";

export * from "./socials";

export const LICENCE_NAME = "Licence MIT";
export const LICENCE_URL =
  "https://github.com/AvaN0x/clementricatte.fr/blob/main/LICENSE";

export const HEADER_LINKS: HeaderLinks = [
  {
    text: "Présentation",
    sub: [
      {
        text: "Présentation",
        href: `/#${SECTION_PRESENTATION_ID}`,
        description: "Présentation personnelle",
      },
      {
        text: "Projets",
        href: `/#${SECTION_PROJECTS_ID}`,
        description: "Projets réalisés dans un cadre personnel et scolaire",
      },
    ],
  },
  { text: "Contact", href: "/contact" },
];
