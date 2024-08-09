import React from 'react';
import MyListsItem from './MyListsItem';

const MyLists = (props) => {
    const { userLists, setUserLists, followLists } = props;

    const handleDeleteItem = (id) => {
        setUserLists(userLists.filter(list => list.list_id !== id));
    };

    console.log(followLists);

    return (
        <div className='MyLists'>
            <h3>내 목록</h3>
            {
                userLists.map((list) => (
                    <MyListsItem
                        key={list.id}
                        id={list.list_id}
                        icon={list.icon_color}
                        title={list.title}
                        count={
                            list.places?
                            list.places.length : 0
                        } 
                        onDeleteItem={handleDeleteItem}
                    />
                ))
            }
            <h3>참여 중인 목록</h3>
            {
                followLists.map((list) => {
                    <MyListsItem
                        key={list.id}
                        id={list.list_id}
                        icon={list.icon_color}
                        title={list.title}
                        count={
                            list.places?
                            list.places.length : 0
                        } 
                        onDeleteItem={handleDeleteItem}
                    />
                })
            }
        </div>
    );
}

export default MyLists;