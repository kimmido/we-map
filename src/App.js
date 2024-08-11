import React, { useEffect, useReducer, useState } from 'react';
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
import { getUser, getUserList, getPlaces, getFollowList } from './utils/supabaseFatch';

const ACTION_TYPE = {

}

const userListsReducer = (state, { type, payload }) => {
  switch (type) {
    case 'CREATE':
      return payload
      
    case 'INSERT': {
      const { master, list_id, title, icon_color } = payload;
      return [...state, {
        master,
        list_id,
        title,
        icon_color, 
        place_ids: [],
        members: [],
      }]
    }

    case 'UPDATE': {
      const { list_id, title, icon_color } = payload;
      return state.map(list => (
        list.list_id === list_id ? {...list, title, icon_color} : list
      ))
    }

    case 'DELETE':
      const { list_id } = payload;
      return state.filter(list => list.list_id != list_id)
  
    default: 
      return state;
  }
}

const App = () => {
  const [userId] = useState('05007f84-c3ca-4a60-8080-94b4ab9952e4');
  const [user, setUser] = useState({});
  const [Lists, setLists] = useState([]);
  const [places, setPlaces] = useState([]);
  const [userLists, userListsDispatch] = useReducer(userListsReducer, []);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const [user, lists] = await Promise.all([getUser(userId), getUserList(userId)]);
        
        const placeIdArr = lists.reduce((arr, list) => arr.concat(list.place_ids), []);
        const places = await getPlaces(placeIdArr);
        
        if (!isMounted) return;
        console.group('data fatch');
        console.table(lists);
        console.table(places);
        console.groupEnd('data fatch');
        
        setUser(user);
        setLists(lists);
        setPlaces(places)
      } catch (err) {
        console.error('fetchData() 에러');
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [userId]);


  useEffect(() => {
    const newLists = Lists.map((list) => {
      if(list.place_ids.length === 0) return list; 

      list.places = places.filter(place => list.place_ids.includes(place.place_id));
      return list;
    })
    
    userListsDispatch({ type: 'CREATE', payload: newLists })
  }, [Lists, places])


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
              user={user}
              userLists={userLists}
              userListsDispatch={userListsDispatch} />
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
