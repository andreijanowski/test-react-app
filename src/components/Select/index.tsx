import React, { useMemo, useRef } from 'react';
import clsx from 'clsx';
import usePopup from '../../hooks/usePopup';
import Icon from "../Icon";

interface Option {
  label: string | number;
  value: string | number;
}

interface SelectProps {
  options: Option[];
  placeholder?: string;
  value?: string | number;
  onChange?: (val: any) => void;
  className?: string;
}

const Select: React.FC<SelectProps> = ({
  options = [],
  placeholder = 'Select Option',
  value,
  onChange,
  className,
}) => {
  const ref = useRef(null);
  const { isOpen, toggleMenu, closeMenu } = usePopup(ref);

  const selectedOption = useMemo(() => {
    return options.find((item) => item.value === value);
  }, [options, value]);

  const handleClick = (option: Option) => {
    onChange && onChange(option.value);
    closeMenu();
  }

  return (
    <div className={clsx(className)}>
      <div className="relative w-full" ref={ref}>
        <div
          className="capitalize cursor-pointer h-11 py-2 px-4 pr-10 text-white rounded-lg bg-yellow-500 flex items-center"
          onClick={toggleMenu}
        >
          {
            selectedOption ? selectedOption.label : placeholder
          }
          <Icon
            icon="chevron-down"
            className={clsx('absolute transform top-1/2 -translate-y-2/4 right-4 text-white', isOpen ? 'transform rotate-180' : '')}
          />
        </div>
        <div className={clsx('absolute top-14 bg-gray-100 left-0 min-w-full z-10 shadow-lg border text-left rounded-lg transition-all duration-150 ease-in', isOpen ? 'max-h-80 overflow-auto py-3' : 'opacity-0 max-h-0 overflow-hidden py-0')}>
          {
            options.map((option, index) => (
              <div
                key={index}
                className="capitalize py-2 px-4 hover:bg-gray-200 cursor-pointer whitespace-nowrap text-yellow-700 text-sm"
                onClick={() => handleClick(option)}
              >
                {option.label}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Select;
