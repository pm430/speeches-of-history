import React, { useState } from 'react';
import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';
import FilterChips from '../components/FilterChips';
import SpeechCard from '../components/SpeechCard';
import speeches from '../data/speeches.json';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredSpeeches = speeches.filter(speech => {
        const query = searchQuery.toLowerCase();
        return (
            speech.title.toLowerCase().includes(query) ||
            speech.speaker.toLowerCase().includes(query) ||
            speech.year.includes(query)
        );
    });

    return (
        <Layout>
            <SearchBar value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <FilterChips />
            <main className="grid grid-cols-2 gap-4 p-4">
                {filteredSpeeches.map(speech => (
                    <SpeechCard key={speech.id} speech={speech} />
                ))}
            </main>
        </Layout>
    );
};

export default Home;
