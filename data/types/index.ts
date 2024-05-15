type ExperienceItem = {
  key: number;
  icon: string;
  skill: string[];
  role: string;
  at: string;
  from: string;
  to: string;
  content: string;
  contentAppend?: ExperienceItemContentAppend[];
};

type ExperienceItemContentAppend =
  | ExperienceItemButtonOption
  | ExperienceItemLinkOption;

type ExperienceItemLinkOption = {
  type: "link";
  options: {
    to: string;
    text: string;
    external?: boolean;
  };
};

type ExperienceItemButtonOption = {
  type: "button";
  options: {
    action?: () => {};
    color: string;
    text: string;
  };
};
