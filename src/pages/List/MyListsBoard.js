import React, { useState } from 'react';
import PlacesList from './PlacesList';
import '../../assets/style/MyListsBoard.css'
import { FiMoreVertical } from "react-icons/fi";
import { TiLocation } from "react-icons/ti";

function MyListsBoard() {

    return (
        <div className='MyListsBoard'>
            <div className='container'>
                <h2>내 목록</h2>
                <button className='listInsertBtn'>새 목록</button>
                <div className='MyList'>
                    <span className='listIcon'></span>
                    <div className='listInfo'>
                        <strong className='listName'>내 목록1</strong>
                        <span className='listCount'><TiLocation />6</span>
                    </div>
                    <button className='listEditBtn'><FiMoreVertical /></button>
                </div>
            </div>
        </div>
    );
}

export default MyListsBoard;
