import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRoute from './AppRoute';

const run = () => {
    const container = document.querySelector('#root');
    const root = createRoot(container);
    const app = <AppRoute />;
    root.render(app);
};

run();
