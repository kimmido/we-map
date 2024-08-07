import React, {useState} from 'react';

const MyListsColorPicker = ({selectedColor, setSelectedColor}) => {
    const [colors] = useState(['#FEB9C8', '#BFA2DB', '#93C6E7', '#A1CCD1', '#CCD5AE', '#FCDDB0']);

    return (
        <>
            <h3 className='colorPickerTitle'>색상 선택</h3>
            <div className='MyListsColorPicker'>
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
        </>
    );
}

export default MyListsColorPicker;
