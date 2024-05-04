import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Links = () => {
  const correoElectronico = 'bdeusich.dev@gmail.com';

  const abrirCorreo = () => {
    window.location.href = `mailto:${correoElectronico}`;
  };
  const style = 
    'p-3 text-3xl transition-all duration-1000 ease-in-out transform hover:scale-110 text-white glassmorphism-link rounded-full hover:text-black hover:bg-white  hover:shadow-xl z-10'
  
  return (
 
      <div className='flex flex-row items-center justify-center mt-5 '>
        <a href="https://github.com/BDeuDev" target='blank' className=' m-4 '>
          <FontAwesomeIcon className={style} icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/bdeusich/" target='blank' className=' m-4'>
          <FontAwesomeIcon className={style} icon={faLinkedinIn} />
        </a>
        <button onClick={abrirCorreo} className='m-4 cursor-pointer'>
          <FontAwesomeIcon className={style} icon={faEnvelope} />
        </button>
      </div>


  )
}
export default Links