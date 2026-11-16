import image_me from "./assets/images/me.png";

const logotext = "Yogesh B.";
const meta = {
  title: "Yogesh Bhattarai",
  description:
    "I’m Yogesh Full Stack Developer _ Full stack devloper, How better would it be if eveything was in web ? I mean everything. Imagine",
};

const introdata = {
  title: "I’m Yogesh Bhattarai",
  animated: {
    first: "Did you know that every one is a developer now ?",
    second: "Well i guess we should start networking, i will design the web. ",
    third: "People call me spider. for a reason.",
  },
  description:
    "Everytime I go to sleep, I think of how I am going to imporve myself tomorrow.",
  your_img_url: image_me,
};

const dataabout = {
  title: "abit about my self",
  aboutme:
    "i know more about coffee than you. Download my resume for more.",
};
const worktimeline = [
];

const skills = [
  {
    name: "Node Js",
    value: 90,
  },
  {
    name: "Javascript",
    value: 99,
  },
  {
    name: "React",
    value: 99,
  },
  {
    name: "Java Spring",
    value: 99,
  },
  {
    name: "React Native",
    value: 99,
  },
  {
    name: "Jquery",
    value: 85,
  },
  {
    name: "UI Design",
    value: 80,
  },
];

const services = [
  {
    title: "Web Apps",
    description:
      "React Js, Node Js, Express, Mongo DB, MySQL, Oracle SQL and many More ",
  },
  {
    title: "UI & UX Design",
    description: "Tools :- Figma , Adobe XD , Photoshop , Illustrator",
  },
  {
    title: "Full stack Web and Mobile Application",
    description: "Frameworks : Next JS , Laravel , MERN ",
  },
  
];

const dataportfolio = [
  {
    name: "splitter-pool",
    description: "This is a simple app to manage your group expenses.",
    points: [
      "Active groups, with create group",
      "Active tabs, with create tab",
      "Each user stores contributed and withdrawn amounts",
    ],
    tags: ["React", "Express", "Prisma"],
    link: "https://github.com/uniquemozilla22/splitter-pool",
  },
  {
    name: "roomate",
    description: "Dashboard for groups, expenses, and balances.",
    points: [
      "Add expense, join group, and create group",
      "Groups use a code for joining",
      "Expenses split equal or custom",
      "Settlements when users settle debts",
    ],
    tags: ["React", "Firebase", "Postgres"],
    link: "https://github.com/uniquemozilla22/roomate",
  },
  {
    name: "package_tracker",
    description: "TrackIt. Enter a tracking number and see status on a map.",
    points: [
      "Shipping vendors: FedEx, UPS, DHL, USPS",
      "Status for the tracking number",
      "Map of the location",
      "Tracking history",
    ],
    tags: ["React", "Google Maps"],
    link: "https://github.com/uniquemozilla22/package_tracker",
  },
  {
    name: "Mero_Hospital",
    description: "The application is made on react native.",
    points: [
      "Booking an appointment",
      "Chatting with a doctor",
      "COVID data from the government of Nepal",
      "Admin can add doctors and categories",
    ],
    tags: ["React Native", "Expo"],
    link: "https://github.com/uniquemozilla22/Mero_Hospital",
  },
  {
    name: "Splitwise_PY",
    description:
      "This Python application provides a simple way to split an amount equally or sub-equally among participants in entries.",
    points: [
      "Equal split",
      "Sub-equal split",
      "Add participants",
      "Calculate split",
    ],
    tags: ["Python"],
    link: "https://github.com/uniquemozilla22/Splitwise_PY",
  },
  {
    name: "uniquemozilla22.github.io",
    description: "Personal website. This site.",
    points: [
      "Projects, about, and contact",
      "Contact form through EmailJS",
    ],
    tags: ["React"],
    link: "https://github.com/uniquemozilla22/uniquemozilla22.github.io",
  },
];

const contactConfig = {
  YOUR_EMAIL: "bhattaraiyogesh007@gmail.com",
  YOUR_FONE: "(929)4205785",
  description: "Coffee are the best, lets have a cup ?",
  YOUR_SERVICE_ID: process.env.REACT_APP_SERVICE_ID,
  YOUR_TEMPLATE_ID: process.env.REACT_APP_TEMPLETE_ID,
  YOUR_USER_ID: process.env.REACT_APP_PUBLIC_KEY,
};

const socialprofils = {
  github: "https://github.com/uniquemozilla22",
  twitter: "https://twitter.com/yogesh_creator",
  cv: "",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
