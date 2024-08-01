import React from 'react';
import Map from '../../components/Map';
import { useParams } from 'react-router-dom';
import PlacesListPopup from './PlacesListPopup';
import BackButton from '../../components/BackButton';

const PlacesListView = (props) => {
    const { userData, userLists, listData } = props;
    const { placelistId } = useParams();
    let selectedListData = userLists.find(list => placelistId == list.id);


    return (
        <div className='PlacesListView'>
            <BackButton />
            <Map selectedListData={selectedListData} />
            <PlacesListPopup 
                selectedListData={selectedListData}
                userData={userData} />
        </div>
    );
}

export default PlacesListView;