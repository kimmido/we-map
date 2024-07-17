import { useEffect, useState, useRef } from 'react';
import './Map.css';

const { kakao } = window; // 함수형 컴포넌트에서 kakao를 window 전역 객체로 인지 시키기

function Map(props) {
  const { markerPositions, userPosition } = props;
  const [, setMarkers] = useState([]);
  const [map, setMap] = useState(null);

  const container = useRef(null);

  useEffect(() => {  
    const options = {
      center: new kakao.maps.LatLng(37.50802, 127.062835),
      level: 3
    };
    const map = new kakao.maps.Map(container.current, options);
    setMap(map);
  }, []);

  useEffect(() => {
    if (map === null) {
      return;
    }
    map.setCenter(userPosition);
  }, [userPosition]);
  
  useEffect(() => {
    if (map === null) {
      return;
    }
    
    // 좌표 저장
    const positions = markerPositions.map(pos => new kakao.maps.LatLng(...pos));

    // marker들을 저장하여 리렌더링
    setMarkers(markers => {
      // clear prev markers
      markers.forEach(marker => marker.setMap(null));

      // assign new markers
      return positions.map(
        position => new kakao.maps.Marker({ map: map, position })
      );
    });


    // bounds = new kakao.maps.LatLngBounds() 초기값
    // latlng = positon[0], positon[1], ...
    // bounds = [...bounds, latlng[0], latlng[1], ...]
    if (positions.length > 0) {
      const bounds = positions.reduce(
        (bounds, latlng) => bounds.extend(latlng),
        new kakao.maps.LatLngBounds()
      );

      // 주어진 영역을 화면 안에 나타내기
      map.setBounds(bounds);
    }
  }, [map, markerPositions]);


  return (
    <div className="Map">
      <div id="container" ref={container} style={{
        widows: '100%',
        height: '100%',
        background: '#ccc',
      }}/>
    </div>
  );
}

export default Map;
