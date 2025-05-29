import axios from 'axios';

const API_KEY = process.env.REACT_APP_MY_OPENAI_API_KEY;

export const generatedGiftIdeas = async (prompt) => {
    try {
        const response = await axios.post(
            'https://api.cohere.ai/v1/generate',
            {
                model: "command", // or "command" for stable
                prompt: prompt,
                max_tokens: 500,
                temperature: 0.8,
                stop_sequences: ["--"]
            },
            {
                headers: {
                Authorization: `Bearer ${API_KEY}`,
                'Content-Type': 'application/json',
                },
            }   
        );
        return response.data.generations[0].text;
    } catch (error) {
        console.error('Cohere API error:', error.response?.data || error.message);
        return 'Sorry, we couldn’t fetch gift ideas right now.';
    }
};