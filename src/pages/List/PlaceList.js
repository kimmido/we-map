import React from 'react';
import { Link } from 'react-router-dom';
import { FiMoreVertical } from "react-icons/fi";

const PlaceList = (props) => {
    const { places = [], selectedList } = props;

    return (
        <div className='PlaceList'>
            {
                places.map(place => (
                    <div className='PlaceListItem' key={place.id}>
                        <Link 
                            to={`/place/${place.id}`}
                            state={{
                                id: place.id,
                                lat: place.lat,
                                lng: place.lng,
                                name: place.name,
                                phone: place.phone,
                                address: place.address,
                                reviews: place.reviews
                            }}>
                            <strong>{ place.name }</strong>
                            <address>{ place.address }</address>
                            <span>친구의 리뷰{ place.reviews.length }</span>
                        </Link>
                        <button className='listEditBtn'><FiMoreVertical /></button>
                    </div>
        ))
            }
        </div>
    );
}

export default PlaceList;
