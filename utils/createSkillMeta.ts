interface SkillInfo {
  label: string;
  icon: string;
}

const skillMap: Record<string, SkillInfo> = {
  laravel: { label: "Laravel", icon: "mdi:laravel" },
  vue: { label: "Vue", icon: "mdi:vuejs" },
  nuxt: { label: "Nuxt", icon: "simple-icons:nuxtdotjs" },
  react: { label: "React", icon: "mdi:react" },
  jquery: { label: "jQuery", icon: "devicon-plain:jquery" },
  livewire: { label: "Livewire", icon: "simple-icons:livewire" },
  php: { label: "PHP", icon: "mdi:language-php" },
  js: { label: "JavaScript", icon: "mdi:language-javascript" },
  javascript: { label: "JavaScript", icon: "mdi:language-javascript" },
  ts: { label: "TypeScript", icon: "mdi:language-typescript" },
  typescript: { label: "TypeScript", icon: "mdi:language-typescript" },
  java: { label: "Java", icon: "mdi:language-java" },
  cpp: { label: "C++", icon: "mdi:language-cpp" },
  "c++": { label: "C++", icon: "mdi:language-cpp" },
  codeigniter3: { label: "CodeIgniter 3", icon: "mdi:fire" },
  codeigniter4: { label: "CodeIgniter 4", icon: "mdi:fire" },
  gamedevelopment: { label: "Game Development", icon: "mdi:gamepad-variant" },
  gamedesign: { label: "Game Design", icon: "mdi:gamepad-square-outline" },
  webdevelopment: { label: "Web Development", icon: "mdi:web" },
  godot: { label: "Godot", icon: "simple-icons:godotengine" },
  gdscript: { label: "GDScript", icon: "simple-icons:godotengine" },
  mysql: { label: "MySQL", icon: "devicon-plain:mysql" },
  api: { label: "API", icon: "mdi:api" },
  restapi: { label: "REST API", icon: "mdi:cloud-sync" },
  paymentgateway: { label: "Payment Gateway", icon: "mdi:credit-card-outline" },
  sigil: { label: "SIGIL", icon: "mdi:cube-outline" },
};

function normalizeKey(key: string): string {
  return key.toLowerCase().replace(/[\s\-_]/g, "");
}

export default function (name: string): SkillInfo {
  if (!name) return { label: "", icon: "" };
  const normalized = normalizeKey(name);
  if (skillMap[normalized]) {
    return skillMap[normalized];
  }
  return { label: name, icon: "" };
}

