import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Map from '../components/Map';
import '../assets/style/pages/Place.css'
import PlacePopup from './PlacePopup';
import SearchBar from '../components/SearchBar';
import { getPlaceReviews, getUser } from '../utils/supabaseJS';

const { kakao } = window;

const Place = ({ user, listsId, userLists }) => {
    const [ placePosition, setPlacePosition ] = useState(null);
    const [ placeInfo ] = useState(useLocation().state);
    // const [ placeReviews, setPlaceReviews] = useState([]);
    const [ reviewsInfo, setReviewsInfo] = useState([]);
    
    useEffect(()=> {
        goToPlacePosition(placeInfo);
        
        
        getPlaceReviews(placeInfo.id, listsId)
            .then(data => {
                console.log(data)
                setReviewsInfo(data);
            }).catch((error) => {
                console.log(error);
            })

        return () => {
        };
    }, [placeInfo, listsId])
    

    const goToPlacePosition = useCallback((place)=> {
        const pos = new kakao.maps.LatLng(place.lat, place.lng);
        setPlacePosition(pos);
    }, [])

    return (
        <div className='Place'>
            <SearchBar
                displayText={placeInfo.name} />
            <Map goalPosition={placePosition} />
            <PlacePopup
                reviewsInfo={reviewsInfo}
                placeInfo={placeInfo} />
        </ div>
    );
}

export default Place;