import React from 'react';

interface ComponenteProps {
  children: string;
}

const SectionTitle: React.FC<ComponenteProps> = ({ children }) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-3xl text-white  mt-20 bg-principal mobile:ml-auto mobile:mr-auto p-4 rounded-xl hover:shadow-black cursor-pointer hover:underline font-extralight font-nunito'>{children}</h1>
    </div>
  );
};

export default SectionTitle;
