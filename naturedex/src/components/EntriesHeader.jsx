import React from 'react';
import EntriesHeaderCSS from './EntriesHeader.module.css';

const EntriesHeader = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={EntriesHeaderCSS.header}>
      <div className={EntriesHeaderCSS.menuIcon} onClick={toggleSidebar}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M4 20h16"/>
          <path d="M4 12h16"/>
          <path d="M4 4h16"/>
        </svg>
      </div>
      <h1>Naturedex</h1>
      {/* <div className={EntriesHeaderCSS.searchIcon}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/>
          <path d="M21 21l-6 -6"/>
        </svg>
      </div> */}
    </div>
  );
};

export default EntriesHeader;