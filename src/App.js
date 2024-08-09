import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import MyListsBoard from './pages/MyLists/MyListsBoard';
import SearchPage from './pages/Home/SearchPage';
import PlacesListView from './pages/PlacesList/PlacesListView';
import Place from './pages/Place';
import './assets/style/variables.css';
import './assets/style/reset.css';
import './assets/style/App.css';
import './assets/style/components/Components.css';
import { getUser, getUserList, getPlaces } from './utils/supabaseJS';
import { RealtimeLists } from './utils/supabaseRealtime';


const App = () => {
  const [user, setUser] = useState({});
  const [userLists, setUserLists] = useState([]);
  const [listsId, setListId] = useState([]);
  const [places, setPlaces] = useState([]);
  const [userId] = useState('05007f84-c3ca-4a60-8080-94b4ab9952e4');
  

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const [user, lists] = await Promise.all([getUser(userId), getUserList(userId)]);
        
        const placeIdArr = lists.reduce((arr, list) => arr.concat(list.place_ids), []);
        const places = await getPlaces(placeIdArr);
        
        if (!isMounted) return;
        // console.log(lists);
        // console.log(places);
        
        setUser(user);
        setUserLists(lists);
        setPlaces(places)
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [userId]);


  useEffect(() => {
    let listIdArr = userLists.map(list => list.list_id);

    setListId(listIdArr);
    RealtimeLists(listIdArr);
  }, [userLists])


  return (
    <div className="App">
      <Routes>

        <Route 
          path="/" 
          element={
            <Home userLists={userLists} />
          } 
        />
        
        <Route 
          path="/mylists" 
          element={
            <MyListsBoard 
              userLists={userLists}
              setUserLists={setUserLists} />
          } 
        />

        <Route 
          path="/placeList/:placeListId" 
          element={
            <PlacesListView
              places={places}
              user={user}
              userLists={userLists} />
          } 
        />

        <Route
          path='/place/:placeId'
          element={
          <Place
            user={user}
            listsId={listsId}
            userLists={userLists} />
          }
        />
          
        <Route 
          path="/search" 
          element={<SearchPage />} />
      
      </Routes>
    </div>
  );
}

export default App;
