import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import Button from './button';
import { useState } from 'react';
import Particles1 from './particles';

interface SettingsProps {
  // Puedes definir las propiedades del componente aquí si las tienes
}

const Settings: React.FC<SettingsProps> = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isAnimated, setIsAnimated] = useState(true)

  return (
    <>
      <div className='flex flex-col fixed right-5 bottom-1 text-black bg-transparent items-center justify-center rounded-xl cursor-pointer hover:scale-110 z-40'>

        <FontAwesomeIcon
          icon={faCogs}
          className='p-2 text-5xl'
          onClick={() => setIsVisible(!isVisible)}
        />
      </div>
      {isVisible && (
        <div className=' z-50 flex flex-col items-center justify-center w-2/12 bg-white fixed right-28 bottom-20 rounded-xl border border-black transition-opacity duration-500 ease-in-out opacity-100'>
          <h1 className='text-2xl text-black p-5'>Configuración</h1>
          <Button id='toggle1'
            onClick={() => setIsAnimated(!isAnimated)}
            children={'Animacion'}
            checked={isAnimated}
          />

        </div>
      )}
      {isAnimated && <Particles1 />}

    </>
  );
};

export default Settings;
