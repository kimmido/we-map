import React, { useCallback, useState } from 'react';
import Modal from '../../components/Modal';
import { insertList, updateList } from '../../utils/supabaseFatch';
import MyListsColorPicker from './MyListsColorPicker';
// import Modal from '../../components/Modal';
import Button from '../../components/Button';

const MyListsEditor = ({ saveId, listConfig, setShowModal, saveList }) => {
    const [currentConfig] = useState(listConfig || {});
    const [currentListId] = useState(currentConfig.id);
    const [newTitle, setNewTitle] = useState(currentConfig.title || '');
    const [newIcon, setNewIcon] = useState(currentConfig.iconColor || '');

    const closeModal  = useCallback(() => {
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
                    <Button label='취소' onClick={closeModal} />
                    <Button label='완료' onClick={() => saveList(saveId, newTitle, newIcon)} type='complete' />
                </div>
            </Modal>
        </div>
    );
}

export default MyListsEditor;
