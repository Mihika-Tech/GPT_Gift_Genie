export const buildPrompt = ({ age, interests, relationship, tone, budget }) => {
    return `Suggest 3 thoughtful gift ideas for a ${age}-year-old who loves ${interests}. They are my ${relationship}. The tone should be ${tone}. Budget is around ${budget ? `$${budget}` : "any amount"}. Keep the suggests creative, specific and practical.`;
};