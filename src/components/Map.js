import { useEffect, useState, useRef, useCallback } from 'react';

const { kakao } = window;

const Map = ({ goalPosition , selectedList }) => {
  const [, setMarkers] = useState([]);
  const mapContainer = useRef(null);
  
  useEffect(() => {
    goalPosition && gotoGoalPosition(goalPosition);
  }, [goalPosition]);
  
  useEffect(() => {
    selectedList && displayListMarkers(selectedList);
  }, [selectedList])
  
  
  const createMap = useCallback(() => {
    const options = {
      center: new kakao.maps.LatLng(37.50802, 127.062835),
      level: 3
    };
    const kakaoMap = new kakao.maps.Map(mapContainer.current, options);
    
    return kakaoMap;
  }, [])
  

  const gotoGoalPosition = useCallback((pos) => {
    const marker = new kakao.maps.Marker({ position: pos });
    const map = createMap();
    
    map.setCenter(pos);
    marker.setMap(null);
    marker.setMap(map);
  }, [])

  
  const displayListMarkers = useCallback((selectedList) => {
    const map = createMap();
    console.log(selectedList.places)

    if(!selectedList.places) return;
    // 좌표 저장
    const positions = selectedList.places.map(place => new kakao.maps.LatLng(place.lat, place.lng));

    // marker들을 저장하여 리렌더링
    setMarkers(markers => {
      // clear prev markers
      markers.forEach(marker => marker.setMap(null));

      // assign new markers
      return positions.map(
        position => new kakao.maps.Marker({ map: map, position })
      );
    });

    // let bounds = new kakao.maps.LatLngBounds() // 초기값
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
  }, [])

  return (
    <div className="Map">
      <div className="mapContainer" ref={mapContainer}/>
    </div> 
  );
}

export default Map;