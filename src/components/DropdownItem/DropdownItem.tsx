import React, { useState } from 'react';
import './DropdownItem.scss';

interface DropdownItemProps {
  label: string;
  children: React.ReactNode;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="vertical-nav__item vertical-nav__dropdown">
      <button
        className="vertical-nav__dropdown-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <span className="vertical-nav__chevron">{isOpen ? '▼' : '▶'}</span>
      </button>
      {isOpen && children}
    </li>
  );
};

export default DropdownItem;
