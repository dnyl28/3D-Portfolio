import {
  github,
  resume,
  linkedin,
  css,
  bootstrap,
  expressjs,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  powerbi,
  python3,
  reactjs,
  tailwind,
  threejs,
  microsoft,
  headstarter,
  buggcy,
  learnive,
  inventory,
  investation,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];


const services = [
  {
    title: "GitHub",
    icon: github,
    link: "https://github.com/dnyl28/"
  },
  {
    title: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/idaniyalahmad/"
  },
  {
    title: "Resume",
    icon: resume,
    link: "https://drive.google.com/file/d/1st_cYH6VJySRhKj7FxQ6MY1N214CuQRI/view?usp=sharing"
  },
];


const technologies = [
  {
    name: "Python3",
    icon: python3,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Bootstrap 5",
    icon: bootstrap,
  },
  {
    name: "Tailwind Css",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express Js",
    icon: expressjs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Software Engineering Fellow",
    company_name: "Headstarter AI",
    icon: headstarter,
    iconBg: "#00E4B3",
    date: "July 2024 - September 2024",
    points: [
      "Building 5+ Al apps and APIs using NextJS, OpenAl, Pinecone, StripeAPI with 98% accuracy as seen by 1000 users.",
      "Developing projects from design to deployment leading 4+ engineering fellows using MVC design patterns.",
      "Getting coached by Amazon, Bloomberg and Capital One engineers on Agile, CI/CD, Git and microservice patterns.",
      "Participating in weekly mock coding interviews and hackathons.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "BUGGCY",
    icon: buggcy,
    iconBg: "#1E3A8A",
    date: "July 2023 - September 2023",
    points: [
      "Developed and managed the real-world projects, showcasing proficiency in the MERN (MongoDB, Express.js, React.js, Node.js) stack to deliver an innovative and efficient user experience.",
      "I collaborated closely with design and product teams to enhance the user interface, resulting in a 20% improvement in user experience.",
      "I actively took part in daily stand-up meetings and sprint planning, ensuring smooth project advancement and on-time deliveries.",
    ],
  },
  {
    title: "Microsoft Learn Student Ambassador",
    company_name: "Microsoft",
    icon: microsoft,
    iconBg: "#FFFFFF",
    date: "November 2023 - January 2024",
    points: [
      "Mentoring peers on Microsoft technologies and cloud services, organizing workshops, and guiding students on leveraging Azure and other Microsoft tools.",
      "Collaborating with Microsoft engineers to learn best practices in cloud computing, software development, and AI-based solutions, implementing these skills in real-world projects.",
      "Hosting webinars and workshops to educate students and local communities on cutting-edge technologies like Microsoft Azure, AI, and Version Controlling.",
      "Participating in exclusive ambassador events and hackathons, enhancing skills in development and deployment, and promoting Microsoft's vision for the future of technology.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Daniyal proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Daniyal does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Daniyal optimized our website, our traffic increased by 30%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];


const projects = [
  {
    name: "Learnive",
    description:
      "An interactive e-learning platform designed to empower learners through tailored courses, expert-led sessions, and collaborative learning experiences. Built to enhance knowledge sharing with a user-friendly interface and dynamic content delivery.",
    tags: [
      {
        name: "Nextjs",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "gemini",
        color: "blue-text-gradient",
      },
    ],
    image: learnive,
    live_link: "https://learnive.co",
  },
  {
    name: "Inventory Pro",
    description:
      "An efficient inventory management platform designed to streamline stock control. ProInventory offers real-time tracking and a user-friendly interface, empowering businesses with automated restocking and multi-location management. Simplify inventory processes and stay ahead.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: inventory,
    source_code_link: "https://github.com/dnyl28/Inventory-Pro.git",
    live_link: "https://proinventory.netlify.app/login",
  },
  {
    name: "Investation",
    description:
      "Developed a smart platform facilitating entrepreneurs and investors in launching businesses and addressing community needs, using MVC architecture with Node.js and EJS for dynamic content. Integrated OpenAI API to provide personalized investor recommendations, enhancing premium plan.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "MongoDb",
        color: "orange-text-gradient",
      },
      {
        name: "OpenAI",
        color: "pink-text-gradient",
      },
    ],
    image: investation,
    source_code_link: "https://github.com/dnyl28/Investation",
  },
];

export { services, technologies, experiences, testimonials, projects };
