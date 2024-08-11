import React, { useEffect } from 'react';
import MyListsItem from './MyListsItem';

const MyLists = (props) => {
    const { master, lists, userListsDispatch } = props;

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
                    />
                ))
            }
        </div>
    );
}

export default MyLists;