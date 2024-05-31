export type HeaderLink = {
  text: string;
} & (
  | {
      href: string;
    }
  | {
      sub: {
        text: string;
        href: string;
        description?: string;
      }[];
    }
);

export type HeaderLinks = HeaderLink[];
