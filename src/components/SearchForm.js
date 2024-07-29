import React, { useCallback, useEffect } from 'react';

const SearchForm = (props) => {
    const { searchInputRef, handleSubmit } = props;

    const onChangeKeword = useCallback((e) => {
        searchInputRef.current = e.target.value;
    }, [])

    return (
        <form className='SearchForm' onSubmit={handleSubmit}>
            <input type='search' className='searchInput' onChange={onChangeKeword} placeholder='검색어를 입력하세요'  autoFocus />
        </form>
    );
}

export default SearchForm;