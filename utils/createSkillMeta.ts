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
  csharp: { label: "C#", icon: "mdi:language-csharp" },
  "c#": { label: "C#", icon: "mdi:language-csharp" },
  dotnet: { label: ".NET", icon: "mdi:dot-net" },
  dotnet8: { label: ".NET 8", icon: "mdi:dot-net" },
  ".net8": { label: ".NET 8", icon: "mdi:dot-net" },
  wpf: { label: "WPF", icon: "mdi:window-maximize" },
  windowssmtc: { label: "Windows SMTC", icon: "mdi:microsoft-windows" },
  discordrpc: { label: "Discord RPC", icon: "mdi:discord" },
  desktopapp: { label: "Desktop App", icon: "mdi:monitor" },
  lyricssync: { label: "Lyrics Sync", icon: "mdi:music-note-outline" },
  tauri: { label: "Tauri v2", icon: "simple-icons:tauri" },
  tauriv2: { label: "Tauri v2", icon: "simple-icons:tauri" },
  rust: { label: "Rust", icon: "simple-icons:rust" },
  vite: { label: "Vite", icon: "simple-icons:vite" },
  codemirror: { label: "CodeMirror 6", icon: "mdi:code-braces-box" },
  codemirror6: { label: "CodeMirror 6", icon: "mdi:code-braces-box" },
  pinia: { label: "Pinia", icon: "simple-icons:pinia" },
  pwa: { label: "PWA & Offline", icon: "mdi:application-outline" },
  privacyfirst: { label: "Privacy-First", icon: "mdi:shield-check-outline" },
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

