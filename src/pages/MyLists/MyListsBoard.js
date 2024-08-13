import React, { useState, useCallback, useEffect } from 'react';
import '../../assets/style/pages/List.css'
import MyLists from './MyLists';
import Gnb from '../../components/Gnb';
import Button from '../../components/Button';
import MyListsEditor from './MyListsEditor';
import { insertList } from '../../utils/supabaseFatch';

const MyListsBoard = ({ user, userLists, userListsDispatch }) => {
    const [showModal, setShowModal] = useState(false);    
    const [ownLists, setOwnLists] = useState([]);    
    const [followLists, setFollowLists] = useState([]);    
   
    useEffect(() => {
        setOwnLists(userLists.filter(list => list.master == user.id));
        setFollowLists(userLists.filter(list => list.master != user.id));
    }, [userLists])
    
    const openModal = useCallback(() => {
        setShowModal(true);
    }, [])

    const createList = useCallback((userId, newTitle, newIcon) => {
        insertList(userId, newTitle, newIcon)
            .then(list => 
                userListsDispatch({
                    type: 'INSERT',
                    payload: {
                        master: userId,
                        list_id: list.list_id,
                        title: newTitle,
                        icon_color: newIcon
                    }
                })
            )
            .catch(error => console.error(error))
       
        setShowModal(false);
    }, []);

    const style = {
        marginTop: '28px'
    }

    return (
        <div className='MyListsBoard'>
            <div className='contentsBoxWithGnb'>
                <h2 style={{marginTop: '20px', marginBottom: '12px'}}>목록 보기</h2>
                <div className='container'>
                    <Button label='새 목록' onClick={openModal} type='primary' />
                    <h3 style={style}>내 목록</h3>
                    <MyLists
                        master={true}
                        lists={ownLists}
                        userListsDispatch={userListsDispatch} />
                    <h3 style={style}>참여중인 목록</h3>
                    <MyLists
                        master={false}
                        lists={followLists}
                        userListsDispatch={userListsDispatch} />
                </div>
            </div>
            <Gnb />

            {showModal && 
                <MyListsEditor
                    saveId={user.id}
                    setShowModal={setShowModal}
                    saveList={createList}/>
            }
        </div>
    );
}

export default MyListsBoard;
