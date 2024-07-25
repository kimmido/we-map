import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Map from '../components/Map';
import '../assets/style/pages/Place.css'
import PlacePopup from '../components/PlacePopup';
import { FaArrowLeft } from "react-icons/fa";

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
            <Link to={'/search'}><FaArrowLeft /></Link>
            <Map goalPosition={placePosition} />
            <PlacePopup
                placeInfo={searchPlaceInfo} />
        </ div>
    );
}

export default Place;