import React, { useState, useEffect } from 'react';
import '../../assets/style/pages/MyListsBoard.css'
import MyLists from './MyLists';
import Gnb from '../../components/Gnb';
import { supabase } from '../../utils/supabaseClient';

function MyListsBoard(props) {
    const [userLists, setUserList] = useState([]);
    
    useEffect(() => {
        getUserList();
    }, []);
    
    async function getUserList() {
        const USER_ID = "05007f84-c3ca-4a60-8080-94b4ab9952e4";
        let { data, error } = await supabase
        .from('lists')
        .select('*')
        .or(`master.eq.${USER_ID}, members.cs.{${USER_ID}}`)
    
        setUserList(data);
        console.log(data);
    }

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
