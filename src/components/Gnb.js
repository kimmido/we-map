import React from 'react';
import { Link } from 'react-router-dom';

const Gnb = () => {

    return (
        <div className='Gnb'>
            <Link to={'/mylists'}>리스트</Link>
            <Link to={'/'}>홈</Link>
        </div>
    );
}

export default Gnb;