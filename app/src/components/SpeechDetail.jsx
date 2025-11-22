import React from 'react';
import { useNavigate } from 'react-router-dom';

const langNameMap = {
    kr: '한국어 (원본)',
    us: 'English',
    jp: '日本語',
    de: 'Deutsch',
    es: 'Español',
    gb: 'English (UK)',
    fr: 'Français',
    cn: '中文',
};

const SpeechDetail = ({ speech, toggleDarkMode, isDarkMode }) => {
    const navigate = useNavigate();
    const [copiedLang, setCopiedLang] = React.useState(null);

    const handleCopy = async (text, lang) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedLang(lang);
            setTimeout(() => setCopiedLang(null), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const handleShare = async (text, lang) => {
        const shareData = {
            title: `${speech.speaker} - ${speech.title}`,
            text: text,
            url: window.location.href
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await handleCopy(text, lang);
            }
        } catch (err) {
            if (err.name !== 'AbortError') {
                console.error('Failed to share:', err);
            }
        }
    };

    return (
        <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
            <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b border-gray-200/80 bg-background-light/80 dark:border-gray-800/80 dark:bg-background-dark/80 backdrop-blur-sm px-2">
                <button
                    onClick={() => navigate(-1)}
                    className="flex size-10 shrink-0 items-center justify-center rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                >
                    <span className="material-symbols-outlined text-2xl">arrow_back</span>
                </button>
                <h1 className="text-lg font-bold text-center flex-1 text-[#2C3E50] dark:text-gray-100">연설문 상세</h1>
                <button
                    onClick={toggleDarkMode}
                    className="flex size-10 shrink-0 items-center justify-center rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                    aria-label="Toggle dark mode"
                >
                    <span className="material-symbols-outlined text-2xl">
                        {isDarkMode ? 'light_mode' : 'dark_mode'}
                    </span>
                </button>
            </header>
            <main className="flex-1 px-4 py-6">
                <section className="mb-8">
                    <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-[#2C3E50] dark:text-gray-100">{speech.speaker}</h2>
                    <p className="font-display text-base text-gray-500 dark:text-gray-400 mt-1">{speech.title}</p>
                </section>
                <div className="space-y-6">
                    {Object.entries(speech.content).map(([lang, text]) => (
                        <div key={lang} className="w-full @container">
                            <div className="flex flex-col items-stretch justify-start rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.1)] bg-white dark:bg-gray-800/50">
                                <div className="flex w-full grow flex-col items-stretch justify-center gap-2 p-5">
                                    <p className="font-display text-sm font-medium text-[#3498DB]">{langNameMap[lang] || lang}</p>
                                    <p className="font-display text-lg font-medium leading-relaxed text-[#2C3E50] dark:text-gray-200">{text}</p>
                                    <div className="flex items-center gap-2 justify-end pt-3">
                                        <button 
                                            onClick={() => handleShare(text, lang)}
                                            className="flex size-9 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700 text-[#34495E] dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                            aria-label="Share"
                                        >
                                            <span className="material-symbols-outlined text-xl">share</span>
                                        </button>
                                        <button 
                                            onClick={() => handleCopy(text, lang)}
                                            className="relative flex size-9 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700 text-[#34495E] dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                            aria-label="Copy to clipboard"
                                        >
                                            <span className="material-symbols-outlined text-xl">
                                                {copiedLang === lang ? 'check' : 'content_copy'}
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default SpeechDetail;
