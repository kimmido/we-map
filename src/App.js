import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import MyListsBoard from './pages/List/MyListsBoard';
import SearchPage from './pages/Home/SearchPage';
import Place from './pages/Place';
import './assets/style/variables.css';
import './assets/style/reset.css';
import './assets/style/App.css';
import PlacesListView from './pages/List/PlacesListView';
import { supabase } from "./utils/supabaseClient";

async function getUserInfo(name) {
  try {
    let { data: user, error } = await supabase
    .from('users')
    .select('*')
    .eq('name', name);
    
    return user[0];
    
  } catch(error) {
    console.log(error);
  }
}

async function getUserList(USER_ID) {
  try {
    let { data: lists, error } = await supabase
    .from('lists')
    .select('*')
    .or(`master.eq.${USER_ID}, members.cs.{${USER_ID}}`)

    return lists;

  } catch(error) {
    console.log(error);
  }
}

const App = () => {
  const [user, setUser] = useState(null);
  const [userLists, setUserLists] = useState([]);
  
  useEffect(() => {
    getUserInfo('동글이')
      .then((user) => {
        setUser(user);
        return getUserList(user.id);
      })
      .then(list => setUserLists(list))
      .catch(() => console.log('사용자 조회 실패'))
  }, []);

  useEffect(()=> {
    console.log(userLists);
  }, [userLists]);


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
              user={user} />
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
          element={<Place />} />
          
        <Route 
          path="/search" 
          element={<SearchPage />} />
      
      </Routes>
    </div>
  );
}

export default App;
