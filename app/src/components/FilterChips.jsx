import React from 'react';

const FilterChips = () => {
    return (
        <div className="flex gap-2 p-4 pt-1 overflow-x-auto">
            <button className="flex h-9 shrink-0 items-center justify-center gap-x-1.5 rounded-full bg-primary text-white pl-4 pr-3">
                <p className="text-sm font-medium">전체</p>
            </button>
            <button className="flex h-9 shrink-0 items-center justify-center gap-x-1.5 rounded-full bg-border-light dark:bg-border-dark text-text-light dark:text-text-dark pl-4 pr-2">
                <p className="text-sm font-medium">시대순</p>
                <span className="material-symbols-outlined text-base">arrow_drop_down</span>
            </button>
            <button className="flex h-9 shrink-0 items-center justify-center gap-x-1.5 rounded-full bg-border-light dark:bg-border-dark text-text-light dark:text-text-dark pl-4 pr-2">
                <p className="text-sm font-medium">인기순</p>
                <span className="material-symbols-outlined text-base">arrow_drop_down</span>
            </button>
        </div>
    );
};

export default FilterChips;
