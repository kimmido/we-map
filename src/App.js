import React, { useEffect, useRef, useState } from 'react';
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
import { getUser, getUserList, getReviews } from './utils/supabaseJS';
import { supabase } from './utils/supabaseClient';
import { RealtimeLists } from './utils/supabaseRealtime';


const App = () => {
  const [user, setUser] = useState({});
  const [userLists, setUserLists] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [userId] = useState('05007f84-c3ca-4a60-8080-94b4ab9952e4');
  const listsId = useRef([]);
  

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const [user, lists ,reviewArr] = await Promise.all([getUser(userId), getUserList(userId), getReviews(userId)]);
        
        if (!isMounted) return;

        
        let reviews = [];
        reviewArr.map(idx => 
          reviews = [...reviews, ...idx.reviews]
        )
        lists.map(list => 
          listsId.current = [...listsId.current, list.list_id]
        )
        
        setReviews(reviews);
        setUser(user);
        setUserLists(lists);

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
    RealtimeLists(listsId.current);
  }, [])
  
  // useEffect(()=> {
  //   console.log(user);
  // }, [user]);
  // useEffect(()=> {
  //   console.log(userLists);
  // }, [userLists]);


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
          path="/placelist/:placelistId" 
          element={
            <PlacesListView
              user={user}
              userLists={userLists} />
          } 
        />

        <Route
          path='/place/:placeId'
          element={
          <Place
            reviews={reviews}
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
