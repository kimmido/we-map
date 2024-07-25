import React, { useState } from 'react';

const PlacePopUp = (props) => {
    const { placeInfo } = props;

    return (
        <div className='PlacePopUp'>
            <strong>{ placeInfo.name }</strong>
            <p>{ placeInfo.address }</p>
            <p>{ placeInfo.phone }</p>
        </div>
    );
}

export default PlacePopUp;
