import { useState } from "react";
import Proyecto from "./proyect"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
function Proyects() {
  const [isListVisible, setListVisible] = useState(false);
  const handleButtonClick = () => {
    setListVisible(!isListVisible);
  };
  return (
    <>
      <section className="w-3/12 border-l border-gray-500 " >
        <div className="flex flex-col items-center justify-center mt-5 ">
          <h1 className="text-white text-2xl bg-secundario p-4 rounded-xl shadow-md hover:shadow-lg">{'Proyectos'}</h1>
          <div className="bg-zinc-800 cursor-pointer text-white" onClick={handleButtonClick}>
            <FontAwesomeIcon icon={faArrowDown} />
          </div>
          {isListVisible && <Proyecto />}

        </div>
      </section>
    </>
  )
}
export default Proyects