import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoHeartCircle } from "react-icons/io5";
import { FiMoreVertical } from "react-icons/fi";
import ListControlButtons from '../../components/ListControlButtons';
import Modal from '../../components/Modal';
import { updateList } from '../../utils/supabaseJS';
import Button from '../../components/Button';
import MyListsColorPicker from './MyListsColorPicker';
import LocationCount from '../../components/LocationCount';

const MyListsItem = ({ id, icon, title, count, onDeleteItem  }) => {
    const [showButtons, setShowButtons] = useState(false);
    const [isEditing, setIsEditing] = useState(false);    
    const [newTitle, setNewTitle] = useState(title);
    const [newIcon, setNewIcon] = useState(icon);
    const [selectedColor, setSelectedColor] = useState(icon);

    const handleEdit = useCallback(() => {
        setIsEditing(true);
        setShowButtons(false);
    }, []);

    const handleDelete = () => {
        onDeleteItem(id);
        // 삭제 로직을 여기에 추가하세요
    };

    const handleSave = useCallback((newTitle, newIcon) => {
        setNewTitle(newTitle);
        setNewIcon(newIcon);
        setIsEditing(false);
        updateList(id, newTitle, newIcon)
            .then(data => {
                console.log(data);
            })
        // 저장 로직을 여기에 추가하세요
    }, []);

    const handleClose  = () => {
        setIsEditing(false);
    };

    return (
        <div className='MyListsItem'>
            <Link to={`/placelist/${ id }`}>
                <IoHeartCircle className='listIcon' style={{color: newIcon}} />
                <div className='listInfo'>
                    <strong className='listName'>{ newTitle }</strong>
                    <LocationCount count={count} />
                </div>
            </Link>
            <button className='listEditBtn' onClick={() => setShowButtons(!showButtons)}><FiMoreVertical /></button>
            {showButtons && (
                <ListControlButtons 
                    onEdit={handleEdit} 
                    onDelete={handleDelete} />
            )}
            {isEditing && (
                <Modal>
                    <input
                    type='text'
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className='listNameInput'
                    />
                    <MyListsColorPicker
                        selectedColor={selectedColor}
                        setSelectedColor={setSelectedColor} />
                    <div className='popupActions'>
                        <Button label='취소' onClick={handleClose} />
                        <Button label='완료' onClick={() => handleSave(newTitle, selectedColor)} type='complete' />
                    </div>
                </Modal>
            )}
        </div>
    );
}

export default MyListsItem;
