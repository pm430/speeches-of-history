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
    const [imageError, setImageError] = React.useState(false);

    const getInitials = (name) => {
        return name.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2);
    };

    const getGradient = (id) => {
        const gradients = [
            'from-blue-500 to-purple-600',
            'from-green-500 to-teal-600',
            'from-orange-500 to-red-600',
            'from-pink-500 to-rose-600',
            'from-indigo-500 to-blue-600',
            'from-yellow-500 to-orange-600',
        ];
        const hash = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        return gradients[hash % gradients.length];
    };

    return (
        <div
            className="flex flex-col rounded-xl overflow-hidden bg-card-light dark:bg-card-dark shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => navigate(`/speech/${speech.id}`)}
        >
            {!imageError ? (
                <img
                    alt={`${speech.speaker} caricature`}
                    className="h-32 w-full object-cover"
                    src={speech.image}
                    onError={() => setImageError(true)}
                />
            ) : (
                <div className={`h-32 w-full bg-gradient-to-br ${getGradient(speech.id)} flex items-center justify-center`}>
                    <span className="text-white text-4xl font-bold">
                        {getInitials(speech.speaker)}
                    </span>
                </div>
            )}
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
