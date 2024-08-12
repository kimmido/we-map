import React, { useEffect } from 'react';
import { IoHeartCircle } from "react-icons/io5";
import { TiLocation } from "react-icons/ti";
import { TbExternalLink } from "react-icons/tb";
import PlaceList from './PlaceList';



const PlacesListPopup = (props) => {
    const { selectedList = {}, user } = props; 

    return (
        <div className='PlacesListPopup'>
            <IoHeartCircle className='listIcon' style={{color: selectedList.icon_color}} />
            <div>
                {/* <button><TbExternalLink /></button> */}
                <h2>{selectedList.title}</h2>
                <div style={{padding: '12px'}}>
                    <span>
                        <TiLocation />
                        {   selectedList.places? 
                            selectedList.places.length : 0 
                        }
                    </span>
                    <span>{user.name}의 목록</span>
                </div>
            </div>
            <PlaceList 
                selectedList={selectedList}
                places={selectedList.places} />
        </div>
    );
}

export default PlacesListPopup;