import React, { useState } from 'react';
import '../assets/css/SearchPage.css'

function SearchPage() {


    return (
        <div className='SearchPage'>
            <form className='searchForm'>
                <div>뒤로가기</div>
                <input className='search' type='search' />
                <input className='submit' type='submit' />
            </form>
        </div>
    );
}

export default SearchPage;
