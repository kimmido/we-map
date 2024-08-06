import React, { useState, useEffect } from 'react';
import '../../assets/style/pages/List.css'
import MyLists from './MyLists';
import Gnb from '../../components/Gnb';

const MyListsBoard = (props) => {
    const { userLists, setUserLists, updateList } = props;
    console.log(userLists);

    return (
        <div className='MyListsBoard'>
            <div className='contentsBoxWithGnb'>
                <h2>내 목록</h2>
                <div className='container'>
                    <button className='listInsertBtn'>새 목록</button>
                    <MyLists 
                        userLists={userLists}
                        setUserLists={setUserLists}
                        updateList={updateList} />
                </div>
            </div>
            <Gnb />
        </div>
    );
}

export default MyListsBoard;
