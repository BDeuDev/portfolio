import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';

const MyTypedComponent = () => {
  const typedContainerRef = useRef(null);
  const [isTyping, setIsTyping] = useState(true);
  useEffect(() => {
    if (typedContainerRef.current) {
      const typed = new Typed(typedContainerRef.current, {
        startDelay:700,
        strings: ['<i>Fullstack Developer</i>', '<i>Problem solver</i>','<i>Self-taught programmer</i>' ],
        typeSpeed: 50,
        backSpeed: 30,
        smartBackspace: true,
        showCursor: true,
        cursorChar: './',
        loop:true,
        
        
        
      });
      
       return () => {
        typed.destroy();
      }; 
    }
  }, [isTyping]);

  

  return (
    <>
        <div className='inline-block text-4xl'>
            <h2 ref={typedContainerRef} className='inline-block text-4xl cursor-pointer'/>
        </div>
        
    </>
  )
};

export default MyTypedComponent;
