import React from 'react';
import PopUpCSS from './PopUp.module.css';

const PopUp = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={PopUpCSS.modalOverlay}>
      <div className={PopUpCSS.modal}>
        <button className={PopUpCSS.closeButton} onClick={onClose}>
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
        </button>
        <p>Would you like to take a picture or to upload an image?</p>
        <div className={PopUpCSS.buttonContainer}>
        <button className={PopUpCSS.confirmButton}>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="49"  height="49"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-camera-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 20h-7a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v3.5" /><path d="M12 16a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" /><path d="M19 22v-6" /><path d="M22 19l-3 -3l-3 3" /></svg>
            <p>Take a Picture</p>
          </button>
          <button className={PopUpCSS.cancelButton}>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="49"  height="49"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-upload"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 9l5 -5l5 5" /><path d="M12 4l0 12" /></svg>
            <p>Upload Image</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;