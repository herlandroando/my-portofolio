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
    customUrl?: string;
  };
  note?: string;
  createdBy: {
    name: string;
    role: string;
  }[];
};
