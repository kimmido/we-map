import React from 'react';
import { BsBookmark } from "react-icons/bs";
// import { BsBookmarkCheckFill } from "react-icons/bs";
// import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { PiPhoneThin } from "react-icons/pi";
import { BsArrow90DegRight } from "react-icons/bs";
import PlaceReview from './PlaceReview';
import PlaceActionPanel from './PlaceActionPanel';

const PlacePopUp = (props) => {
    const { id, name, address, phone, reviews, user } = props;
    // console.log(placeReviews);
    const master = user.name;

    return (
        <div className='PlacePopUp'>
            <div>
                <h3>{ name }</h3>
                <p>{ address }</p>
            </div>
            <PlaceActionPanel
                id={id}
                phone={phone} />
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
