import React from 'react';

const PlacePopUp = (props) => {
    const { name, address, phone, reviewsInfo } = props;
    // console.log(placeReviews);

    return (
        <div className='PlacePopUp'>
            <h3>{ name }</h3>
            <p>{ address }</p>
            <p>{ phone }</p>
            <div>
                <h4>리뷰 { reviewsInfo.length }</h4>
                {
                    reviewsInfo.map(idx => 
                        <div key={idx.id}>
                            <span style={{background: idx.lists.icon_color, width: '10px', height: '10px', display: 'block'}}></span>
                            <span>{idx.lists.title}</span>
                            <span>'{idx.users.name}'의 리뷰</span>
                            <p>{idx.text}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default PlacePopUp;
