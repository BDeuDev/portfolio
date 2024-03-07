import React from 'react';

interface ComponenteProps {
  children: string;
  onClick: () => void;
  className?: string;
  showLine?: boolean;
}

const NavBar: React.FC<ComponenteProps> = ({ onClick, children, className, showLine }) => {
  return (
    <div className='mr-7 hover:scale-125'>
      <h1 onClick={onClick} className={`text-white p-4 m-1 cursor-pointer  text-xl  ${className}`}>
        {children}
        {showLine && <div className="h-1 w-full bg-white rounded-xl"></div>}
      </h1>
    </div>
  );
};

export default NavBar;