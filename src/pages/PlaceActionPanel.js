import React from 'react';


const PlaceActionPanel = ({ id, phone }) => {
    const path = {
        bookmarkHeart: `<path d="M480-388q51-47 82.5-77.5T611-518q17-22 23-38.5t6-35.5q0-36-26-62t-62-26q-21 0-40.5 8.5T480-648q-12-15-31-23.5t-41-8.5q-36 0-62 26t-26 62q0 19 5.5 35t22.5 38q17 22 48 52.5t84 78.5ZM200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"/>`
    }

    const color = {
        default: '',
        main: '#8CD790'
    }

    return ( 
        <div className='PlaceActionPanel'>
            <a className='placeActionBtn phone' href={`tel:${ phone }`}>
                <span>전화</span>
            </a>
            <button className='placeActionBtn'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={ color.main }>{ path.bookmarkHeart }</svg>
                <span>저장</span>
            </button>
            <a className='placeActionBtn' href={`https://map.kakao.com/link/to/${id}`} target='_blank'>
                <span>길찾기</span>
            </a>
        </div>
    );
}
 
export default PlaceActionPanel;