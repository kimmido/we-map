import React, { useState } from 'react';
import PlacesList from './PlacesList';

function MyLists() {

    return (
        <div className='MyLists' style={{background: '#ddd', zIndex: '20'}}>
            <div className='MyListItem'>
                <span className='icon'></span>
                <strong>내 목록1</strong>
            </div>
            <div className='MyListItem'>
                <span className='icon'></span>
                <strong>내 목록1</strong>
            </div>
            <div className='MyListItem'>
                <span className='icon'></span>
                <strong>내 목록1</strong>
            </div>
            <div className='MyListItem'>
                <span className='icon'></span>
                <strong>내 목록1</strong>
            </div>
        </div>
    );
}

export default MyLists;
