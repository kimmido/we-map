import React from 'react';
import { BsBookmark } from "react-icons/bs";
// import { BsBookmarkCheckFill } from "react-icons/bs";
// import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { PiPhoneThin } from "react-icons/pi";
import { BsArrow90DegRight } from "react-icons/bs";
import PlaceReview from './PlaceReview';

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
            <div>
                <a href={`tel:${ phone }`}><PiPhoneThin style={{fontSize: '24px'}} />전화</a>
                <button><BsBookmark />저장</button>
                <a href={`https://map.kakao.com/link/to/${id}`} target='_blank'><BsArrow90DegRight />길찾기</a>
            </div>
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
