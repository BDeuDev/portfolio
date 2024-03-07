import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn/* , faNodeJs  */,} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

/* import { useEffect, useState } from 'react'; */
const Links= () => {
  const correoElectronico = 'bdeusich.dev@gmail.com';

  const abrirCorreo = () => {
    window.location.href = `mailto:${correoElectronico}`;
  };
  /* const icons = [faLinkedinIn, faNodeJs, faGithub];
  const [iconIndex, setIconIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [icons.length]); */
  {/* <FontAwesomeIcon icon={icons[iconIndex]}/> */ }
  return (
    <>
      <div className='flex flex-col fixed left-1 bottom-1 text-white bg-principal items-center justify-center rounded-xl z-40 mobile:p-1 cursor-pointer'>
        <a href="https://github.com/BDeuDev" target='blank'>
          <FontAwesomeIcon className='lg:p-3 text-5xl hover:scale-110' icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/bdeusich/" target='blank'>
          <FontAwesomeIcon className='lg:p-3 text-5xl hover:scale-110' icon={faLinkedinIn} />
        </a>
        <a onClick={abrirCorreo} target='blank'>
          <FontAwesomeIcon className='lg:p-3 text-5xl hover:scale-110 cursor-pointer' icon={faEnvelope} />
        </a>
      </div>
        
    </>
  )
}
export default Links