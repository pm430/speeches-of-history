import React from 'react';
import { useNavigate } from 'react-router-dom';

const flagMap = {
    kr: '🇰🇷',
    us: '🇺🇸',
    jp: '🇯🇵',
    de: '🇩🇪',
    es: '🇪🇸',
    gb: '🇬🇧',
    fr: '🇫🇷',
    cn: '🇨🇳',
};

const SpeechCard = ({ speech }) => {
    const navigate = useNavigate();

    return (
        <div
            className="flex flex-col rounded-xl overflow-hidden bg-card-light dark:bg-card-dark shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => navigate(`/speech/${speech.id}`)}
        >
            <img
                alt={`${speech.speaker} caricature`}
                className="h-32 w-full object-cover"
                src={speech.image}
            />
            <div className="p-3">
                <h3 className="font-bold text-base leading-snug">{speech.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{speech.speaker}, {speech.year}</p>
                <div className="flex items-center gap-2 mt-2">
                    {speech.languages.map(lang => (
                        <span key={lang} className="text-lg">{flagMap[lang]}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SpeechCard;
