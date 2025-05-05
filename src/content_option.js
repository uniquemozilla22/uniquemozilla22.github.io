import weatheAPI from "./assets/images/weatheAPI.png";
import rms from "./assets/images/rms.png";
import fexal from "./assets/images/fexal.png";
import canvas from "./assets/images/canvas.png";
import shally from "./assets/images/shally.png";
import merHealth from "./assets/images/MeroHealth.png";
import ag from "./assets/images/agallery.png";
import chatapplication from "./assets/images/chatapplication.png";
import Rental_Image from "./assets/images/bike-rental.png";
import image_me from "./assets/images/me.png";
import cv from "./assets/CV.pdf.pdf";

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
    img: merHealth,
    desctiption: "Mero Health Application (React Native)",
    link: "https://github.com/uniquemozilla22/Mero_Hospital",
  },
  {
    img: shally,
    desctiption: "Shally Web Design (React Js) - Digital Nepal Pvt Ltd",
    link: "https://github.com/uniquemozilla22/Shally_web_design",
  },
  {
    img: chatapplication,
    desctiption: "Chat Application",
    link: "https://github.com/uniquemozilla22/nextjs-whatsapp",
  },
  {
    img: ag,
    desctiption: "Art Gallery Client & Supplier (React JS) - AITC Pvt Ltd",
    link: "https://github.com/uniquemozilla22/art_ecommerce_frontend_react",
  },
  {
    img: merHealth,
    desctiption: "Mero Health Backend ( Node JS )",
    link: "https://github.com/uniquemozilla22/Mero_Hospital",
  },
  {
    img: Rental_Image,
    desctiption: "Bike Rental Application",
    link: "https://github.com/uniquemozilla22/Bike_rental_System",
  },

  {
    img: canvas,
    desctiption: "Application to compile and draw the shape in canvas (C#)",
    link: "https://github.com/uniquemozilla22/Code_line_to_Draw",
  },

  {
    img: fexal,
    desctiption: "Fexal E-commerce mock",
    link: "https://blissful-mestorf-251970.netlify.app/",
  },
  {
    img: weatheAPI,
    desctiption: "Weather App ( React Js)",
    link: "https://github.com/uniquemozilla22/WeatherApp_API",
  },
  {
    img: rms,
    desctiption:
      "Restaurant Management System (React Native, TypeScript, NodejS)",
    link: "https://github.com/uniquemozilla22/RMS_backend",
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
  linkedin: "https://linkedin.com/in/yogesh-bhattarai-6b1112178/",
  twitter: "https://twitter.com/yogesh_creator",
  cv: cv,
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
