import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import MyListsBoard from './pages/List/MyListsBoard';
import SearchPage from './pages/Home/SearchPage';
import Place from './pages/Place';
import './assets/style/variables.css';
import './assets/style/reset.css';
import './assets/style/App.css';
import PlacesListView from './pages/List/PlacesListView';



function App() {
  const userData = {
    user_id: 'USER1',
    user_lists: [
      {
        id: 1,
        title: '역삼동',
        count: 2,
        icon: 'blue',
        places: [
          {
              id: "10811159",
              lat: "37.5016573944824",
              lng: "127.026391177132",
              name: "CGV 강남",
              address: "서울 강남구 역삼동 814-6",
              phone: "1544-1122"
          },
          {
              id: "218343539",
              lat: "37.5034906075971",
              lng: "127.027843960692",
              name: "스머프매직포레스트",
              address: "서울 강남구 역삼동 616-14",
              phone: "02-564-1114"
          }
        ]
      },
      {
        id: 2,
        title: '제주도 여행',
        count: 1,
        icon: 'red',
        places: [
          {
              id: "1343234260",
              lat: "33.2342237172834",
              lng: "126.484132005678",
              name: "강정중국집",
              address: "제주특별자치도 서귀포시 강정동 2881-19",
              phone: "1544-1122"
          }
        ]
      }
    ] 
  };
  // const [markerPositions, setMarkerPositions] = useState([]);
  // const markerPositions1 = [
  //   [33.452278, 126.567803],
  //   [33.452671, 126.574792],
  //   [33.451744, 126.572441]
  // ];

  return (
    <div className="App">

      <Routes>
        <Route 
          path="/mylists" 
          element={<MyListsBoard />} />

        <Route 
          path="/placelist/:placelistId" 
          element={<PlacesListView />} />

        <Route 
          path="/" 
          element={<Home />} />
        
        <Route
          path='/place/:placeId'
          element={<Place />} />
          
        <Route 
          path="/search" 
          element={<SearchPage />} />
      </Routes>
      {/* <div className='contentsBox'> */}
      {/* </div> */}

      {/* <Gnb /> */}
      {/* <button onClick={() => setMarkerPositions(markerPositions1)}>
          Marker Set 1
        </button> */}
    </div>
  );
}

export default App;
