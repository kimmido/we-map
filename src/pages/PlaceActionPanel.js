import React, { useState } from 'react';
import SvgIconGoogle from '../components/ui/SvgIconGoogle';


const PlaceActionPanel = ({ id, phone, bookmark }) => {
    function onClickBookmark() {

    }

    return ( 
        <div className='PlaceActionPanel'>
            <a className='placeActionBtn phone' href={`tel:${ phone }`}>
                <SvgIconGoogle shape='call' />
                <span>전화</span>
            </a>
            <button className='placeActionBtn' onClick={onClickBookmark}>
                <SvgIconGoogle 
                    shape={bookmark? 'bookmark_heart' : 'bookmark'}
                    type={bookmark? 'check' : ''} />
                <span>저장</span>
            </button>
            <a className='placeActionBtn' href={`https://map.kakao.com/link/to/${id}`} target='_blank'>
                <SvgIconGoogle shape='turn_sharp_right' />
                <span>길찾기</span>
            </a>
        </div>
    );
}
 
export default PlaceActionPanel;