import React from 'react';

const ListControlButtons = ({ onEdit, onDelete }) => {

    return (
        <div className='ListControlButtons'>
            <button onClick={onEdit} className='editBtn'>수정하기</button>
            <button onClick={onDelete} className='deleteBtn'>삭제하기</button>
        </div>
    );
}

export default ListControlButtons;