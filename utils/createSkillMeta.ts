import * as _ from "lodash";

const skill = {
  laravel: { label: "Laravel", icon: "mdi:laravel" },
  vue: { label: "Vue", icon: "mdi:vuejs" },
  react: { label: "React", icon: "mdi:react" },
  jquery: { label: "JQuery", icon: "" },
  livewire: { label: "Livewire", icon: "" },
  php: { label: "PHP", icon: "mdi:language-php" },
  js: { label: "Javascript", icon: "mdi:language-javascript" },
  ts: { label: "Typescript", icon: "mdi:language-typescript" },
};

export default function (name: string): { label: string; icon: string } {
  const keys = Object.keys(skill);
  if (keys.includes(name)) {
    return skill[name];
  }
  return { label: _.capitalize(name), icon: "" };
}
