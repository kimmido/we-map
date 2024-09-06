import React from 'react';


const PlaceActionPanel = ({ phone }) => {
    return ( 
        <div className='PlaceActionPanel'>
            <a href={`tel:${ phone }`}><PiPhoneThin style={{fontSize: '24px'}} /><br />전화</a>
            <button><BsBookmark /><br />저장</button>
            <a href={`https://map.kakao.com/link/to/${id}`} target='_blank'><BsArrow90DegRight /><br />길찾기</a>
        </div>
    );
}
 
export default PlaceActionPanel;