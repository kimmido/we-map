import React, { useEffect, useState, useCallback } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import MyListsBoard from './pages/MyListsBoard';
import SearchPage from './pages/SearchPage';
import './assets/css/variables.css';
import './assets/css/reset.css';
import './assets/css/App.css';


const { kakao } = window; // 함수형 컴포넌트에서 kakao를 window 전역 객체로 인지 시키기

function App() {
  // const [map, setMap] = useState(null);
  const [goalPosition, setGoalPosition] = useState(null);
  const [userPosition, setUserPosition] = useState(null);
  // const [locationError, setLocationError] = useState(null);

  useEffect(() => {
      goToUserPosition();
  }, [])
  
  // const goToUserPosition = useEffect(() => {
    //   findUserPosition();
    
    // }, []);

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

  const successLocation = useCallback((pos) => {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;

    const locPosition = new kakao.maps.LatLng(lat, lng);

    setUserPosition(locPosition);
    setGoalPosition(locPosition);
  }, [goToUserPosition]);

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


  const [markerPositions, setMarkerPositions] = useState([]);
  const markerPositions1 = [
    [33.452278, 126.567803],
    [33.452671, 126.574792],
    [33.451744, 126.572441]
  ];

  

  return (
    <div className="App">

      <div className='contentsBox'>
        
        <Routes>
          <Route path="/MyListsBoard" element={<MyListsBoard />} />
          <Route 
            path="/" 
            element={<Home goalPosition={goalPosition} markerPositions={markerPositions} goToUserPosition={goToUserPosition} />} />
          <Route path="/SearchPage" element={<SearchPage />} />
        </Routes>
      </div>

      <nav className='gnb'>
        <Link to={'/MyListsBoard'}>리스트</Link>
        <Link to={'/'}>홈</Link>
      </nav>
      {/* <button onClick={() => setMarkerPositions(markerPositions1)}>
          Marker Set 1
        </button> */}
    </div>
  );
}

export default App;
