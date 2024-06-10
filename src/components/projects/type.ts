import { Techs } from "@/components/techs/type";
import React from "react";

export type ProjectLink = {
  href: string;
  type?: "github" | "youtube" | "default";
};
interface IProject {
  nonRelevant?: boolean;

  name?: string;
  title: string;
  description?: string;

  contributorsCount?: number;
  links?: ProjectLink[];
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
