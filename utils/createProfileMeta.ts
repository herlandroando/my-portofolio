const profiles = {
  "Herlandro Tribiakto": "https://www.linkedin.com/in/herlandro-tribiakto/",
  "Akbar Hari Mukti": "https://www.linkedin.com/in/akbarharimukti/",
  "Destri Herliana Irianti":
    "https://www.linkedin.com/in/destri-herliana-irianti-a868271b3/",
  Muttafiah: "https://www.linkedin.com/in/muttafiah-fia/",
  "Muhammad Gufron Hawaly": "https://www.linkedin.com/in/gufronhawaly/",
  "Iqbal Rilo Pambudi": "https://www.linkedin.com/in/iqbalrpambudi/",
  "Rhaka Novyansyah Dewanto": "https://www.linkedin.com/in/dewanto-rhaka/",
  "Ridwan Al Akhyar Aunurrohim":
    "https://www.linkedin.com/in/ridwan-al-akhyar/",
};

export default function (name: string) {
  const keys = Object.keys(profiles);
  if (keys.includes(name)) {
    return { name, link: profiles[name as keyof typeof profiles] };
  }
  return { name, link: "" };
}
