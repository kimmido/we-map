import React from 'react';
import MyListsItem from './MyListsItem';

const MyLists = (props) => {
    const { userLists } = props;

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
                        } />
                    // <Link className='MyListsItem'>
                    //     <IoHeartCircle className='listIcon' style={{color: list.icon}} />
                    //     <div className='listInfo'>
                    //         <strong className='listName'>{ list.name }</strong>
                    //         <span className='listCount'><TiLocation />{ list.count }</span>
                    //     </div>
                    //     <button className='listEditBtn'><FiMoreVertical /></button>
                    // </Link>
                    
                ))
            }
        </div>
    );
}

export default MyLists;