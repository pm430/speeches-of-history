import React from 'react';

const Header = ({ toggleDarkMode, isDarkMode }) => {
    return (
        <header className="p-4 pb-2 bg-background-light dark:bg-background-dark sticky top-0 z-10">
            <div className="flex items-center h-12 justify-end">
                <div className="flex items-center gap-2">
                    <button
                        onClick={toggleDarkMode}
                        className="flex size-10 shrink-0 items-center justify-center rounded-full text-text-light dark:text-text-dark hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        aria-label="Toggle dark mode"
                    >
                        <span className="material-symbols-outlined text-2xl">
                            {isDarkMode ? 'light_mode' : 'dark_mode'}
                        </span>
                    </button>
                </div>
            </div>
            <h1 className="text-3xl font-bold tracking-tight px-0 text-left pt-2">연설의 순간들</h1>
            <p className="text-base font-normal leading-normal pt-1 px-0">세계 지도자들의 연설문 핵심 문장을 다양한 언어로 만나보세요.</p>
        </header>
    );
};

export default Header;
