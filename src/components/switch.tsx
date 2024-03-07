import React from 'react';

interface ComponenteProps {
  checked: boolean;
  onClick: () => void;
}

const SwitchToggle: React.FC<ComponenteProps> = ({ checked, onClick }) => {


  //Pasar logica a settings solo dejar las props de este lado
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id="toggleSwitch"
        checked={checked}
        onClick={onClick}
        className="hidden" // Oculta el input por defecto
      />
      <label
        htmlFor="toggleSwitch"
        className={`${checked ? 'bg-blue-500' : 'bg-gray-300'
          } relative inline-block w-10 h-5 rounded-full transition-colors duration-300 ease-in-out cursor-pointer`}
      >
        <span
          className={`${checked ? 'translate-x-6' : 'translate-x-0'
            } inline-block w-4 h-4 bg-white rounded-full transform transition-transform duration-300 ease-in-out`}
        ></span>
      </label>

    </div>
  );
};

export default SwitchToggle;