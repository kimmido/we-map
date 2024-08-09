import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMoreVertical } from "react-icons/fi";

const PlaceList = (props) => {
    const { places = [], selectedList } = props;
    
    return (
        <div className='PlaceList'>
            { places.map(place => (
                <div className='PlaceListItem' key={place.place_id}>
                    <Link 
                        to={`/place/${place.place_id}`}
                        state={{
                            id: place.place_id,
                            lat: place.lat,
                            lng: place.lng,
                            name: place.name,
                            phone: place.phone,
                            address: place.address,
                        }}>
                        <strong>{ place.name }</strong>
                        <address>{ place.address }</address>
                        <div className='reviews'>
                            <span>친구의 리뷰 { place.reviews[0].count }</span>
                            {
                                place.reviews.length != 0 && (
                                    <div>
                                        {place.reviews[0].text}
                                    </div> 
                                )
                            }
                        </div>
                    </Link>
                    <button className='listEditBtn'><FiMoreVertical /></button>
                </div>
            ))}
        </div>
    );
}

export default PlaceList;
