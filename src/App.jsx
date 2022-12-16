import React from 'react';
import { Link } from 'react-router-dom';
const App = () => {
    return (
        <div>
            <h1>This is Home</h1>
            <ul>
                <li>
                    <Link to={`/aiman`}>Aiman</Link>
                </li>
                <li>
                    <Link to={`/Sama`}>Sama</Link>
                </li>
                <li>
                    <Link to={`/Arya`}>Arya</Link>
                </li>
            </ul>
        </div>
    );
};

export default App;
