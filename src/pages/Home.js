import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Map from '../components/Map';
import { TiLocationArrow } from "react-icons/ti";

const { kakao } = window; // 함수형 컴포넌트에서 kakao를 window 전역 객체로 인지 시키기

function Home(props) {
    const { markerPositions } = props;
    const [goalPosition, setGoalPosition] = useState(null);

    useEffect(() => {
        goToUserPosition();
    }, [])

    const goToUserPosition = useCallback(() => {
        if (navigator.geolocation) { // geolocation을 지원한다면
        navigator.geolocation.getCurrentPosition(
            (pos) => { // 위치 찾기 성공{위도, 경도}
            const lat = pos.coords.latitude;
            const lng = pos.coords.longitude;

            const locPosition = new kakao.maps.LatLng(lat, lng);
            
            setGoalPosition(locPosition);
            }, 
            (error) => {errorLocation(error)})
        }else{
        alert("현재 사용중이신 브라우저가 위치찾기 기능을 지원하지 않습니다.")
        }
    }, [])

    const errorLocation = useCallback((e) => {
        let print;
        switch(e.code) {
        case e.PERMISSION_DENIED: // 1
        print = "이 문장은 사용자가 Geolocation API의 사용 요청을 거부했을 때 나타납니다!"
        break;

        case e.POSITION_UNAVAILABLE: // 2
        print = "이 문장은 가져온 위치 정보를 사용할 수 없을 때 나타납니다!"
        break;

        case e.TIMEOUT: // 3
        print = "이 문장은 위치 정보를 가져오기 위한 요청이 허용 시간을 초과했을 때 나타납니다!"
        break;

        case e.UNKNOWN_ERROR:
        print = "이 문장은 알 수 없는 오류가 발생했을 때 나타납니다!"
        break;
        }
        console.log(print);
        console.log(e.code, e.message);
    }, [goToUserPosition]);
    
    return (
        <div className='Home'>
            <Link className='SearchEntry' to={'/SearchPage'}>검색창</Link>
            <Map goalPosition={goalPosition} markerPositions={markerPositions} />
            <button className='userPositionBtn' onClick={goToUserPosition}><TiLocationArrow /></button>
        </div>
    );
}

export default Home;
