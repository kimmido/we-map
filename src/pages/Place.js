import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Map from '../components/Map';
import '../assets/style/pages/Place.css'

const { kakao } = window;

const Place = () => {
    // const { goalPosition, setGoalPosition } = props;
    const searchPlaceInfo = useRef();
    searchPlaceInfo.current = useLocation().state;
    const [ placePosition, setPlacePosition ] = useState(null);

    console.log(searchPlaceInfo.current);

    useEffect(()=> {
        goToPlacePosition(searchPlaceInfo.current);
    }, [])

    const goToPlacePosition = useCallback((place)=> {
        const pos = new kakao.maps.LatLng(place.lat, place.lng);
        setPlacePosition(pos);

        console.log(place);
        console.log(pos);
        console.log("goToPlacePosition");
    }, [])

    
    return (
        <div className='Place'>
            <h1>장소 보여주기</h1>
            <Map goalPosition={placePosition} />
        </div>
    );
}

export default Place;