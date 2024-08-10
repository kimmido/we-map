import React, { useState, useCallback, useEffect } from 'react';
import '../../assets/style/pages/List.css'
import MyLists from './MyLists';
import Gnb from '../../components/Gnb';
import Button from '../../components/Button';
import MyListsEditor from './MyListsEditor';

const MyListsBoard = ({ user, userLists, userListsDispatch }) => {
    const [showModal, setShowModal] = useState(false);    
    const [onLists, setOwnLists] = useState([]);    
    const [followLists, setFollowLists] = useState([]);    
   
    const newCreateList = () => {
        setShowModal(true);
    }

    useEffect(() => {
        setOwnLists(userLists.filter(list => list.master == user.id));
        setFollowLists(userLists.filter(list => list.master != user.id));
    }, [userLists])

    return (
        <div className='MyListsBoard'>
            <div className='contentsBoxWithGnb'>
                <h2>목록 보기</h2>
                <div className='container'>
                    <Button label='새 목록' onClick={newCreateList} type='primary' />
                    <h3>내 목록</h3>
                    <MyLists
                        master={true}
                        lists={onLists}
                        userListsDispatch={userListsDispatch} />
                    <h3>참여중인 목록</h3>
                    <MyLists
                        master={false}
                        lists={followLists}
                        userListsDispatch={userListsDispatch} />
                </div>
            </div>
            <Gnb />

            {showModal && 
                <MyListsEditor
                    currentListId={false}
                    setShowModal={setShowModal}
                    userListsDispatch={userListsDispatch}/>
            }
        </div>
    );
}

export default MyListsBoard;
