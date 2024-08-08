import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiArrowSmallLeft } from "react-icons/hi2";

const BackButton = () => {
    const navigate = useNavigate();

    const navigateBack = useCallback(() => {
        navigate(-1);
    }, [])

    return (
        <div className='BackButton' onClick={navigateBack}>
            <div className='BackButtonIcon'>
                <HiArrowSmallLeft />
            </div>
        </div>
    );
}

export default BackButton;
