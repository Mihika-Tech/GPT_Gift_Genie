import React, { useState } from 'react';

const GiftForm = ({ onSubmit, setTone }) => {
    const [formData, setFormData] = useState({
        age: '',
        interests: '',
        relationship: '',
        tone: 'sentimental',
        budget: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'tone') {
        setTone(value);
        }

        setFormData((prev) => ({
        ...prev,
        [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="age" type="number" placeholder="Recipient's Age" onChange={handleChange} required />
            <input name="interests" type="text" placeholder="Interests (e.g. reading, cooking, etc)" onChange={handleChange} required />
            <input name="relationship" type="text" placeholder="Relationship (e.g. sister, friend, etc)" onChange={handleChange} required />
            <select name="tone" onChange={handleChange}>
                <option value="sentimental">Sentimental</option>
                <option value="funny">Funny</option>
                <option value="formal">Formal</option>
                <option value="wholesome">Wholesome</option>
                <option value="romantic">Romantic</option>
                <option value="quirky">Quirky</option>
                <option value="inspirational">Inspirational</option>
            </select>
            <input name="budge" type="number" placeholder="Budget (e.g. 50)" onChange={handleChange} />
            <button type="submit">Get Gift Ideas</button>
        </form>
    );
};

export default GiftForm;