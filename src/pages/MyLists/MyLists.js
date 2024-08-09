import React from 'react';
import MyListsItem from './MyListsItem';

const MyLists = (props) => {
    const { master, lists, setUserLists } = props;

    const handleDeleteItem = (id) => {
        setUserLists(lists.filter(list => list.list_id !== id));
    };

    return (
        <div className='MyLists'>
            {
                lists.map((list) => (
                    <MyListsItem
                        key={list.id}
                        master={master}
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
        </div>
    );
}

export default MyLists;