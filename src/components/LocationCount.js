import React from 'react';
import { TiLocation } from "react-icons/ti";

const LocationCount = ({count}) => {

    return (
        <div className='LocationCount'>
            <TiLocation className='countIcon' />
            { count }
        </div>
    );
}

export default LocationCount;
