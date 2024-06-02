import { Techs } from "@/components/techs/type";

export type Education = {
  nonRelevant?: boolean;
  range: {
    start: Date;
    end?: Date;
  };
  title: string;
  speciality?: string;
  diploma?: string;
  school: string;
  location?: string;
  highlight?: string;
  techs?: Techs;
};
export type Educations = Education[];
