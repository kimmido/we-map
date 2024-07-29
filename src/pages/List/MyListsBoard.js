import React from 'react';
import '../../assets/style/pages/MyListsBoard.css'

import MyLists from './MyLists';
import Gnb from '../../components/Gnb';

function MyListsBoard(props) {
    const { userLists } = props;

    return (
        <div className='MyListsBoard'>
            <div className='contentsBoxWithGnb'>
                <h2>내 목록</h2>
                <div className='container'>
                    <button className='listInsertBtn'>새 목록</button>
                    <MyLists 
                        userLists={userLists}/>
                </div>
            </div>
            <Gnb />
        </div>
    );
}

export default MyListsBoard;
