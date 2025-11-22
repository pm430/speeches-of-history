import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, toggleDarkMode, isDarkMode }) => {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark">
            <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
            <div className="flex-1">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
