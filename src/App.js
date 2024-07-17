import './App.css';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import Map from './components/Map';


const { kakao } = window; // 함수형 컴포넌트에서 kakao를 window 전역 객체로 인지 시키기

function App() {
  // const [map, setMap] = useState(null);
  const [userPosition, setuserPosition] = useState({ lat: 33.450701, lng: 126.570667 });
  // const [locationError, setLocationError] = useState(null);

  useEffect(() => {
    goToUserPosition()
  }, [])
  
  const goToUserPosition = useCallback(() => {
    if (navigator.geolocation) { // geolocation을 지원한다면
      // getCurrentPosition: 첫 번째 인자 - 사용자의 위도, 경도 반환 / 요청이 실패했을 때 두 번째 인자 - PositionError객체 를 받는다
      navigator.geolocation.getCurrentPosition(
        (pos) => successLocation(pos), 
        (error) => errorLocation(error));
    }else{
      alert("현재 사용중이신 브라우저가 위치찾기 기능을 지원하지 않습니다.")
    }
  }, [])

  const successLocation = useCallback((pos) => {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;

    const locPosition = new kakao.maps.LatLng(lat, lng);

    setuserPosition(locPosition);
  }, []);

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


  // const goToUserPosition = useEffect(() => {
  //   console.log('위치 찾기')
  //   // 사용자의 위치 찾기
  //   // Geolocation API = navigator.gelocation
  //   if (navigator.geolocation) { // geolocation을 지원한다면
  //       // getCurrentPosition: 첫 번째 인자 - 사용자의 위도, 경도 반환 / 요청이 실패했을 때 두 번째 인자 - PositionError객체 를 받는다
  //       navigator.geolocation.getCurrentPosition(
  //         (pos) => successLocation(pos), 
  //         (error) => errorLocation(error));
  //   }else{
  //     alert("현재 사용중이신 브라우저가 위치찾기 기능을 지원하지 않습니다.")
  //   }

  //   // 위치 찾기 성공
  //   function successLocation(pos) {  // 성공했을때 실행
  //     const lat = pos.coords.latitude;
  //     const lng = pos.coords.longitude;

  //     const locPosition = new kakao.maps.LatLng(lat, lng)
  //     // ,message = '<div style="padding:5px;">여기에 계신가요?!</div>';
    
  //     setuserPosition(locPosition);
  //     console.log(lat, lng);
  //   // displayMarker(locPosition, message);
  //   }

  //   // 위치 찾기 실패
  //   function errorLocation(e) { // 실패했을때 실행
  //   let print;
  //   switch(e.code) {
  //     case e.PERMISSION_DENIED: // 1
  //     print = "이 문장은 사용자가 Geolocation API의 사용 요청을 거부했을 때 나타납니다!"
  //     break;

  //     case e.POSITION_UNAVAILABLE: // 2
  //     print = "이 문장은 가져온 위치 정보를 사용할 수 없을 때 나타납니다!"
  //     break;

  //     case e.TIMEOUT: // 3
  //     print = "이 문장은 위치 정보를 가져오기 위한 요청이 허용 시간을 초과했을 때 나타납니다!"
  //     break;

  //     case e.UNKNOWN_ERROR:
  //     print = "이 문장은 알 수 없는 오류가 발생했을 때 나타납니다!"
  //     break;
  //   }
  //   console.log(print);
  //   console.log(e.code, e.message);
  //   }
  // }, []);

  const [markerPositions, setMarkerPositions] = useState([]);
  const markerPositions1 = [
    [33.452278, 126.567803],
    [33.452671, 126.574792],
    [33.451744, 126.572441]
  ];
  const markerPositions2 = [
    [37.499590490909185, 127.0263723554437],
    [37.499427948430814, 127.02794423197847],
    [37.498553760499505, 127.02882598822454],
    [37.497625593121384, 127.02935713582038],
    [37.49629291770947, 127.02587362608637],
    [37.49754540521486, 127.02546694890695],
    [37.49646391248451, 127.02675574250912]
  ];
  

  return (
    <div className="App">
      <form className='searchboxform'>
        <input className='search' type='search' />
        <input className='submit' type='submit' />
      </form>
      <Map markerPositions={markerPositions} userPosition={userPosition} />
      <button onClick={() => setMarkerPositions(markerPositions1)}>
          Marker Set 1
        </button>
      <button className='userPositionBtn' onClick={goToUserPosition}></button>
      <div className='gnb'>
        <div className='container'>
          <div className='list'></div>
          <div className='home'></div>
          <div className='my'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
