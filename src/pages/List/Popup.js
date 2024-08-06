// Popup.js
import React, { useState } from 'react';

const Popup = ({ title, icon, onClose, onSave }) => {
    const [newTitle, setNewTitle] = useState(title);
    const [selectedColor, setSelectedColor] = useState(icon);
    const [colors] = useState(['#FEB9C8', '#BFA2DB', '#93C6E7', '#A1CCD1', '#CCD5AE', '#FCDDB0']);

    const handleSave = () => {
        onSave(newTitle, selectedColor);
        onClose();
    };

    const handleCancel = () => {
        onClose();
    };

    return (
        <div className='popup'>
            <div className='popupContent'>
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
                    <button onClick={handleCancel} className='cancelBtn'>취소</button>
                    <button onClick={handleSave} className='saveBtn'>완료</button>
                </div>
            </div>
        </div>
    );
};

export default Popup;
