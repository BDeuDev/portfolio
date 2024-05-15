import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Menu = () => {
  return (
    <div className='fixed top-0 right-0  w-[50px] h-auto flex flex-col items-center justify-center'>
      <FontAwesomeIcon icon={faBars} className='text-5xl'/>
    </div>
  );
};

export default Menu;