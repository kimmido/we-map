import React, { useCallback, useRef, useState } from 'react';
import SearchItem from './SearchItem';
import '../../assets/style/pages/SearchPage.css'
import Gnb from '../../components/Gnb';
import SearchBar from '../../components/SearchBar';

const { kakao } = window; 

const SearchPage = () => {
    const [searchData, setSearchData] = useState([]);
    const searchInputRef = useRef(null);
    
    // 키워드 검색 요청
    const submitPlaceSearch = useCallback((e) => {
        e.preventDefault();
        const keyword = searchInputRef.current;
        console.log(keyword);

        if (keyword.replace(/^\s+|\s+$/g, '') === '') {
            alert('검색어를 입력해주세요!');
            return false;   
        }
        
        const places = new kakao.maps.services.Places();
        // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
        places.keywordSearch( keyword, searchResult, {size: 5}); 
    }, []);

    // 장소검색 결과
    const searchResult = useCallback(
        (data, status) => {
            const kakaoMap = kakao.maps.services.Status;

            switch (status) {
                case kakaoMap.OK:
                    setSearchData(data);
                    break;

                case kakaoMap.ZERO_RESULT:
                    alert('검색 결과가 존재하지 않습니다.');
                    break;

                case kakaoMap.ERROR:
                    alert('검색 결과 중 오류가 발생했습니다.');
                    break;

                default: 
                    break;
            }
    }, [])

    return (
        <div className='SearchPage'>
            <div className='contentsBoxWithGnb'>
                <SearchBar 
                    searchInputRef={searchInputRef}
                    handleSubmit={submitPlaceSearch} />
                <ul className="searchList">
                    {
                        searchData.map((data, idx) => (
                            <SearchItem 
                                key={idx}
                                id={data.id}
                                lat={data.y}
                                lng={data.x}
                                name={data.place_name}
                                phone={data.phone}
                                address={data.address_name} />
                        ))
                    }
                </ul>
            </div>
            <Gnb />
        </div> 
    );
}

export default SearchPage;
