import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Map from '../components/Map';
import '../assets/style/pages/Place.css'
import PlacePopup from './PlacePopup';
import SearchBar from '../components/SearchBar';

const { kakao } = window;

const Place = () => {
    const [ placePosition, setPlacePosition ] = useState(null);
    const [ placeInfo ] = useState(useLocation().state);
    
    useEffect(()=> {
        goToPlacePosition(placeInfo);
        console.log(placeInfo);
    }, [])

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
                placeInfo={placeInfo} />
        </ div>
    );
}

export default Place;