import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoHeartCircle } from "react-icons/io5";
import { FiMoreVertical } from "react-icons/fi";
import ListControlButtons from '../../components/ListControlButtons';
import LocationCount from '../../components/LocationCount';
import MyListsEditor from './MyListsEditor';
import Button from '../../components/Button';
import { type } from '@testing-library/user-event/dist/type';

const MyListsItem = ({ id, icon, title, count, onDeleteItem }) => {
    const [showButtons, setShowButtons] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const [newIcon, setNewIcon] = useState(icon);
    const [showModal, setShowModal] = useState(false);    

    const handleEdit = useCallback(() => {
        setShowModal(true);
        setShowButtons(false);
    }, []);

    const handleDelete = () => {
        onDeleteItem(id);
        // 삭제 로직을 여기에 추가하세요
    };
    

    return (
        <>
            <div className='MyListsItem'>
                <Link to={`/placelist/${ id }`}>
                    <IoHeartCircle className='listIcon' style={{color: newIcon}} />
                    <div className='listInfo'>
                        <strong className='listName'>{ newTitle }</strong>
                        <LocationCount count={count} />
                    </div>
                </Link>
                <Button label={<FiMoreVertical />} onClick={() => setShowButtons(!showButtons)} type='icon'></Button>
                {showButtons && (
                    <ListControlButtons 
                        onEdit={handleEdit} 
                        onDelete={handleDelete} />
                )}
            </div>
                
            {showModal && 
                <MyListsEditor
                    currentListId={id}
                    setShowModal={setShowModal}
                    newTitle={newTitle}
                    newIcon={newIcon}
                    setNewIcon={setNewIcon} />
            }
        </>
    );
}

export default MyListsItem;
