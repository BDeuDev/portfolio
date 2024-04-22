import React from 'react';

interface ComponenteProps {
  children: string;
}

const SectionTitle: React.FC<ComponenteProps> = ({ children }) => {
  return (
    <div className='flex flex-col justify-center  items-center'>
      <h1 className='text-3xl font-bold text-white  mt-20 bg-[#333333] mobile:ml-auto mobile:mr-auto p-4 rounded-xl shadow-md cursor-pointer   font-nunito '>{children}</h1>
    </div>
  );
};

export default SectionTitle;
