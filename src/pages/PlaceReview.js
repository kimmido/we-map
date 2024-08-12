import React from 'react';

const PlaceReview = ({ listIcon, listTitle, author, text, master }) => {

    return (
        <div className='PlaceReview'>
            <span style={{background: listIcon, width: '10px', height: '10px', display: 'block'}}></span>
            <span>{listTitle}</span>
            <span>'{author == master? '나' : author}'의 리뷰</span>
            <p>{text}</p>
        </div>
    );
}

export default PlaceReview;