import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const AimanUsers = () => {
    const [userData, setUserData] = useState({});
    const { username } = useParams();
    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then((res) => res.json())
            .then((json) => setUserData(json))
            .catch((err) => console.log(err));
    }, [username]);

    const { avatar_url, name } = userData;
    return (
        <div>
            <img src={avatar_url} alt="avatar" />
            <h1>{name}</h1>
        </div>
    );
};

export default AimanUsers;
