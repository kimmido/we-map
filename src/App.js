import './App.css';
import { useEffect, useState } from 'react';
import Gnb from './components/Gnb';

const { kakao } = window; // 함수형 컴포넌트에서 kakao를 window 전역 객체로 인지 시키기


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

  
  useEffect(() => {
    const container = document.getElementById('map'), //지도를 담을 영역의 DOM 레퍼런스
        options = { //지도를 생성할 때 필요한 기본 옵션
             center: new kakao.maps.LatLng(33.450701, 126.570667), // 중심 좌표
             level: 3, // 줌 레벨
        };
     
    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    userLocationCoords();

    // 사용자의 위치 찾기
    function userLocationCoords(){
      // Geolocation API = navigator.gelocation
      if (navigator.geolocation) { // geolocation을 지원한다면
          // getCurrentPosition: 첫 번째 인자 - 사용자의 위도, 경도 반환 / 요청이 실패했을 때 두 번째 인자 - PositionError객체 를 받는다
          navigator.geolocation.getCurrentPosition(successLocation, errorLocation);
      }else{
        alert("현재 사용중이신 브라우저가 위치찾기 기능을 지원하지 않습니다.")
      }
    }

    // 위치 찾기 성공
    function successLocation(position) {  // 성공했을때 실행
      const locPosition = new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude),
          message = '<div style="padding:5px;">여기에 계신가요?!</div>';

      map.setCenter(locPosition);          
    // displayMarker(locPosition, message);
    }

    // 위치 찾기 실패
    function errorLocation(e) { // 실패했을때 실행
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
    }

  }, []);

  return (
    <div className="App">
      <div id="map">
        <div className='location'></div>
      </div>
      < Gnb />
    </div>
  );
}

export default App;
