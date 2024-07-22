import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchPage from './SearchPage';
import Map from '../components/Map';

function Home(props) {
    const { markerPositions, goalPosition, goToUserPosition } = props;

    return (
        <div className='Home'>
            <Link className='SearchEntry' to={'/SearchPage'}>검색창</Link>
            <Map goalPosition={goalPosition} markerPositions={markerPositions} />
            <button className='userPositionBtn' onClick={goToUserPosition}></button>
        </div>
    );
}

export default Home;
