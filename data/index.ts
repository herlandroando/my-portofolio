import type { PortofolioItem, TimelineItem } from "../types/data";

export const aboutMeContents = [
  {
    key: 1,
    img: "/assets/images/1.jpg",
    description:
      "My name is Herlandro Tribiakto and yup that is me. You're probably wondering how i ended up in this situation...",
  },
  {
    key: 2,
    img: "/assets/images/2.png",
    description: `It all started with the game Warcraft 3. I was intrigued by the game's world editor. Inside there is a game logic design with the GUI of the application so that the map of the game has something unique.
    By using this, I made a map in the game and my friends liked the map I made. From here I was inspired to become a programmer focusing on game development.`,
    customStyle: { objectPosition: "25% 25%" },
  },
  {
    key: 3,
    img: "/assets/images/3.jpg",
    description: `Days passed but none of my friends or people in my neighborhood were interested in
    game development. On top of that, I had been slapped with the harshness of life. So yeah, I became a web developer and started to get interested in web development.
    I learned by myself on YouTube, documentation of several technology websites and other written sources.`,
    customStyle: { objectPosition: "15% 0%" },
  },
];

export const experiences: TimelineItem[] = [
  {
    key: 1,
    icon: "mdi:account-group",
    role: "Freelance Fullstack Developer",
    skill: ["php", "laravel", "codeigniter3", "js", "react", "Livewire"],
    at: "Lide Dev Community",
    from: "November 2019",
    to: "January 2022",
    content:
      "It started with two people, me and my college friend named {::}, we had the desire to move forward to not only study on campus. We wanted to gain experience and learn together. Our first job was a thesis project using Code Igniter 3. Increasingly, we wanted to try to invite some of our campus classmates and create a community called Lide Dev on Discord which numbers 7 people now. I can't share my community discord link because it's for our internal use only. But it is possible that we will open it to become a large community.",
    contentAppend: [
      {
        type: "link",
        options: {
          to: "https://www.linkedin.com/in/akbarharimukti/",
          text: "Akbar Hari Mukti",
        },
      },
    ],
  },
  {
    key: 2,
    icon: "mdi:briefcase",
    role: "Laravel Developer",
    skill: ["php", "laravel", "js", "jQuery"],
    at: "SuperHelper",
    from: "June 2022",
    to: "August 2022",
    content:
      "This was my first job at the company. It's a startup company serving domestic assistant services.  Here I do several tasks, such as:\n\n" +
      "- Create Bulk Import/Export feature for data from excel or CSV\n" +
      "- Create a Calendar that is synchronized with the registered partner's work schedule.\n" +
      "- Work with my coworkers and achieve common goals.",
  },
  {
    key: 3,
    icon: "mdi:briefcase",
    role: "Fullstack Developer",
    skill: ["php", "laravel", "js", "Livewire"],
    at: "Kiddu",
    from: "September 2022",
    to: "May 2023",
    content:
      "It's a startup company about developing children's character with games, quizzes, and cartoons. My challenge is to build this app from scratch, so I need to think the system through. In addition, there is another challenge, which is to create an attractive appearance for children. Some of my tasks were:\n\n" +
      "- Create a database design and implement the design\n" +
      "- Creating an interactive and responsive interface for the learning section.\n" +
      "- Designing an admin editor such as games, dynamic quizzes and video selection.\n" +
      "- Developing multiple languages (Indonesian and English) for each content.",
  },
];

export const educations: TimelineItem[] = [
  {
    key: 1,
    icon: "mdi:school",
    role: "Undergraduate (S1) Informatics",
    at: "Universitas Amikom Yogyakarta",
    from: "2017",
    to: "January 2022",
    content: "",
  },
  {
    key: 2,
    icon: "mdi:school",
    role: "Master (S2) Informatics",
    at: "Universitas Amikom Yogyakarta",
    from: "September 2022",
    to: "Now",
    content: "",
  },
];

export const portofolio: PortofolioItem[] = [
  {
    key: 1,
    title: "Pearl Hunter",
    role: "Programmer & Game Design",
    at: "AMICTA 2018 - Universitas Amikom Yogyakarta",
    imageUrl: "https://i.ibb.co.com/Lt93wJb/pearl-hunter-main.jpg",
    date: "August 2018 - September 2018",
    skills: ["gameDevelopment", "Game Design", "cpp", "SIGIL"],
    description:
      "An action and arcade game made with C++ and a helper library called SIGIL. This game challenges you to search for a precious pearl under the sea. There is the best pearl in the sea but it is guarded by a mysterious fish that is very dangerous.",
    detailAction: "/portofolio/pearl-hunter",
  },
  {
    key: 2,
    title: "Story of Nature Spirit",
    role: "Programmer & Game Design",
    at: "AMICTA 2020 - Universitas Amikom Yogyakarta",
    imageUrl: "https://i.ibb.co.com/DWjTBF5/sons-main.jpg",
    date: "June 2020 - August 2020",
    skills: ["gameDevelopment", "Game Design", "godot", "gdScript"],
    description:
      "This RPG genre game was created with a game engine called Godot using the engine's built-in scripting language called GDScript. This game tells the story of a fairy named Raka who was created from natural elements. This fairy wants to save the world and the fairy race from the attack of a dark creature called Radish. Raka will save the world and the fairy race by balancing darkness and light in this world.",
    detailAction: "/portofolio/story-of-nature-spirit",
  },
  {
    key: 3,
    title:
      "Letter Archive Information System in Condongcatur Village Government",
    role: "Freelance - Fullstack Developer",
    at: "Lide Dev Community",
    imageUrl: "https://i.ibb.co.com/Jvw67Fs/archive-mail-main.jpg",
    date: "May 2020 - August 2020",
    skills: ["webDevelopment", "php", "codeigniter3", "js", "jQuery"],
    description:
      "Mail archive management website in Condongcatur village. This website uses the Codeigniter 3 framework.",
    detailAction: "/portofolio/story-of-nature-spirit",
  },
];
