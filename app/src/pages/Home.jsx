import React, { useState } from 'react';
import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';
import FilterChips from '../components/FilterChips';
import SpeechCard from '../components/SpeechCard';
import speeches from '../data/speeches.json';

const Home = ({ toggleDarkMode, isDarkMode }) => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [sortBy, setSortBy] = React.useState('all');
    const [selectedLanguage, setSelectedLanguage] = React.useState('all');

    const filteredSpeeches = React.useMemo(() => {
        return speeches.filter(speech => {
            const query = searchQuery.toLowerCase();
            const matchesSearch =
                speech.title.toLowerCase().includes(query) ||
                speech.speaker.toLowerCase().includes(query) ||
                speech.year.includes(query);

            const matchesLanguage = selectedLanguage === 'all' ||
                (selectedLanguage === 'en'
                    ? (speech.languages.includes('us') || speech.languages.includes('gb'))
                    : speech.languages.includes(selectedLanguage));

            return matchesSearch && matchesLanguage;
        });
    }, [searchQuery, selectedLanguage]);

    const sortedSpeeches = React.useMemo(() => {
        return [...filteredSpeeches].sort((a, b) => {
            if (sortBy === 'year-asc') {
                return parseInt(a.year) - parseInt(b.year);
            } else if (sortBy === 'year-desc') {
                return parseInt(b.year) - parseInt(a.year);
            } else if (sortBy === 'popular') {
                return b.languages.length - a.languages.length;
            }
            return 0;
        });
    }, [filteredSpeeches, sortBy]);

    return (
        <Layout toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}>
            <SearchBar value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <FilterChips
                sortBy={sortBy}
                setSortBy={setSortBy}
                selectedLanguage={selectedLanguage}
                setSelectedLanguage={setSelectedLanguage}
            />
            <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
                {sortedSpeeches.map(speech => (
                    <SpeechCard key={speech.id} speech={speech} />
                ))}
            </main>
        </Layout>
    );
};

export default Home;
