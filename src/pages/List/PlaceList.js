import React from 'react';
import { Link } from 'react-router-dom';

const PlaceList = (props) => {
    const { places = [] } = props;

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
                                address: place.address
                            }}>
                            <strong>{ place.name }</strong>
                            <address>{ place.address }</address>
                            {/* <span>친구의 리뷰{ place.review.length }</span> */}
                        </Link>
                    </div>
                ))
            }
        </div>
    );
}

export default PlaceList;
