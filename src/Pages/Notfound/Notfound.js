import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404-error.png'

const Notfound = () => {
    return (
        <div>
            <img style={{ width: '100%' }} src={notfound} alt="" />

            <Link to='/'>
                <button>Go Back</button>
            </Link>
        </div>
    );
};

export default Notfound;