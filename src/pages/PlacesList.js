import React, { useState } from 'react';
import Map from '../components/Map';

function PlacesList() {

    return (
        <>
        <Map />
        <div className='PlacesList'>
            <div className='PlaceListItem'>
                <img alt='장소이름' />
                <strong>장소 이름</strong>
            </div>
        </div>
        </>
    );
}

export default PlacesList;
