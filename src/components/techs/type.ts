import React from "react";

export type Tech = {
  label: string;
  tooltip?: string;
  icons?: React.FC[];
};
export type Techs = Tech[];
export type TechsRecord = Record<string, Tech>;
