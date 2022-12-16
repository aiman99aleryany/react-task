import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//samausers/:username
function SamaUsers() {
    const { username } = useParams();
    const [userData, setUserData] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then((response) => response.json())
            .then((result) => setUserData(result))
            .catch((error) => setError(error.message));
    }, []);

    return (
        <div>
            {error ? (
                <h2>{error}</h2>
            ) : (
                <div>
                    <img src={userData.avatar_url} />
                    <h2>{userData.name}</h2>
                </div>
            )}
        </div>
    );
}

export default SamaUsers;
