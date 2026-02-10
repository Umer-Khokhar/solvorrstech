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
      title: "Convert Design to React + Tailwind Code",
      description: "Transformed a Figma design into a clean, responsive website using React.js and Tailwind CSS, ensuring a professional look with smooth performance.",
      imageUrl: Project1,
      techStack: ["React.js,", "Figma,", "TailwindCSS"],
      features: ['Effortless Deployment', 'Clean & Modular Code', 'Customised Features'],
    },
    {
      id: "1",
      title: "API Integration for Contact Form & CRM",
      description: "Integrated a custom contact form with Google Sheets and a CRM system, helping small businesses manage customer inquiries efficiently. Used Node.js and Express for seamless data handling.",
      imageUrl: Project1,
      techStack: ['CRM System,', 'React.js,',  'Axios'],
      features: ['Effortless Deployment', 'Clean & Modular Code', 'Customised Features'],
      isRight: true
    },
    {
      id: "2",
      title: "WordPress eCommerce Website for Local Store",
      description: "Created an easy-to-manage WooCommerce store for a local retail business. Optimized for fast loading, SEO, and mobile-friendly design.",
      imageUrl: Project1,
      techStack: ['WooCommerce,', 'Wordpress,', "Php,", "JavaScript", "html,", "css" ],
      features: ['Effortless Deployment', 'Clean & Modular Code', 'Customised Features'],
    },
    {
      id: "3",
      title: "Blog Website with SEO Optimization",
      description: "Built a MERN-stack blog website for a client who wanted to share industry insights. Implemented SEO-friendly features and a CMS for easy content updates.",
      imageUrl: Project1,
      techStack: ['React.js,', "Express.js,", "Node.js,", "MongoDB,", "REST Api"],
      features: ['Effortless Deployment', 'Clean & Modular Code', 'Customised Features'],
      isRight: true
    },
  ]