import React, { useEffect, useState } from 'react';
import Map from '../../components/Map';
import { useParams } from 'react-router-dom';
import PlacesListPopup from './PlacesListPopup';
import BackButton from '../../components/BackButton';



const PlacesListView = (props) => {
    const { user, userLists } = props;
    const { placelistId } = useParams();
    const [selectedList, setSelectedList] = useState();
    
    useEffect(() => {
        let select = userLists.find(list => placelistId == list.list_id);
        console.log(select);
        setSelectedList(select);
    }, [userLists])


    return (
        <div className='PlacesListView'>
            <BackButton />
            <Map selectedList={selectedList} />
            <PlacesListPopup 
                selectedList={selectedList}
                user={user} />
        </div>
    );
}

export default PlacesListView;