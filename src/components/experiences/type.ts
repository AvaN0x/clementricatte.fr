import { Techs } from "@/components/techs/type";

export type Experience = {
  nonRelevant?: boolean;
  range: {
    start: Date;
    end?: Date;
  };
  title: string;
  enterprise: string;
  location?: string;
  type?: string;
  techs?: Techs;
};
export type Experiences = Experience[];
