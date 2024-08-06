import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { HiArrowSmallLeft } from "react-icons/hi2";

const BackButton = () => {
    const navigate = useNavigate();

    const navigateBack = useCallback(() => {
        navigate(-1);
    }, [])

    return (
        <div className='BackButton' onClick={navigateBack}>
            <HiArrowSmallLeft />
        </div>
    );
}

export default BackButton;
