import { TechsRecord } from "@/components/techs/type";

export const TECHS = {
  "3D": {
    label: "3D",
  },

  ASM: {
    label: "x86 ASM",
  },
  LUA: {
    label: "Lua",
  },
  PY: {
    label: "Python",
  },
  SOLIDITY: {
    label: "Solidity",
  },

  // #region C
  C: {
    label: "C",
  },
  // #region C++
  CPP: {
    label: "C++",
  },
  QT: {
    label: "QT",
  },
  // #endregion C++
  // #region C#
  CS: {
    label: "C#",
  },
  WPF: {
    label: "WPF",
  },
  // #endregion C#
  // #endregion C

  // #region java
  JAVA: {
    label: "Java",
  },
  JAVAFX: {
    label: "JavaFX",
  },
  SWING: {
    label: "Swing",
  },
  RMI: {
    label: "RMI",
  },
  // #endregion java

  HTML: {
    label: "HTML5",
  },
  CSS: {
    label: "CSS3",
  },

  // #region PHP
  PHP: {
    label: "PHP",
  },
  // #endregion PHP

  // #region JS
  JS: {
    label: "JavaScript",
  },
  TS: {
    label: "TypeScript",
  },
  VUEJS: {
    label: "Vue.js",
  },
  NUXTJS: {
    label: "Nuxt.js",
  },
  REACT: {
    label: "React",
  },
  NEXTJS: {
    label: "Next.js",
  },
  // #endregion JS

  // #region Database
  MYSQL: {
    label: "MySQL",
  },
  // #endregion Database

  // #region Tools
  OFFICE: {
    label: "Office",
  },
  PHOTOSHOP: {
    label: "Photoshop",
  },
  GIT: {
    label: "Git",
  },
  // #endregion Tools

  // #region OS
  WINDOWS: {
    label: "Windows",
  },
  LINUX: {
    label: "Linux",
  },
  MACOS: {
    label: "MacOS",
  },
  ANDROID: {
    label: "Android",
  },
  IOS: {
    label: "iOS",
  },
  // #endregion OS
} as const satisfies TechsRecord;
