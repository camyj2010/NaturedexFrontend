import React, { useContext } from 'react';
import SidebarCSS from './Sidebar.module.css';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {

  const { user, isUserAuthenticated, logout } = useContext(UserContext);
  const navigate = useNavigate();
  //console.log(user)
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className={isOpen ? `${SidebarCSS.sidebar} ${SidebarCSS.open}` : SidebarCSS.sidebar}>
      <div className={SidebarCSS.closeicon} onClick={onClose}>
        <svg  xmlns="http://www.w3.org/2000/svg"  width="42"  height="42"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M5 12l4 4" /><path d="M5 12l4 -4" /></svg>
      </div>
      <button className={SidebarCSS.closeButton} onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Sidebar;