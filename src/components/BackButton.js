import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
    const navigate = useNavigate();

    const navigateBack = useCallback(() => {
        navigate(-1);
    }, [])

    return (
        <div className='BackButton' onClick={navigateBack}>
            <FaArrowLeft />
        </div>
    );
}

export default BackButton;
