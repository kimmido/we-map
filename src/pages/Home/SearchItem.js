import React from 'react';
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

const SearchItem = (props) => {
    const { id, lat, lng, name, phone, address } = props;

    return (
        <li className='SearchItem'>
            <Link 
                to={`/place/${id}`}
                state={{
                    id: id,
                    lat: lat,
                    lng: lng,
                    name: name,
                    phone: phone,
                    address: address,
                }}>
                <span><CiSearch /></span>
                <strong>{name}</strong>
                <address>{address}</address>
            </Link>
        </li>
    );
}

export default SearchItem;
