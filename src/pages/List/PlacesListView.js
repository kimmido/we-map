import React, { useState } from 'react';
import Map from '../../components/Map';
import { Link, useParams } from 'react-router-dom';
import PlacesListPopup from './PlacesListPopup';
import BackButton from '../../components/BackButton';

const PlacesListView = (props) => {
    const { userData, userLists, listData } = props;
    const { placelistId } = useParams();
    let selectedListData = userLists.find(list => placelistId == list.id);

    return (
        <div className='PlacesListView'>
            <BackButton />
            <Map />
            <PlacesListPopup 
                selectedListData={selectedListData}
                userData={userData} />
        </div>
    );
}

export default PlacesListView;