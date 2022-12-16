import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// aryausers/:username
function AryaUsers() {
    const { username } = useParams();
    const [data, setData] = useState('');
    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then((res) => res.json())
            .then((json) => setData(json));
    }, [username]);
    return (
        <div>
            {data && (
                <div key={data.id}>
                    <img src={data.avatar_url} alt="User's pic" />
                    <h1>{data.name}</h1>
                    <p>{data.location}</p>
                </div>
            )}
        </div>
    );
}

export default AryaUsers;
