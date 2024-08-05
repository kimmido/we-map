import React, { useEffect, useLayoutEffect, useState } from 'react';
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

async function getUser(name) {
  let { data: user, error } = await supabase
  .from('users')
  .select('*')
  .eq('name', name);
  
  if(error) console.log(error);

  return user[0];
}

async function getUserList(userId) {
  let { data: lists, error } = await supabase
  .from('lists')
  .select('*, places(*), reviews(*)')
  .or(`master.eq.${userId}, members.cs.{${userId}}`)

  if(error) console.log(error);

  return lists;
}

const App = () => {
  const [user, setUser] = useState({});
  const [userLists, setUserLists] = useState([]);
  
  useEffect(() => {
    getUser('동글이')
      .then((user) => {
        setUser(user);
        return getUserList(user.id);
      })
      .then((lists) => { 
        setUserLists(lists);
      })
      .catch((err) => console.log(err))
  }, []);
  
  useEffect(()=> {
    console.log(user);
  }, [user]);
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
              user={user}
              userLists={userLists} />
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
