import React from 'react';

const Modal = ({ children }) => {

    return (
        <div className='Modal'>
            <div className='modalContent'>
                { children }
            </div>
        </div>
    );
}

export default Modal;