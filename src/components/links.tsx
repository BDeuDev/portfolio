import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faNodeJs } from '@fortawesome/free-brands-svg-icons';

import { useEffect, useState } from 'react';
function Links() {
  const icons = [faLinkedinIn, faNodeJs, faGithub];
  const [iconIndex, setIconIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [icons.length]);
  {/* <FontAwesomeIcon icon={icons[iconIndex]}/> */ }
  return (
    <>
      <div className='flex flex-col fixed left-1 bottom-1 text-white bg-principal items-center justify-center rounded-xl '>
        <a href="https://github.com/BDeuDev" target='blank'>
          <FontAwesomeIcon className='p-5 text-5xl' icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/bdeusich/" target='blank'>
          <FontAwesomeIcon className='p-5 text-5xl' icon={faLinkedinIn} />
        </a>
      </div>

    </>
  )
}
export default Links