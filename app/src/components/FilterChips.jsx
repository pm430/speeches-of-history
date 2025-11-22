import React from 'react';

const FilterChips = ({ sortBy, setSortBy }) => {
    return (
        <div className="flex gap-2 p-4 pt-1 overflow-x-auto">
            <button 
                onClick={() => setSortBy('all')}
                className={`flex h-9 shrink-0 items-center justify-center gap-x-1.5 rounded-full pl-4 pr-3 ${
                    sortBy === 'all' 
                        ? 'bg-primary text-white' 
                        : 'bg-border-light dark:bg-border-dark text-text-light dark:text-text-dark'
                }`}
            >
                <p className="text-sm font-medium">전체</p>
            </button>
            <button 
                onClick={() => setSortBy(sortBy === 'year-asc' ? 'year-desc' : 'year-asc')}
                className={`flex h-9 shrink-0 items-center justify-center gap-x-1.5 rounded-full pl-4 pr-2 ${
                    sortBy.startsWith('year') 
                        ? 'bg-primary text-white' 
                        : 'bg-border-light dark:bg-border-dark text-text-light dark:text-text-dark'
                }`}
            >
                <p className="text-sm font-medium">시대순</p>
                <span className="material-symbols-outlined text-base">
                    {sortBy === 'year-desc' ? 'arrow_drop_up' : 'arrow_drop_down'}
                </span>
            </button>
            <button 
                onClick={() => setSortBy('popular')}
                className={`flex h-9 shrink-0 items-center justify-center gap-x-1.5 rounded-full pl-4 pr-2 ${
                    sortBy === 'popular' 
                        ? 'bg-primary text-white' 
                        : 'bg-border-light dark:bg-border-dark text-text-light dark:text-text-dark'
                }`}
            >
                <p className="text-sm font-medium">인기순</p>
                <span className="material-symbols-outlined text-base">arrow_drop_down</span>
            </button>
        </div>
    );
};

export default FilterChips;
