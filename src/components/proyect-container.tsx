
import ProyectItem from './proyect-item';



const ProyectContainer = () => {



  const title = ['Leadergym', 'This portfolio']
  const techs = [["HTML5, CSS, JS", "NodeJs, Express.js", 'MySQL, NestJs', 'Git, GitHub', 'EJS (Embedded JavaScript)', 'JsonWebToken (JWT)', 'WebSockets (socket.io)', 'Hashing (bcrypt)'], ["TypeScript", "NodeJs", "ReactJs", 'TailwindCss', 'Vite', "Git, GitHub, GitPages"]]
  return (
    <>

      <div className='bg-secundario bg-opacity-90 w-6/12 flex flex-col p-6 rounded-xl gap-10 font-nunito shadow-2xl cursor-pointer hover:shadow-black'>
        <ProyectItem children={title[0]} width={100} techs={techs[0]} />
      </div>
    </>

  );
};

export default ProyectContainer;