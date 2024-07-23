import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

const SearchItem = (props) => {
    const {key, name, address} = props;

    return (
        <li className='SearchItem' key={key}>
            <Link to={'/search/place'}>
                <span><CiSearch /></span>
                <strong>{name}</strong>
                <address>{address}</address>
            </Link>
        </li>
    );
}

export default SearchItem;
