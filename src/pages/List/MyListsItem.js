import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoHeartCircle } from "react-icons/io5";
import { TiLocation } from "react-icons/ti";
import { FiMoreVertical } from "react-icons/fi";
import ListControlButtons from '../../components/ListControlButtons';
import Modal from '../../components/Modal';
import { updateList } from '../../utils/supabaseJS';
import Button from '../../components/Button';

const MyListsItem = (props) => {
    const { id, icon, title, count, onDeleteItem  } = props;
    const [showButtons, setShowButtons] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const [newIcon, setNewIcon] = useState(icon);
    const [selectedColor, setSelectedColor] = useState(icon);
    const [colors] = useState(['#FEB9C8', '#BFA2DB', '#93C6E7', '#A1CCD1', '#CCD5AE', '#FCDDB0']);

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
                    <h3 className='colorPickerTitle'>색상 선택</h3>
                    <div className='colorPicker'>
                        {
                            colors.map(color => (
                                <button
                                    key={color}
                                    className={`colorBtn ${selectedColor === color ? 'selected' : ''}`}
                                    style={{ backgroundColor: color }}
                                    onClick={() => setSelectedColor(color)}>
                                </button>
                            ))
                        }
                    </div>
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
