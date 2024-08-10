import React, { useCallback, useState } from 'react';
import Modal from '../../components/Modal';
import { updateList } from '../../utils/supabaseFatch';
import MyListsColorPicker from './MyListsColorPicker';
// import Modal from '../../components/Modal';
import Button from '../../components/Button';

const MyListsEditor = ({ currentListId, setShowModal, userListsDispatch, listConfig }) => {
    const [currentConfig] = useState(listConfig || {});
    const [newTitle, setNewTitle] = useState(currentConfig.title);
    const [newIcon, setNewIcon] = useState(currentConfig.iconColor);

    const ModalClose  = useCallback(() => {
        setShowModal(false);
    }, []);

    const saveList = useCallback((currentListId, newTitle, newIcon) => {
        if(currentListId) {
            userListsDispatch({
                type: 'update',
                payload: {
                    list_id: currentListId,
                    title: newTitle,
                    icon_color: newIcon
                }
            })
        
            updateList(currentListId, newTitle, newIcon)
                .then(data => console.log(data))
                .catch(error => console.error(error))
        } else {
            
        }

        setShowModal(false);
    }, []);

    return (
        <div className='MyListsEditor'>
            <Modal>
                <input
                    type='text'
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder='목록 이름을 정해보세요'
                    className='listNameInput'
                />
                <MyListsColorPicker
                    selectedColor={newIcon}
                    setSelectedColor={setNewIcon} />
                <div className='popupActions'>
                    <Button label='취소' onClick={ModalClose} />
                    <Button label='완료' onClick={() => saveList(currentListId, newTitle, newIcon)} type='complete' />
                </div>
            </Modal>
        </div>
    );
}

export default MyListsEditor;
