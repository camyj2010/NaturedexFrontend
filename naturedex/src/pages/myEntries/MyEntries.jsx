import React from 'react';
import EntriesHeader from '../../components/EntriesHeader';
import FloatingButton from '../../components/FloatingButton';
import MyEntriesCSS from './MyEntries.module.css';

const MyEntries = () => {

    return (
      <div className={MyEntriesCSS.myEntriesContainer}>
        <EntriesHeader />
        <FloatingButton />
      </div>
    );
  };
  
  export default MyEntries;