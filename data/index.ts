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
    name: "pearl-hunter",
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
    name: "story-of-nature-spirit",
    role: "Programmer & Game Design",
    at: "AMICTA 2020 - Universitas Amikom Yogyakarta",
    imageUrl: "https://i.ibb.co.com/DWjTBF5/sons-main.jpg",
    date: "June 2020 - August 2020",
    skills: ["gameDevelopment", "Game Design", "godot", "gdScript"],
    description:
      "This RPG genre game was created with a game engine called Godot using the engine's built-in scripting language called GDScript. This game tells the story of a fairy named Raka who was created from natural elements. This fairy wants to save the world and the fairy race from the attack of a dark creature called Radish. Raka will save the world and the fairy race by balancing darkness and light in this world.",
    // detailAction: "/portofolio/story-of-nature-spirit",
  },
  {
    key: 3,
    title:
      "Letter Archive Information System in Condongcatur Village Government",
    name: "archive-mail",
    role: "Freelance - Fullstack Developer",
    at: "Lide Dev Community",
    imageUrl: "https://i.ibb.co.com/Jvw67Fs/archive-mail-main.jpg",
    date: "May 2020 - August 2020",
    skills: ["webDevelopment", "php", "codeigniter3", "js", "jQuery", "mysql"],
    description:
      "Mail archive management website in Condongcatur village. This website uses the Codeigniter 3 framework.",
    // detailAction: "/portofolio/archive-mail",
  },
  {
    key: 4,
    title: "Information System for Fertile Age Couples in Bantul",
    name: "sipus",
    role: "Freelance - Backend Developer",
    at: "Lide Dev Community",
    imageUrl: "https://i.ibb.co.com/fQwCZRt/sipus-main.jpg",
    date: "September 2020 - November 2020",
    skills: ["webDevelopment", "php", "laravel", "API", "mysql"],
    description:
      "A Website Application to manage information on childbearing age couples in Bantul district, Yogyakarta with the client side using React JS framework and the server side using Laravel framework.",
    // detailAction: "/portofolio/sipus",
  },
  {
    key: 5,
    title: "Marketplace Laron Application",
    name: "laron",
    role: "Freelance - Backend Developer",
    at: "Lide Dev Community",
    imageUrl: "https://i.ibb.co.com/dm393LY/laron-main.png",
    date: "February 2021 - May 2021",
    skills: ["webDevelopment", "php", "laravel", "API", "REST API", "mysql"],
    description:
      "A marketplace application for BUMDESA in the Yogyakarta area created by the Institute for Research and Empowerment (IRE). This application has 2 sections, namely the ordinary user section and the admin section. Each has a different platform. For the admin part we use a website with the help of the React JS framework. For the regular user section we use the Android platform with the language used is Kotlin. For the server part we use Laravel with API communication method.",
    // detailAction: "/portofolio/laron",
  },
  {
    key: 6,
    title: "Tanpamerek",
    name: "tanpamerek",
    role: "Freelance - Backend Developer",
    at: "Lide Dev Community",
    imageUrl: "https://i.ibb.co.com/py2g5H8/tanpamerek-main.png",
    date: "January 2022 - March 2022",
    skills: [
      "webDevelopment",
      "php",
      "laravel",
      "js",
      "Payment Gateway",
      "mysql",
    ],
    description:
      "We created a product/website to serve retail download services of assets on several well-known and well-known websites that impose a premium system or subscription per month/per year.",
    // detailAction: "/portofolio/tanpamerek",
  },
  {
    key: 7,
    title: "Marketplace Jiwa Jenu Application",
    name: "jiwa-jenu",
    role: "Freelance - Backend Developer",
    at: "Lide Dev Community",
    imageUrl: "https://i.ibb.co.com/t8sqXDq/jiwa-jenu-main.jpg",
    date: "July 2022 - August 2022",
    skills: [
      "webDevelopment",
      "php",
      "laravel",
      "API",
      "REST API",
      "Payment Gateway",
      "mysql",
    ],
    description:
      "A marketplace application for BUMDESA in Jenu city, Tuban with the same engine as Laron. The biggest change here is the implementation of Payment Gateway and some new looks on the website and mobile platform.",
    // detailAction: "/portofolio/jiwa-jenu",
  },
  {
    key: 8,
    title: "Landing Page IRE with CMS",
    name: "lp-ire",
    role: "Freelance - Fullstack Developer",
    at: "Lide Dev Community",
    imageUrl: "https://i.ibb.co.com/SyLCty2/lp-ire-main.png",
    date: "September 2022 - February 2023",
    skills: [
      "webDevelopment",
      "php",
      "laravel",
      "API",
      "js",
      "react",
      "Livewire",
      "mysql",
    ],
    description:
      "IRE is non-profit organization in Yogyakarta. We developed a they website with a CMS system for efficient content management. The site has separate admin and user sections with attractive designs using React JS and Laravel + Livewire.",
    // detailAction: "/portofolio/lp-ire",
  },
  {
    key: 9,
    title: "Landing Page PT. Panorama Varia Cipta with CMS",
    name: "lp-ori-pvc",
    role: "Freelance - Fullstack Developer",
    at: "Lide Dev Community",
    imageUrl: "https://i.ibb.co.com/8xFsfP8/original-pvc-main.jpg",
    date: "November 2023 - December 2023",
    skills: [
      "webDevelopment",
      "php",
      "laravel",
      "API",
      "js",
      "react",
      "Livewire",
      "mysql",
    ],
    description:
      "A Company Profile of the company PT Panorama Varia Cipta which deals with PVC ceilings. This website implements the same engine as CMS Website IRE Yogyakarta with some minor adjustments.",
    // detailAction: "/portofolio/lp-ori-pvc",
  },
];
