import React from 'react';
import { Link } from 'react-router-dom';
import { IoHeartCircle } from "react-icons/io5";
import { TiLocation } from "react-icons/ti";
import { FiMoreVertical } from "react-icons/fi";

const MyListsItem = (props) => {
    const { id, icon, title, count } = props;

    return (
        <div className='MyListsItem'>
            <Link to={`/placelist/${ id }`}>
                <IoHeartCircle className='listIcon' style={{color: icon}} />
                <div className='listInfo'>
                    <strong className='listName'>{ title }</strong>
                    <span className='listCount'><TiLocation />{ count }</span>
                </div>
            </Link>
            <button className='listEditBtn'><FiMoreVertical /></button>
        </div>
    );
}

export default MyListsItem;
