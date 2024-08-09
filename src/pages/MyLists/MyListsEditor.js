import React, { useCallback, useState } from 'react';
import Modal from '../../components/Modal';
import { updateList } from '../../utils/supabaseFatch';
import MyListsColorPicker from './MyListsColorPicker';
// import Modal from '../../components/Modal';
import Button from '../../components/Button';

const MyListsEditor = ({ currentListId, setShowModal, setUserLists, newTitle, newIcon, setNewIcon }) => {
    const [inputText, setInputText] = useState(newTitle);
    const [selectedColor, setSelectedColor] = useState(newIcon);

    const ModalClose  = useCallback(() => {
        setShowModal(false);
    }, []);

    const saveList = useCallback((currentListId, newTitle, newIcon) => {
        if(currentListId) {
            setUserLists
            // setNewTitle(newTitle);
            setNewIcon(newIcon);
        
            updateList(currentListId, newTitle, newIcon)
            .then(data => console.log(data))
            .catch(error => console.error(error))
        }

        setShowModal(false);
    }, []);

    return (
        <div className='MyListsEditor'>
            <Modal>
                <input
                    type='text'
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder='목록 이름을 정해보세요'
                    className='listNameInput'
                />
                <MyListsColorPicker
                    selectedColor={selectedColor}
                    setSelectedColor={setSelectedColor} />
                <div className='popupActions'>
                    <Button label='취소' onClick={ModalClose} />
                    <Button label='완료' onClick={() => saveList(currentListId, inputText, selectedColor)} type='complete' />
                </div>
            </Modal>
        </div>
    );
}

export default MyListsEditor;
