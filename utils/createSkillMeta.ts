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
  codeigniter3: { label: "CodeIgniter 3", icon: "mdi:fire" },
  codeigniter4: { label: "CodeIgniter 4", icon: "mdi:fire" },
  cpp: { label: "", icon: "mdi:language-cpp" },
  gameDevelopment: { label: "Game Development", icon: "mdi:gamepad-variant" },
  webDevelopment: { label: "Web Development", icon: "mdi:web" },
  godot: { label: "Godot", icon: "simple-icons:godotengine" },
  gdScript: { label: "GD Script", icon: "simple-icons:godotengine" },
};

export default function (name: string): { label: string; icon: string } {
  const keys = Object.keys(skill);
  if (keys.includes(name)) {
    return skill[name as keyof typeof skill];
  }
  return { label: name, icon: "" };
}
