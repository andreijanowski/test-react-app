import React from 'react';
import clsx from "clsx";

interface Option {
  label: string | number;
  value: string | number;
}

interface IButtonGroupProps {
  options: Option[];
  value: string | number;
  onChange: any;
}

const ButtonGroup: React.FC<IButtonGroupProps> = ({ options, value, onChange }) => {
  return (
    <div className="flex">
      {
        options.map((option, index) => (
          <button
            className={clsx('border border-yellow-500 w-10 h-10 focus:outline-none', value === option.value ? 'bg-yellow-500 text-white' : '')}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </button>
        ))
      }
    </div>
  );
};

export default ButtonGroup;
