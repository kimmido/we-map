import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Map from '../components/Map';
import '../assets/style/pages/Place.css'

const { kakao } = window;

const Place = (props) => {
    // const { goalPosition, setGoalPosition } = props;
    const searchPlaceInfo = useLocation().state;
    const [ placePosition, setPlacePosition ] = useState(null);
    // console.log(searchPlaceInfo);'
    // useEffect(()=> {
    //     gotoPlacePosition(searchPlaceInfo);
    // }, [])

    const gotoPlacePosition = useCallback((place)=> {
        if(place) {
            const pos = new kakao.maps.LatLng(place.lat, place.lng);
            console.log(place);
            // setPlacePosition(pos);
            console.log("아");
            // setGoalPosition(locPosition);
        }
    }, [])

    
    return (
        <div className='Place'>
            <h1>장소 보여주기</h1>
            <Map goalPosition={placePosition} />
        </div>
    );
}

export default Place;