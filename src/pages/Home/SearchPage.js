import React, { useCallback, useEffect, useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import SearchItem from '../../components/SearchItem';
import '../../assets/style/pages/SearchPage.css'
import { Link } from 'react-router-dom';

const { kakao } = window; 

const SearchPage = () => {
    const [keyword, setKeyword] = useState('역삼');
    const [searchData, setSearchData] = useState([]);
    
    const onChange = useCallback((e) => {
        setKeyword(e.target.value);
    }, [])
    
    // 키워드 검색 요청
    const searchPlaces = useCallback((e) => {
        e.preventDefault();
        
        if (keyword.replace(/^\s+|\s+$/g, '') === '') {
            alert('검색어를 입력해주세요!');
            return false;   
        }
        
        const places = new kakao.maps.services.Places();
        // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
        places.keywordSearch( keyword, searchResult, {size: 5}); 
        console.log(searchData);
    }, [keyword]);

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
            <div className='flexBox'>
                <Link to={'/'} className='backBtn'><FaArrowLeft /></Link>
                <form className='searchForm' onSubmit={searchPlaces}>
                    <input className='search' value={keyword} type='search' onChange={onChange} />
                </form>
            </div>
            <ul className="searchList">
                {
                    searchData.map((data, idx) => (
                        <SearchItem 
                            key={idx}
                            id={data.id}
                            lat={data.x}
                            lng={data.y}
                            name={data.place_name}
                            phone={data.phone}
                            address={data.address_name} />
                    ))
                }
            </ul>
        </div> 
    );
}

export default SearchPage;
