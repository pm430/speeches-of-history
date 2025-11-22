import React from 'react';

const FilterChips = ({ sortBy, setSortBy, selectedLanguage, setSelectedLanguage }) => {
    const languages = [
        { code: 'all', name: '전체', flag: '🌍' },
        { code: 'kr', name: '한국어', flag: '🇰🇷' },
        { code: 'us', name: 'English', flag: '🇺🇸' },
        { code: 'jp', name: '日本語', flag: '🇯🇵' },
        { code: 'cn', name: '中文', flag: '🇨🇳' },
        { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'es', name: 'Español', flag: '🇪🇸' },
    ];

    return (
        <div className="flex flex-col gap-2 p-4 pt-1">
            {/* 정렬 필터 */}
            <div className="flex gap-2 overflow-x-auto">
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

            {/* 언어 필터 */}
            <div className="flex gap-2 overflow-x-auto pb-1">
                {languages.map((lang) => (
                    <button
                        key={lang.code}
                        onClick={() => setSelectedLanguage(lang.code)}
                        className={`flex h-9 shrink-0 items-center justify-center gap-x-1.5 rounded-full pl-3 pr-3 ${
                            selectedLanguage === lang.code
                                ? 'bg-primary text-white'
                                : 'bg-border-light dark:bg-border-dark text-text-light dark:text-text-dark'
                        }`}
                    >
                        <span className="text-base">{lang.flag}</span>
                        <p className="text-sm font-medium">{lang.name}</p>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FilterChips;
