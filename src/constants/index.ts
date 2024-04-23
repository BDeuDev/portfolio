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
      title: "Ecommerce",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      repo:"https://github.com/BDeuDev/ecommerce",
      url:"",
      techs:["React", "NodeJs", "ExpressJs","Typescript","MySQL", "Sequelize",'Git, GitHub']
      
    },
    {
      title: "Leadergym",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      repo:"",
      url:"",
      techs:["HTML5, CSS, JS","NodeJs, Express.js",'MySQL, NestJs','Git, GitHub','EJS (Embedded JavaScript)','JsonWebToken (JWT)','WebSockets (socket.io)','Hashing (bcrypt)']
    },
    {
      title: "Task Manager",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      repo:"https://github.com/BDeuDev/taskManager",
      url:"",
      techs:["React", "NodeJs", "ExpressJs","Typescript","MySQL", "Sequelize",'Git, GitHub']
      
    },
    
    {
      title: "This Portfolio",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      repo:"https://github.com/BDeuDev/Portfolio-react-ts-vite",
      url:"https://bdeudev.github.io/Portfolio-react-ts-vite/",
      techs:['TypeScript','NodeJs','ReactJs','TailwindCss','Vite','Git', 'GitHub', 'GitPages']
      
    },
    
    
    
   
    
  ]
  export const about = "Descubri programacion hace unos meses y desde ese momento decidi aprender por mi cuenta, debido a que lo encuentro divertido, me encanta sentarme diariamente a programar, ver que nuevos desafios puedo hallar y como resolverlos, actualmente soy fullstack pero estoy interesado en especializarme en Backend. Soy entusiasta en aprender cosas nuevas y compartir mis conocimientos o descubrimientos."
  export const aboutEn = "I embarked on my programming journey just a few months ago, and since then, I've been determined to learn on my own because I find it enjoyable. I love dedicating time each day to coding, exploring new challenges, and finding solutions. Currently, I work as a full-stack developer, but my interest lies in specializing in backend development. I am passionate about learning new things and enjoy sharing my knowledge and discoveries."



