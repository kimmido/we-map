import React, { useState } from 'react';
import Map from '../../components/Map';
import { Link, useParams } from 'react-router-dom';
import PlacesListPopup from './PlacesListPopup';

const PlacesListView = (props) => {
    const { userData, userLists, listData } = props;
    const { placelistId } = useParams();
    let selectedListData = userLists.find(list => placelistId == list.id);

    return (
        <div className='PlacesListView'>
            <Link to={'/mylists'}>뒤로가기</Link>
            <Map />
            <PlacesListPopup 
                selectedListData={selectedListData}
                userData={userData} />
        </div>
    );
}

export default PlacesListView;