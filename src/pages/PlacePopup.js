import React from 'react';

const PlacePopUp = (props) => {
    const { placeInfo } = props;

    return (
        <div className='PlacePopUp'>
            <strong>{ placeInfo.name }</strong>
            <p>{ placeInfo.address }</p>
            <p>{ placeInfo.phone }</p>
            <div>
                {
                    placeInfo.reviews &&
                    placeInfo.reviews.map((review) => {
                        <div>
                            <p>{review.text}</p>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default PlacePopUp;
