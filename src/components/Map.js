import { useEffect, useState, useRef } from 'react';

const { kakao } = window; // 함수형 컴포넌트에서 kakao를 window 전역 객체로 인지 시키기

function Map(props) {
  const { markerPositions, size } = props;
  const [kakaoMap, setKakaoMap] = useState(null);
  const [, setMarkers] = useState([]);

  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=326e38503f420e1f0088dab1f46dc0c7&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        const center = new kakao.maps.LatLng(37.50802, 127.062835);
        const options = {
          center,
          level: 3
        };
        const map = new kakao.maps.Map(container.current, options);
        //setMapCenter(center);
        setKakaoMap(map);
      });
    };
  }, [container]);

  useEffect(() => {
    container.current.style.width = `100%`;
    container.current.style.height = `100%`;
  }, [])

  useEffect(() => {
    if (kakaoMap === null) {
      return;
    }

    // save center position
    const center = kakaoMap.getCenter();

    // relayout and...
    kakaoMap.relayout();
    // restore
    kakaoMap.setCenter(center);
  }, [kakaoMap]);

  useEffect(() => {
    if (kakaoMap === null) {
      return;
    }

    const positions = markerPositions.map(pos => new kakao.maps.LatLng(...pos));

    setMarkers(markers => {
      // clear prev markers
      markers.forEach(marker => marker.setMap(null));

      // assign new markers
      return positions.map(
        position => new kakao.maps.Marker({ map: kakaoMap, position })
      );
    });

    if (positions.length > 0) {
      const bounds = positions.reduce(
        (bounds, latlng) => bounds.extend(latlng),
        new kakao.maps.LatLngBounds()
      );

      kakaoMap.setBounds(bounds);
    }
  }, [kakaoMap, markerPositions]);


  return (
    <div className="Map">
      <div id="container" ref={container} />;
    </div>
  );
}

export default Map;
