import React, { useState, useCallback } from 'react';
import '../../assets/style/pages/List.css'
import MyLists from './MyLists';
import Gnb from '../../components/Gnb';
import Button from '../../components/Button';
import MyListsEditor from './MyListsEditor';

const MyListsBoard = (props) => {
    const { userLists, setUserLists } = props;
    const [showModal, setShowModal] = useState(false);    
   

    const newCreateList = () => {
        setShowModal(true);
    }


    return (
        <div className='MyListsBoard'>
            <div className='contentsBoxWithGnb'>
                <h2>내 목록</h2>
                <div className='container'>
                    <Button label='새 목록' onClick={newCreateList} type='primary' />
                    <MyLists
                        userLists={userLists}
                        setUserLists={setUserLists} />
                </div>
            </div>
            <Gnb />

            {showModal && 
                <MyListsEditor
                    currentListId={false}
                    setShowModal={setShowModal}
                    setUserLists={setUserLists}/>
            }
        </div>
    );
}

export default MyListsBoard;
