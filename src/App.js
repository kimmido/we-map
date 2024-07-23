import React, { useEffect, useState, useCallback } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import MyListsBoard from './pages/List/MyListsBoard';
import SearchPage from './pages/SearchPage';
import Place from './pages/SearchPage';
import './assets/style/variables.css';
import './assets/style/reset.css';
import './assets/style/App.css';



function App() {
  
  // const [markerPositions, setMarkerPositions] = useState([]);
  // const markerPositions1 = [
  //   [33.452278, 126.567803],
  //   [33.452671, 126.574792],
  //   [33.451744, 126.572441]
  // ];

  return (
    <div className="App">

      <div className='contentsBox'>
        <Routes>
          <Route 
            path="/MyListsBoard" 
            element={<MyListsBoard />} />

          <Route 
            path="/" 
            element={<Home />}>
          </Route>
          
          <Route
            path='/search/place'
            elemen={<Place />}>
          </Route>
            
          <Route 
            path="/SearchPage" 
            element={<SearchPage />} />

          <Route 
            path="/Place" 
            element={<Place />} />
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
