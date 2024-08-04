import React from 'react';
import Map from '../../components/Map';
import { useParams } from 'react-router-dom';
import PlacesListPopup from './PlacesListPopup';
import BackButton from '../../components/BackButton';

const PlacesListView = (props) => {
    const { user, userLists } = props;
    const { placelistId } = useParams();
    let selectedList = userLists.find(list => placelistId == list.list_id);

    useEffect(() => {
        async function getPlaceInfo() {
            try {
              let { data: places, error } = await supabase
              .from('lists')
              .select('places(*), reviews(*)')
              .eq('list_id', selectedList.list_id);
              
              return places;
              
            } catch(error) {
              console.log(error);
            }
        }        
    })


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