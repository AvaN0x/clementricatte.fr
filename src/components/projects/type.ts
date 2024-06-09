import { Techs } from "@/components/techs/type";
import React from "react";

interface IProject {
  nonRelevant?: boolean;

  name?: string;
  title: string;
  description?: string;

  contributorsCount?: number;
  links?: {
    href: string;
    type?: "github" | "youtube" | "default";
  }[];
  techs?: Techs;

  modal?: React.ReactNode;
}
export type PersonalProject = IProject;
export type PersonalProjects = PersonalProject[];
export type EducationProject = IProject & {
  education: string;
};
export type EducationProjects = EducationProject[];

export type Project = PersonalProject | EducationProject;
export type Projects = Project[];
