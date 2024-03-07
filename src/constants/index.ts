import {
    RxCrop,
    RxDesktop,
    RxPencil2,
    RxReader,
    RxRocket,
    RxAccessibility,
  } from "react-icons/rx";
  
  import image1 from "../assets/index.jpg";
  import image2 from "../assets/index2.jpg";
  import image3 from "../assets/register.jpg";
  import image4 from "../assets/login.jpg";
  import image5 from "../assets/admin.jpg";
  import image6 from "../assets/admin2.jpg";
  
  export const ServiceData = [
    {
      icon: RxCrop,
      title: "Development",
      content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
      backgroundImage: image1,
    },
    {
      icon: RxPencil2,
      title: "Branding",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: image2,
    },
    {
      icon: RxDesktop,
      title: "Design",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: image3,
    },
    {
      icon: RxReader,
      title: "Seo",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: image4,
    },
    {
      icon: RxAccessibility,
      title: "Management",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: image5,
    },
    {
      icon: RxRocket,
      title: "Production",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: image6,
    },
  ];
// el man usaba esto para mandar iconos que se yo para cada slide y yo pense ey y si lo uso para madnar text? y arrays con datos y nada mira como accedor a las cosas y osea ahora cada vez que tengo desde un index y mira cada vez que añada un pryecto nuevo mira esto

  export const proyects = [
    {
      title: "Leadergym",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      repo:"",
      url:"",
      techs:["HTML5, CSS, JS","NodeJs, Express.js",'MySQL, NestJs','Git, GitHub','EJS (Embedded JavaScript)','JsonWebToken (JWT)','WebSockets (socket.io)','Hashing (bcrypt)']
    },
    {
      title: "This Portfolio",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      repo:"https://github.com/BDeuDev/Portfolio-react-ts-vite",
      url:"https://bdeudev.github.io/Portfolio-react-ts-vite/",
      techs:['TypeScript','NodeJs','ReactJs','TailwindCss','Vite','Git', 'GitHub', 'GitPages']
      
    },
    
    {
      title: "Comming soon",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      repo:"",
      url:"",
      techs:["HTML5, CSS, JS","NodeJs, Express.js",'MySQL, NestJs','Git, GitHub','EJS (Embedded JavaScript)','JsonWebToken (JWT)','WebSockets (socket.io)','Hashing (bcrypt)']
      
    },
    
   
    
  ]