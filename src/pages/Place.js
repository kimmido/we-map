import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Map from '../components/Map';
import '../assets/style/pages/Place.css'
import PlacePopup from './PlacePopup';
import SearchBar from '../components/SearchBar';
import { getCurrentPlaceReviews } from '../utils/supabaseFatch';

const { kakao } = window;

const Place = ({ user, userLists }) => {
    const [ placePosition, setPlacePosition ] = useState(null);
    const [ reviews, setReviews] = useState([]);
    const { id, lat, lng, name, phone, address } = useLocation().state;
    
    useEffect(()=> {
        goToPlacePosition(lat, lng);        
    
        const listIdArr = userLists.map(list => list.list_id);
        
        getCurrentPlaceReviews(id, listIdArr)
            .then(data => {
                setReviews(data);
            }).catch((error) => {
                console.log(error);
            })

        return () => {
        };
    }, [userLists])
    

    const goToPlacePosition = useCallback((lat, lng)=> {
        const pos = new kakao.maps.LatLng(lat, lng);
        setPlacePosition(pos);
    }, [])

    return (
        <div className='Place'>
            <SearchBar
                displayText={name} />
            <Map goalPosition={placePosition} />
            <PlacePopup
                user={user}
                id={id}
                reviews={reviews}
                name={name}
                address={address}
                phone={phone} />
        </ div>
    );
}

export default Place;