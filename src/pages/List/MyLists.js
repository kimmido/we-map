import React from 'react';
import MyListsItem from './MyListsItem';

const MyLists = (props) => {
    const { userLists, setUserLists, updateList } = props;

    const handleDeleteItem = (id) => {
        setUserLists(userLists.filter(item => item.id !== id));
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
                        updateList={updateList}
                    />
                ))
            }
        </div>
    );
}

export default MyLists;