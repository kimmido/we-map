import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/SearchPage.css'

const { kakao } = window; 

function SearchPage() {
    const [keyword, setKeyword] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const places = new kakao.maps.services.Places();
    // 키워드로 장소를 검색합니다
    
    // 키워드 검색을 요청하는 함수입니다
    const searchPlaces = useCallback(() => {
        if (!keyword.replace(/^\s+|\s+$/g, '')) {
            alert('검색어를 입력해주세요!');
            return false;
        }

        // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
        places.keywordSearch( keyword, placesSearchCB, {size: 5}); 
    }, [keyword]);

    searchPlaces();

    // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
    const placesSearchCB = useCallback(
        (data, status, pagination) => {
        if (status === kakao.maps.services.Status.OK) {
            setSearchResult(data);
            // 정상적으로 검색이 완료됐으면
            // 검색 목록과 마커를 표출합니다
            // displayPlaces(data);

            // 페이지 번호를 표출합니다
            // displayPagination(pagination);

        } else if (status === kakao.maps.services.Status.ZERO_RESULT) {

            alert('검색 결과가 존재하지 않습니다.');
            return;

        } else if (status === kakao.maps.services.Status.ERROR) {

            alert('검색 결과 중 오류가 발생했습니다.');
            return;

        }
    }, [])

    return (
        <div className='SearchPage'>
            <form className='searchForm' onsubmit={searchPlaces}>
                <div>뒤로가기</div>
                <input className='search' value={keyword} type='search' onChange={(e) => setKeyword(e.target.value)} />
                <input className='submit' type='submit' />
            </form>
            <div id="menu_wrap" class="bg_white">
            <div class="option">
            </div>
            <ul id="placesList"></ul>
            <div id="pagination"></div>
        </div>
        </div>
    );
}

export default SearchPage;
