import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface SkillItemProp {
  icon: IconDefinition
  className: string
  name: string
}
const SkillItem: React.FC<SkillItemProp> = ({ icon, className, name }) => {
  return (
    <>
      <div className=' rounded-lg m-6 flex flex-col 6/12 '>
        <div className="relative inline-block  ">
          <div className="icon-container transition-transform transform-none hover:transform hover:translate-y-[-5px] hover:scale-110 ">

            <FontAwesomeIcon icon={icon} className={`${className}  text-6xl p-4 bg-black rounded-lg max-w-10 max-h-14  scale-125 hover:shadow-white cursor-pointer `} />
            <div className='flex flex-col items-center justify-center'>
              <p className=' text-black mt-2 font-bold'>{name}</p>
            </div>

          </div>
        </div>

      </div>
    </>
  );
};

export default SkillItem;