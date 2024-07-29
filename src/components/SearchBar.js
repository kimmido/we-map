import React, { useState, useEffect, useCallback } from 'react';
import BackButton from './BackButton';
import { useLocation } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import SearchForm from './SearchForm.js';

const SearchBar = (props) => {
    const { searchInputRef, handleSubmit, displayText } = props;
    const [path] = useState(useLocation().pathname);
    
    return (
        <div className='SearchBar'>
            <div className='searchBarIcon'>
                {
                    path === '/search'? 
                    <BackButton /> : <CiSearch />
                }
            </div>
            <div className='searchBarCon'>
                {
                    path === '/search'? 
                    <SearchForm
                        searchInputRef={searchInputRef}
                        handleSubmit={handleSubmit} />
                    : 
                    <span className='placeholder'>
                        {displayText || '검색어를 입력하세요'}
                    </span>
                }
            </div>
        </div>
    );
}

export default SearchBar;