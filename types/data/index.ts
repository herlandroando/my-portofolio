/**
 * About Me Item Type
 */
export type AboutMeItem = {
  key: number;
  tag?: string;
  title?: string;
  subtitle?: string;
  img: string;
  description: string;
  customStyle?: Record<string, string>;
  skills?: string[];
  year?: string;
};

/**
 * Timeline Component Type
 */

export type TimelineItem = {
  key: number;
  icon: string;
  skill?: string[];
  role: string;
  at: string;
  from: string;
  to: string;
  content: string;
  contentAppend?: TimelineItemContentAppend[];
};

export type TimelineItemContentAppend =
  | TimelineItemButtonOption
  | TimelineItemLinkOption;

type TimelineItemLinkOption = {
  type: "link";
  options: {
    to: string;
    text: string;
    external?: boolean;
  };
};

type TimelineItemButtonOption = {
  type: "button";
  options: {
    action?: () => {};
    color: string;
    text: string;
  };
};

/**
 * Portofolio Item Component Type
 */
export type PortofolioCategory = "all" | "backend" | "fullstack" | "game" | "web" | "desktop";

export type PortofolioScope = "all" | "client" | "self";

export interface PortofolioDirectLinks {
  github?: string;
  demo?: string;
  file?: string;
  customUrl?: string;
}

export type PortofolioItem = {
  key: number;
  name: string;
  title: string;
  date: string;
  at: string;
  role: string;
  imageUrl?: string;
  skills: string[];
  description: string;
  category?: "backend" | "fullstack" | "game" | "web" | "desktop";
  scope?: "client" | "self";
  directLinks?: PortofolioDirectLinks;
  detailAction?: string | (() => void);
  /**
   * If detailAction is url string, you can make a new tab and the url is external with external=true
   */
  external?: boolean;
};

export type PortofolioSinglePageMeta = {
  applicationName: string;
  url?: {
    file?: string;
    github?: string;
    demo?: string;
    customUrl?: string;
  };
  note?: string;
  createdBy: {
    name: string;
    role: string;
  }[];
};
