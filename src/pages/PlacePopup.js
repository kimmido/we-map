import React from 'react';
import PlaceReview from './PlaceReview';
import PlaceActionPanel from './PlaceActionPanel';

const PlacePopUp = (props) => {
    const { id, name, address, phone, reviews, user } = props;
    const master = user.name;

    return (
        <div className='PlacePopUp'>
            <div>
                <h3>{ name }</h3>
                <span className='placeAddress'>{ address }</span>
            </div>
            <PlaceActionPanel
                id={id}
                phone={phone}
                bookmark={false} />
            <div>
                <h4>리뷰 { reviews.length }</h4>
                {
                    reviews.map(review => 
                        <PlaceReview 
                            key={review.id}
                            listIcon={review.lists.icon_color}
                            listTitle={review.lists.title}
                            author={review.users.name}
                            master={master}
                            text={review.text} />
                    )
                }
            </div>
        </div>
    );
}

export default PlacePopUp;
