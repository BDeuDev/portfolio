import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn/* , faNodeJs  */, } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

/* import { useEffect, useState } from 'react'; */
const Links = () => {
  const correoElectronico = 'bdeusich.dev@gmail.com';

  const abrirCorreo = () => {
    window.location.href = `mailto:${correoElectronico}`;
  };
  const style = 
    'p-3 text-5xl transition-all duration-1000 ease-in-out transform hover:scale-110 text-white bg-black rounded-full hover:text-black hover:bg-white  hover:shadow-xl'
  
  return (
 
      <div className='flex flex-row items-center justify-center mt-5'>
        <a href="https://github.com/BDeuDev" target='blank' className=' m-4 '>
          <FontAwesomeIcon className={style} icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/bdeusich/" target='blank' className=' m-4'>
          <FontAwesomeIcon className={style} icon={faLinkedinIn} />
        </a>
        <a onClick={abrirCorreo} target='blank' className='m-4 cursor-pointer'>
          <FontAwesomeIcon className={style} icon={faEnvelope} />
        </a>
      </div>


  )
}
export default Links