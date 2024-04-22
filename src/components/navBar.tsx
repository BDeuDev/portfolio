import React from 'react';

interface ComponenteProps {
  children: string;
  onClick: () => void;
  className?: string;
  showLine?: boolean;
}

const NavBar: React.FC<ComponenteProps> = ({ onClick, children, className, showLine }) => {
  return (
    <div className='mr-7 '>
      <h1 onClick={onClick} className={`text-black p-4 m-1 cursor-pointer font-bold text-xl  ${className}`}>
        {children}
        {showLine && <div className="h-[2px] w-full bg-black rounded-xl"></div>}
      </h1>
    </div>
  );
};

export default NavBar;