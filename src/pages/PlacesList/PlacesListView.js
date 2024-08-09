import React, { useEffect, useState } from 'react';
import Map from '../../components/Map';
import { useParams } from 'react-router-dom';
import PlacesListPopup from './PlacesListPopup';
import BackButton from '../../components/BackButton';



const PlacesListView = (props) => {
    const { user, userLists, places } = props;
    const { placeListId } = useParams();
    const [selectedList, setSelectedList] = useState();
    
    useEffect(() => {
        if(userLists.length == 0) return;
        
        let currentList = userLists.find(list => placeListId == list.list_id);
        console.log(currentList.place_ids);

        if(currentList.place_ids.length == 0) return;
        
        currentList.places = places.filter(idx => currentList.place_ids.includes(idx.place_id));
        console.log(currentList);
        setSelectedList(currentList);
    }, [userLists])


    return (
        <div className='PlacesListView'>
            <div className='PlacesListTopBtnBox'>
                <div className='PlacesListTopBtnIcon'>
                    <BackButton />
                </div>
                <span className='PlacesListTopBtnTxt'>목록으로 돌아가기</span>
            </div>
            <Map selectedList={selectedList} />
            <PlacesListPopup 
                selectedList={selectedList}
                user={user} />
        </div>
    );
}

export default PlacesListView;