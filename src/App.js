import './App.css';
import { useEffect, useState } from 'react';
import Gnb from './components/Gnb';
import Map from './components/Map';


// 지도에 마커와 인포윈도우를 표시하는 함수입니다
// function displayMarker(locPosition, message) {

//   // 마커를 생성합니다
//   var marker = new kakao.maps.Marker({  
//       map: map, 
//       position: locPosition
//   }); 
  
//   var iwContent = message, // 인포윈도우에 표시할 내용
//       iwRemoveable = true;

//   // 인포윈도우를 생성합니다
//   var infowindow = new kakao.maps.InfoWindow({
//       content : iwContent,
//       removable : iwRemoveable
//   });
  
//   // 인포윈도우를 마커위에 표시합니다 
//   infowindow.open(map, marker);
  
//   // 지도 중심좌표를 접속위치로 변경합니다
//   map.setCenter(locPosition);      
// }   


function App() {
  // const [map, setMap] = useState(null);
  // const [position, setPosition] = useState({ lat: 33.450701, lng: 126.570667 });
  // const [locationError, setLocationError] = useState(null);
  
  // useEffect(() => {
  //   const container = document.getElementById('map'), //지도를 담을 영역의 DOM 레퍼런스
  //       options = { //지도를 생성할 때 필요한 기본 옵션
  //            center: new kakao.maps.LatLng(position.lat, position.lng), // 중심 좌표
  //            level: 3, // 줌 레벨
  //       };
     
  //   const mapInstance = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  //   setMap(mapInstance);

  //   userLocationCoords(mapInstance);

  //   // 사용자의 위치 찾기
  //   function userLocationCoords(map){
  //     // Geolocation API = navigator.gelocation
  //     if (navigator.geolocation) { // geolocation을 지원한다면
  //         // getCurrentPosition: 첫 번째 인자 - 사용자의 위도, 경도 반환 / 요청이 실패했을 때 두 번째 인자 - PositionError객체 를 받는다
  //         navigator.geolocation.getCurrentPosition(
  //           (pos) => successLocation(pos, mapInstance), 
  //           (error) => errorLocation(error));
  //     }else{
  //       alert("현재 사용중이신 브라우저가 위치찾기 기능을 지원하지 않습니다.")
  //     }
  //   }

  //   // 위치 찾기 성공
  //   function successLocation(pos, mapInstance) {  // 성공했을때 실행
  //     const lat = pos.coords.latitude;
  //     const lng = pos.coords.longitude;

  //     const locPosition = new kakao.maps.LatLng(lat, lng),
  //     message = '<div style="padding:5px;">여기에 계신가요?!</div>';
      
  //     setPosition({lat, lng})
  //     mapInstance.setCenter(locPosition);          
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

  const [visible, setVisible] = useState(true);

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
      <Map markerPositions={markerPositions} />
      <div className='location'></div>
      < Gnb />
    </div>
  );
}

export default App;
