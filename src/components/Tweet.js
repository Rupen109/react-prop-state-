import React from 'react';

const Tweet = ({name}) => {
    return (
        <div className='tweet'>
            <h2>name : { name }</h2>
            <h3>this is actual tweet</h3>
            <button>delete</button>
            <button>like</button>
        </div>
    );
};

export default Tweet;