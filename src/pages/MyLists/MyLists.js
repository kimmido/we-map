import React, { useEffect } from 'react';
import MyListsItem from './MyListsItem';

const MyLists = (props) => {
    const { master, lists, userListsDispatch } = props;

    useEffect(() => {
        console.table(lists);
    }, [lists])

    const handleDeleteItem = (id) => {
        // setUserLists??
        // setUserLists(lists.filter(list => list.list_id !== id));
    };

    return (
        <div className='MyLists'>
            {
                lists.map((list) => (
                    <MyListsItem
                        key={list.id}
                        id={list.list_id}
                        icon={list.icon_color}
                        title={list.title}
                        count={list.place_ids.length} 
                        master={master}
                        userListsDispatch={userListsDispatch}
                        onDeleteItem={handleDeleteItem}
                    />
                ))
            }
        </div>
    );
}

export default MyLists;