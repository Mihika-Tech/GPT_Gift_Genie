import './App.css';
import React, { useState, useEffect } from 'react';
import GiftForm from './components/GiftForm';
import GiftResults from './components/GiftResults';
import { buildPrompt } from './utils/promptBuilder';
import { generatedGiftIdeas } from './api';

const toneBackgrounds = {
  sentimental: '/assets/sentimental.jpeg',
  funny: '/assets/funny.jpeg',
  formal: '/assets/formal.jpeg',
  wholesome: '/assets/wholesome.jpeg',
  romantic: '/assets/romantic.jpeg',
  quirky: '/assets/quirky.jpeg',
  inspirational: '/assets/inspirational.jpeg',
};

function App() {
  const [giftIdeas, setGiftIdeas] = useState('');
  const [loading, setLoading] = useState(false);
  const [lastPrompt, setLastPrompt] = useState('');
  const [tone, setTone] = useState('sentimental');

  const toneClass = `app-container tone-${tone}`;

  const backgroundStyle = {
    backgroundImage: `url(${toneBackgrounds[tone]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    paddingTop: '2rem',
    transition: 'background-image 0.5s ease-in-out'
  };

  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(`bg-${tone}`)
  }, [tone]);

  const handleFormSubmit = async (formData) => {
    setLoading(true);
    const prompt = buildPrompt(formData);
    setLastPrompt(prompt);
    const ideas = await generatedGiftIdeas(prompt);
    setGiftIdeas(ideas);
    setLoading(false);
  };

  const handleRefine = async (refineText) => {
    setLoading(true);
    const refinePrompt = `${lastPrompt}\n\nNow, please ${refineText}. Give 3 updated suggestions.`;
    const ideas = await generatedGiftIdeas(refinePrompt);
    setGiftIdeas(ideas);
    setLoading(false);
  }

  return (
    <div style={backgroundStyle}>
      <div className={toneClass}>
      <h1>GPT Gift Genie</h1>
      <GiftForm onSubmit={handleFormSubmit} setTone={setTone} />
      {loading ? <p>Loading Ideas...</p> : giftIdeas && <GiftResults results={giftIdeas} onRefine={handleRefine} />}
    </div>
    </div>
  );
}

export default App;
