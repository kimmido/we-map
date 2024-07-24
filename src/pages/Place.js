import React, { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Map from '../components/Map';
import '../assets/style/pages/Place.css'

const { kakao } = window;

const Place = (props) => {
    const { goalPosition, setGoalPosition } = props;
    const searchPlaceInfo = useLocation().state;
    // console.log(searchPlaceInfo);

    const gotoPlacePosition = useCallback((place)=> {
        if(place) {
            const locPosition = new kakao.maps.LatLng(place.lat, place.lng);
            console.log(locPosition);
            setGoalPosition(locPosition);
        }
    }, [])

    
    return (
        <div className='Place'>
            <h1 onClick={gotoPlacePosition(searchPlaceInfo)}>장소 보여주기</h1>
            <Map />
        </div>
    );
}

export default Place;