import React from 'react';

interface ComponenteProps {
  children: string;
  id: string
  checked: boolean;
  onClick: () => void;
}

const Button: React.FC<ComponenteProps> = ({ id, children, checked, onClick }) => {
  return (
    <div className='flex flex-row font-nunito  border rounded p-0 mb-5'>
      <h2 className='text-black m-3'>{children}</h2>
      <div className="flex items-center">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onClick={onClick}
          className="hidden" // Oculta el input por defecto
        />
        <label
          htmlFor={id}
          className={`${checked ? 'bg-blue-500' : 'bg-gray-300'
            } relative inline-block w-10 h-5 rounded-full transition-colors duration-300 ease-in-out cursor-pointer`}
        >
          <span
            className={`${checked ? 'translate-x-6' : 'translate-x-0'
              } inline-block w-4 h-4 bg-white rounded-full transform transition-transform duration-300 ease-in-out`}
          ></span>
        </label>

      </div>
    </div>
  );
};

export default Button;