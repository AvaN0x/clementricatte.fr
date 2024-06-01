import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@/components/icons";

export const GITHUB_URL = "https://github.com/AvaN0x";
export const X_URL = "https://x.com/ClemAvaN0x";
export const DISCORD_URL = "https://discord.gg/7ycE7ePUdR";
export const LINKEDIN_URL = "https://www.linkedin.com/in/clement-ricatte/";

export const SOCIALS = [
  {
    title: "Github",
    url: GITHUB_URL,
    Icon: IconBrandGithub,
  },
  {
    title: "Linkedin",
    url: LINKEDIN_URL,
    Icon: IconBrandLinkedin,
  },
  {
    title: "X",
    url: X_URL,
    Icon: IconBrandX,
  },
  {
    title: "Discord",
    url: DISCORD_URL,
    Icon: IconBrandDiscord,
  },
] as const;
