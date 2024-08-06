import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoHeartCircle } from "react-icons/io5";
import { TiLocation } from "react-icons/ti";
import { FiMoreVertical } from "react-icons/fi";
import ListControlButtons from '../../components/ListControlButtons';
import Popup from './Popup';

const MyListsItem = (props) => {
    const { id, icon, title, count, onDeleteItem, updateList  } = props;
    const [showButtons, setShowButtons] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const [newIcon, setNewIcon] = useState(icon);

    const handleEdit = useCallback(() => {
        setIsEditing(true);
        setShowButtons(false);
    }, []);

    const handleDelete = () => {
        onDeleteItem(id);
        // 삭제 로직을 여기에 추가하세요
    };

    const handleSave = (newTitle, newIcon) => {
        setNewTitle(newTitle);
        setNewIcon(newIcon);
        setIsEditing(false);
        updateList(id, newTitle, newIcon)
        // 저장 로직을 여기에 추가하세요
    };

    const handleClose  = () => {
        setIsEditing(false);
    };

    return (
        <div className='MyListsItem'>
            <Link to={`/placelist/${ id }`}>
                <IoHeartCircle className='listIcon' style={{color: newIcon}} />
                <div className='listInfo'>
                    <strong className='listName'>{ newTitle }</strong>
                    <span className='listCount'><TiLocation />{ count }</span>
                </div>
            </Link>
            <button className='listEditBtn' onClick={() => setShowButtons(!showButtons)}><FiMoreVertical /></button>
            {showButtons && !isEditing && (
                <ListControlButtons 
                    onEdit={handleEdit} 
                    onDelete={handleDelete} />
            )}
            {isEditing && (
                <Popup 
                    title={newTitle} 
                    icon={newIcon} 
                    onClose={handleClose} 
                    onSave={handleSave} />
            )}
        </div>
    );
}

export default MyListsItem;
