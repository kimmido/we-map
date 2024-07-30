import { useEffect, useState, useRef, useCallback } from 'react';
import '../assets/style/components/Map.css';

const { kakao } = window;

const Map = (props) => {
  const { goalPosition, userLists } = props;
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState(null);
  const mapContainerRef = useRef(null);
  
  useEffect(() => {  
    const options = {
      center: new kakao.maps.LatLng(37.50802, 127.062835),
      level: 3
    };
    const kakaoMap = new kakao.maps.Map(mapContainerRef.current, options);
    setMap(kakaoMap);
    console.log('d');
  }, []);
  
  // 목표 위치로 이동
  useEffect(() => {
    if (map === null) {
      return;
    }
    map.setCenter(goalPosition);
    
    const marker = new kakao.maps.Marker({
      position: goalPosition
    });
    marker.setMap(map);
    // displayLocationMarkers(userLists);
}, [goalPosition]);



  // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
  // marker.setMap(null);  

  // 마커 표시 영역으로 이동
  // const displayLocationMarkers = useCallback((userLists) => {
  //   if (map === null) {
  //     return;
  //   }
  //   // 좌표 저장
  //   const positions = data.map( idx => 
  //     idx.places.map( place => 
  //       new kakao.maps.LatLng(place.lat, place.lng)
  //     ));
  //   console.log(positions);
 
  //   // marker들을 저장하여 리렌더링
  //   setMarkers(markers => {
  //     // clear prev markers
  //     markers.forEach(marker => marker.setMap(null));

  //     // assign new markers
  //     return positions.map(
  //       position => new kakao.maps.Marker({ map: map, position })
  //     );
  //   });

 
  //   let bounds = new kakao.maps.LatLngBounds() // 초기값
  //   // latlng = positon[0], positon[1], ...
  //   // bounds = [...bounds, latlng[0], latlng[1], ...]
  //   if (positions.length > 0) {
  //     const bounds = positions.reduce(
  //       (bounds, latlng) => bounds.extend(latlng),
  //       new kakao.maps.LatLngBounds()
  //     );

  //     // 주어진 영역을 화면 안에 나타내기
  //     map.setBounds(bounds);
  //   }
  // }, [map]);


  return (
    <div className="Map">
      <div className="mapContainer" ref={mapContainerRef}/>
    </div>
  );
}

export default Map;