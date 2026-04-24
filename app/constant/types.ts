export type SeoSection =
  | {
      title: string;
      type: "text";
      content: string;
    }
  | {
      title: string;
      type: "list";
      content: string[];
    };

export type SeoData = {
  title: string;
  description: string;
  howToUse?: string[];
  sections: SeoSection[];
};
