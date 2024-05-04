import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedComponent = () => {
  const typedContainerRef = useRef(null);
  /*  const [isTyping, setIsTyping] = useState(true); */
  useEffect(() => {
    if (typedContainerRef.current) {
      const typed = new Typed(typedContainerRef.current, {
        startDelay: 700,
        strings: ['<i>Fullstack Developer</i>', '<i>Problem solver</i>', '<i>Self-taught programmer</i>'],
        typeSpeed: 50,
        backSpeed: 30,
        smartBackspace: true,
        showCursor: true,
        cursorChar: './',
        loop: true,



      });

      return () => {
        typed.destroy();
      };
    }
  }, /* [isTyping] */);



  return (
    <>
      <div className='inline-block text-2xl font-orbitron text-white content'>
        <h1 ref={typedContainerRef} className='inline-block text-2xl cursor-pointer ' />
      </div>

    </>
  )
};

export default TypedComponent;
