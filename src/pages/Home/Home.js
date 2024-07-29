import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Map from '../../components/Map';
import Gnb from '../../components/Gnb';
import { TiLocationArrow } from "react-icons/ti";
import SearchBar from '../../components/SearchBar';

const { kakao } = window; // 함수형 컴포넌트에서 kakao를 window 전역 객체로 인지 시키기

function Home(props) {
    const [ userPosition, setUserPosition ] = useState(null);

    useEffect(() => {
        goToUserPosition();
    }, [])

    const goToUserPosition = useCallback(() => {
        console.log("home.js callback");
        if (navigator.geolocation) { // geolocation을 지원한다면
        navigator.geolocation.getCurrentPosition(
            (pos) => { // 위치 찾기 성공{위도, 경도}
            const lat = pos.coords.latitude;
            const lng = pos.coords.longitude;

            const locPosition = new kakao.maps.LatLng(lat, lng);
            
            setUserPosition(locPosition);
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
    }, []);

    return (
        <div className='Home'>
            <div className='contentsBoxWithGnb'>
                <Link to={'/search'}>
                    <SearchBar />
                </Link>
                <Map goalPosition={userPosition} />
                <button className='userPositionBtn' onClick={goToUserPosition}><TiLocationArrow /></button>
            </div>
            <Gnb />
        </div>
    );
}

export default Home;
