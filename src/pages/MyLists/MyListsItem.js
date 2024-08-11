import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoHeartCircle } from "react-icons/io5";
import { FiMoreVertical } from "react-icons/fi";
import ListControlButtons from '../../components/ListControlButtons';
import LocationCount from '../../components/LocationCount';
import MyListsEditor from './MyListsEditor';
import Button from '../../components/Button';
import { deleteList, updateList } from '../../utils/supabaseFatch';

const MyListsItem = ({ id, icon, title, count, master, userListsDispatch }) => {
    const [showButtons, setShowButtons] = useState(false);
    const [showModal, setShowModal] = useState(false);    

    const handleEditor = useCallback(() => {
        setShowModal(true);
        setShowButtons(false);
    }, []);

    const saveList = useCallback((listId, newTitle, newIcon) => {
        userListsDispatch({
            type: 'UPDATE',
            payload: {
                list_id: listId,
                title: newTitle,
                icon_color: newIcon
            }
        })
    
        updateList(listId, newTitle, newIcon)
            .catch(error => console.error(error))
        setShowModal(false);
    }, []);

    const removeList = useCallback(() => {
        userListsDispatch({
            type: 'DELETE',
            payload: {
                list_id: id,
            }
        })

        deleteList(id)
    }, []);

    return (
        <>
            <div className='MyListsItem'>
                <Link to={`/placelist/${ id }`}>
                    <IoHeartCircle className='listIcon' style={{color: icon}} />
                    <div className='listInfo'>
                        <strong className='listName'>{ title }</strong>
                        <LocationCount count={count} />
                    </div>
                </Link>
                { master &&
                    <Button label={<FiMoreVertical />} onClick={() => setShowButtons(!showButtons)} type='icon' />
                }
                { showButtons && 
                    <ListControlButtons 
                        onEdit={handleEditor} 
                        onDelete={removeList} />
                }
            </div>
                
            {showModal && 
                <MyListsEditor
                    saveId={id}
                    setShowModal={setShowModal}
                    listConfig={{ id: id, title: title, iconColor: icon }}
                    saveList={saveList} />
            }
        </>
    );
}

export default MyListsItem;
