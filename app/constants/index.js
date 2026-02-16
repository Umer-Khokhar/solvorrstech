import {
    discord,
    figma,
    framer,
    notion,
    photoshop,
    Project1,
    protopie,
    raindrop,
    roadmap1,
    roadmap2,
    roadmap3,
    roadmap4,
    slack,
  } from "../assets";
  
  
  
  export const roadmap = [
    {
      id: "0",
      title: "Voice recognition",
      text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
      date: "May 2023",
      status: "done",
      imageUrl: roadmap1,
      colorful: true,
    },
    {
      id: "1",
      title: "Gamification",
      text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
      date: "May 2023",
      status: "progress",
      imageUrl: roadmap2,
    },
    {
      id: "2",
      title: "Chatbot customization",
      text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
      date: "May 2023",
      status: "done",
      imageUrl: roadmap3,
    },
    {
      id: "3",
      title: "Integration with APIs",
      text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
      date: "May 2023",
      status: "progress",
      imageUrl: roadmap4,
    },
  ];
  
  export const collabText =
    "Your vision, our expertise – Let's build something amazing together!";
  
  export const collabContent = [
    {
      id: "0",
      title: "Discovery & Consultation",
      text: collabText,
    },
    {
      id: "1",
      title: "Strategy & Planning",
    },
    {
      id: "2",
      title: "Design & Development",
    },
    {
      id: "3",
      title: "Testing & Quality Assurance ",
    },
  ];
  
  export const collabApps = [
    {
      id: "0",
      title: "Figma",
      icon: figma,
      width: 26,
      height: 36,
    },
    {
      id: "1",
      title: "Notion",
      icon: notion,
      width: 34,
      height: 36,
    },
    {
      id: "2",
      title: "Discord",
      icon: discord,
      width: 36,
      height: 28,
    },
    {
      id: "3",
      title: "Slack",
      icon: slack,
      width: 34,
      height: 35,
    },
    {
      id: "4",
      title: "Photoshop",
      icon: photoshop,
      width: 34,
      height: 34,
    },
    {
      id: "5",
      title: "Protopie",
      icon: protopie,
      width: 34,
      height: 34,
    },
    {
      id: "6",
      title: "Framer",
      icon: framer,
      width: 26,
      height: 34,
    },
    {
      id: "7",
      title: "Raindrop",
      icon: raindrop,
      width: 38,
      height: 32,
    },
  ];

export const projectsDetails = [
  {
    id: "0",
    title: "Client Management & CMS Dashboard (Custom Pack Boxes)",
    description: "Designed and developed a structured CMS dashboard for a packaging company to centralize client records, manage orders, assign internal tasks, and streamline operational workflows. Replaced scattered communication and manual tracking with a single controlled system.",
    imageUrl: Project1,
    techStack: ["React.js", "Node.js", "PostgreSQL", "Role-Based Access"],
    features: [
      "Centralized Client & Order Management",
      "Internal Workflow Coordination",
      "Secure Admin & User Permissions"
    ],
  },
  {
    id: "1",
    title: "Client & Revenue Management System (Structured Demo Build)",
    description: "Currently building a structured business control system designed to help growing companies manage clients, projects, invoices, payments, user roles, and performance reports inside one scalable dashboard. Built to eliminate spreadsheet dependency and improve operational clarity.",
    imageUrl: Project1,
    techStack: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Reporting Module"],
    features: [
      "Client & Project Tracking",
      "Invoice & Revenue Monitoring",
      "Role-Based Access & Performance Reports"
    ],
    isRight: true
  }
];

