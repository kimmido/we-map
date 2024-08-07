import React from 'react';
import MyListsItem from './MyListsItem';

const MyLists = (props) => {
    const { userLists, setUserLists } = props;

    const handleDeleteItem = (id) => {
        setUserLists(userLists.filter(list => list.list_id !== id));
    };

    return (
        <div className='MyLists'>
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
        </div>
    );
}

export default MyLists;