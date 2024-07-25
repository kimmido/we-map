import React, { useState } from 'react';
import Map from '../../components/Map';
import { Link, useLocation } from 'react-router-dom';
import PlacesListPopup from './PlacesListPopup';

const PlacesListView = () => {
    const [ path, setPath ] = useState(useLocation().path);
    console.log(path);

    return (
        <div className='PlacesListView'>
            <Link to={'/mylists'}>뒤로가기</Link>
            <Map />
            <PlacesListPopup />
        </div>
    );
}

export default PlacesListView;
