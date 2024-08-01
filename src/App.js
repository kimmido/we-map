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
import { supabase } from './utils/supabaseClient';

function App() {
  const [countries, setCountries] = useState([]);
  const [refresh, setRefresh] = useState(false);
  
  useEffect(() => {
    dataBase();
  }, []);

  async function dataBase() {
    let { data: user, error } = await supabase
    .from('user')
    .select('*');

    setCountries(user);
    console.log(countries);
  }

  async function recodeHandler() {
    const { data, error } = await supabase
    .from('page')
    .insert([
      { title: prompt('title?'), body: prompt('body?') },
    ]);
    setRefresh(!refresh);
  }

  const USER_DATA = {
    id: 'USER_1',
    name: '동글이',
    lists_id: [ '001', '002' ]
  };

  const LIST_DATA = [
    {
      id: '001',
      master: 'USER_1',
      member: 'USER_2, USER_3',
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
            phone: "1544-1122",
            review: [
              {
                master: 'USER_2',
                image: '',
                text: '카라멜 팝콘 맛있었음'
              },
              {
                master: 'USER_1',
                image: '',
                text: '난 콜라'
              }
            ]
        },
        {
            id: "218343539",
            lat: "37.5034906075971",
            lng: "127.027843960692",
            name: "스머프매직포레스트",
            address: "서울 강남구 역삼동 616-14",
            phone: "02-564-1114",
            review: []
        }
      ]
    },
    {
      id: '002',
      master: 'USER_1',
      member: 'USER_2',
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
            phone: "1544-1122",
            review: []
        }
      ]
    },
    {
      id: '003',
      master: 'USER_2',
      member: 'USER_3',
      title: '제주도 여행',
      count: 1,
      icon: 'yellow',
      places: [
        {
            id: "1343234260",
            lat: "33.2342237172834",
            lng: "126.484132005678",
            name: "강정중국집",
            address: "제주특별자치도 서귀포시 강정동 2881-19",
            phone: "1544-1122",
            review: []
        }
      ]
    }
  ];

  useEffect(() => {

  })

  const [listData] = useState(LIST_DATA);
  const [userData] = useState(USER_DATA);
  const userLists = LIST_DATA.filter(list => userData.lists_id.includes(list.id));

  return (
    <div className="App">
      <Routes>

        <Route 
          path="/mylists" 
          element={
            <MyListsBoard 
              userLists={userLists} />
          } 
        />

        <Route 
          path="/placelist/:placelistId" 
          element={
            <PlacesListView 
              userData={userData}
              listData={listData}
              userLists={userLists} />
          } 
        />

        <Route 
          path="/" 
          element={
            <Home userLists={userLists} />
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
