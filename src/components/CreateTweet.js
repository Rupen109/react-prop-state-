import React, { useState } from 'react';

const CreateTweet = () => {
    
    const [tweet, handleTweet] = useState("");

    const handleChange = (e) => {
        handleTweet(e.target.value); 
    }
    return (
        <form>
            <textarea onChange={handleChange} cols="20" rows="5" ></textarea>
            <button>Submit</button>
            <h1>{tweet}</h1>
        </form>
    );
};

export default CreateTweet;