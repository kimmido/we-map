import React, { useState } from 'react';

function MyList() {
    const [data, setData] = useState({
        id: 1,
        name: '마루',
        list: [
            {
                id: 1,
                name: '서울지도',
                placeList: [
                    {
                        name: '국밥집',
                        address: '역곡동',
                        latitude: 'ffsf',
                        longitude: 'sdfsd'
                    }
                ]
            }
        ]
    })

    return (
        <div className='MyList'>

        </div>
    );
}

export default MyList;
