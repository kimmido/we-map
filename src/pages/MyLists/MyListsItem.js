import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoHeartCircle } from "react-icons/io5";
import { FiMoreVertical } from "react-icons/fi";
import ListControlButtons from '../../components/ListControlButtons';
import LocationCount from '../../components/LocationCount';
import MyListsEditor from './MyListsEditor';
import Button from '../../components/Button';
import { type } from '@testing-library/user-event/dist/type';

const MyListsItem = ({ id, icon, title, count, master, setUserLists, onDeleteItem }) => {
    const [showButtons, setShowButtons] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const [newIcon, setNewIcon] = useState(icon);
    const [listConfig, setListConfig] = useState({
        title: title,
        iconColor: icon
      });
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
                    <IoHeartCircle className='listIcon' style={{color: listConfig.iconColor}} />
                    <div className='listInfo'>
                        <strong className='listName'>{ listConfig.title }</strong>
                        <LocationCount count={count} />
                    </div>
                </Link>
                { master &&
                    <Button label={<FiMoreVertical />} onClick={() => setShowButtons(!showButtons)} type='icon' />
                }
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
                    listConfig={listConfig}
                    setListConfig={setListConfig} />
            }
        </>
    );
}

export default MyListsItem;
