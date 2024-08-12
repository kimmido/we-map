import React from 'react';

const PlaceReview = ({ listIcon, listTitle, author, text, master }) => {

    return (
        <div className='PlaceReview' style={{padding: '12px 4px', borderTop: '1px solid #dddddd'}}>
            <span style={{background: listIcon, width: '10px', height: '10px', display: 'block'}}></span>
            <span>{listTitle}</span>
            <span>'{author == master? '나' : author}'의 리뷰</span>
            <p style={{marginTop: '6px'}}>{text}</p>
        </div>
    );
}

export default PlaceReview;