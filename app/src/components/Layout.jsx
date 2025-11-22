import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark">
            <Header />
            {children}
        </div>
    );
};

export default Layout;
