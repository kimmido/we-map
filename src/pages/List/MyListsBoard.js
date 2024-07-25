import React, { useState } from 'react';
import '../../assets/style/pages/MyListsBoard.css'

import MyLists from './MyLists';
import Gnb from '../../components/Gnb';

function MyListsBoard() {
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

    return (
        <div className='MyListsBoard'>
            <div className='contentsBoxWithGnb'>
                <h2>내 목록</h2>
                <div className='container'>
                    <button className='listInsertBtn'>새 목록</button>
                    <MyLists
                        userData={userData} />
                </div>
            </div>
            <Gnb />
        </div>
    );
}

export default MyListsBoard;
