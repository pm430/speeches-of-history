import React from 'react';
import { useParams } from 'react-router-dom';
import SpeechDetail from '../components/SpeechDetail';
import speeches from '../data/speeches.json';

const Detail = ({ toggleDarkMode, isDarkMode }) => {
    const { id } = useParams();
    const speech = speeches.find(s => s.id === id);

    if (!speech) {
        return <div className="p-4">Speech not found</div>;
    }

    return <SpeechDetail speech={speech} toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />;
};

export default Detail;
