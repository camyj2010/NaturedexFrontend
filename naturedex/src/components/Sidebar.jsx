import React, { useEffect } from 'react';
import SidebarCSS from './Sidebar.module.css';

const Sidebar = ({ isOpen, onClose }) => {
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && event.target.closest(`.${SidebarCSS.sidebar}`) === null) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div className={isOpen ? `${SidebarCSS.sidebar} ${SidebarCSS.open}` : SidebarCSS.sidebar}>
      <button className={SidebarCSS.closeButton} onClick={onClose}>Log out</button>
    </div>
  );
};

export default Sidebar;