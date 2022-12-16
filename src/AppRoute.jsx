import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Aiman from './Aiman';
import Arya from './Arya';
import Sama from './Sama';
import App from './App';
import SamaUsers from './SamaUsers';
import AryaUsers from './AryaUsers';
import AimanUsers from './AimanUsers';

const routers = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: 'sama',
        element: <Sama />,
    },
    {
        path: 'aiman',
        element: <Aiman />,
    },
    {
        path: 'arya',
        element: <Arya />,
    },
    {
        path: 'samausers/:username',
        element: <SamaUsers />,
    },
    {
        path: 'aimanusers/:username',
        element: <AimanUsers />,
    },
    {
        path: 'aryausers/:username',
        element: <AryaUsers />,
    },
]);

const AppRoute = () => {
    return (
        <React.StrictMode>
            <RouterProvider router={routers} />
        </React.StrictMode>
    );
};

export default AppRoute;
