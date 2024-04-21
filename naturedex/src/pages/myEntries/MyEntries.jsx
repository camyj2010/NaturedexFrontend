import React, { useState } from 'react';
import EntriesHeader from '../../components/EntriesHeader';
import Sidebar from '../../components/Sidebar';
import FloatingButton from '../../components/FloatingButton';
import MyEntriesCSS from './MyEntries.module.css';
import PhotosList from '../../components/PhotosList';

const MyEntries = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={MyEntriesCSS.myEntriesContainer}>
            <EntriesHeader isOpen={isOpen} toggleSidebar={toggleSidebar} />
            {isOpen && <Sidebar onClose={toggleSidebar} />}
            <FloatingButton />
						<PhotosList />
        </div>
    );
};

export default MyEntries;