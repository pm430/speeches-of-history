import React from 'react';

const SearchBar = ({ value, onChange }) => {
    return (
        <div className="px-4 py-3 sticky top-[120px] z-20 bg-background-light dark:bg-background-dark shadow-sm">
            <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                    <div className="text-slate-500 dark:text-slate-400 flex border-none bg-border-light dark:bg-border-dark items-center justify-center pl-4 rounded-l-lg border-r-0">
                        <span className="material-symbols-outlined">search</span>
                    </div>
                    <input
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-0 border-none bg-border-light dark:bg-border-dark h-full placeholder:text-slate-500 dark:placeholder:text-slate-400 px-4 pl-2 text-base font-normal leading-normal"
                        placeholder="대통령, 연도, 키워드로 검색"
                        value={value}
                        onChange={onChange}
                    />
                </div>
            </label>
        </div>
    );
};

export default SearchBar;
