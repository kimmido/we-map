import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Map from '../components/Map';
import '../assets/style/pages/Place.css'
import PlacePopup from './PlacePopup';
import SearchBar from '../components/SearchBar';

const { kakao } = window;

const Place = () => {
    const [ placePosition, setPlacePosition ] = useState(null);
    const [ searchPlaceInfo ] = useState(useLocation().state);
    
    useEffect(()=> {
        goToPlacePosition(searchPlaceInfo);
    }, [])

    const goToPlacePosition = useCallback((place)=> {
        const pos = new kakao.maps.LatLng(place.lat, place.lng);
        setPlacePosition(pos);
    }, [])

    return (
        <div className='Place'>
            <SearchBar
                displayText={searchPlaceInfo.name} />
            <Map goalPosition={placePosition} />
            <PlacePopup
                placeInfo={searchPlaceInfo} />
        </ div>
    );
}

export default Place;