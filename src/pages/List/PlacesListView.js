import React, { useEffect, useState } from 'react';
import Map from '../../components/Map';
import { useParams } from 'react-router-dom';
import PlacesListPopup from './PlacesListPopup';
import BackButton from '../../components/BackButton';
import { supabase } from '../../utils/supabaseClient';

const PlacesListView = (props) => {
    const { userLists, user } = props;
    const { placelistId } = useParams();
    let selectedListData = userLists.find(list => '001' == list.id);
    const [ selectedList, setSelectedList] = useState();
    
    useEffect(() => {
        getUserList();
    }, []);

    useEffect(() => {
        console.log(selectedList);
    }, [selectedList]);
    
    async function getUserList() {
        let { data, error } = await supabase
        .from('lists')
        .select('*, places(*), users(name)')
        .eq('list_id', [placelistId])
        console.log(data[0]);

        setSelectedList(data[0]);
    }


    return (
        <div className='PlacesListView'>
            <BackButton />
            <Map selectedListData={selectedListData} />
            <PlacesListPopup 
                selectedListData={selectedList}
                user={user} />
        </div>
    );
}

export default PlacesListView;