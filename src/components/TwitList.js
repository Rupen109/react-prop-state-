import React from 'react';
import Tweet from './Tweet';

const TwitList = ({name ,setName}) => {
    return (
        <div>
            <Tweet name={ name } />
            <Tweet name={name} />
            <Tweet name={name} />
            <Tweet name={name} />
            <Tweet name={name} />
            <button onClick={() => setName('john')}>click state</button>

        </div>
    );
};

export default TwitList;