import React, { useState } from 'react';
import { IoHeartCircle } from "react-icons/io5";
import { TiLocation } from "react-icons/ti";
import { FiMoreVertical } from "react-icons/fi";
import { TbExternalLink } from "react-icons/tb";
import PlaceList from './PlaceList';

const PlacesListPopup = (props) => {
    const { selectedListData, userData } = props;

    return (
        <div className='PlacesListPopup'>
            <IoHeartCircle className='listIcon' style={{color: selectedListData.icon}} />
            <div>
                <button><TbExternalLink /></button>
                <h2>{selectedListData.title}</h2>
                <span><TiLocation />{selectedListData.count}</span>
                <span>{userData.name}의 목록</span>
            </div>
            <PlaceList places={selectedListData.places} />
        </div>
    );
}

export default PlacesListPopup;