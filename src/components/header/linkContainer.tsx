import React from 'react';
interface linkContainerProps {
    click:boolean;
}
const LinkContainer:React.FC<linkContainerProps> = ({click}) => {
  return (
    <div className={`flex flex-col items-center justify-center xl:hidden lg:hidden z-50 fixed bg-white top-12 w-full h-[1000px]  transition-transform ease-in-out duration-[1.5s] transform  ${!click ? 'translate-x-[25%]' : 'translate-x-full'}`}>
       <h2>hola</h2>
    </div>
  );
};

export default LinkContainer;