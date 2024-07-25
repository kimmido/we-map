import React from 'react';
import MyListsItem from './MyListsItem';

const MyLists = (props) => {
    const { userData } = props;

    return (
        <div className='MyLists'>
            {
                userData.user_lists.map((list) => (
                    <MyListsItem
                        key={list.id}
                        id={list.id}
                        icon={list.icon}
                        title={list.title}
                        count={list.count} />
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