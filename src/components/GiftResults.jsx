import React, { useState } from "react";

const GiftResults = ({ results, onRefine }) => {
    const [refineText, setRefineText] = useState('');

    const handleRefine = (e) => {
        e.preventDefault();
        onRefine(refineText);
        setRefineText('');
    };

    return (
        <div>
            <h2>Gift Suggestions</h2>
            <pre style={{
                whiteSpace: 'pre-wrap',
                maxHeight: '300px',
                overflowY: 'auto',
                padding: '1rem',
                backgroundColor: 'rgba(255,255,255,0.3)',
                borderRadius: '12px',
                marginBottom: '1rem',
                fontSize: '1rem',
                lineHeight: '1.6',
                }}>{results}</pre>
            <form onSubmit={handleRefine}>
                <input type="text" placeholder="Refine suggestions (e.g. funnier, cheaper)" value={refineText} onChange={(e) => setRefineText(e.target.value)} />
                <button type="submit">Refine</button>
            </form>
        </div>
    );
};

export default GiftResults;