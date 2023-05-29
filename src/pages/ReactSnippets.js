import React, { useState, useEffect } from 'react';
import Snippet from '../components/Snippet';

const ReactSnippets = () => {
    const [snippets, setSnippets] = useState([]);

    useEffect(() => {
        fetch('/data/ReactSnippets.json')
            .then(response => response.json())
            .then(setSnippets);
    }, []);

    return (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2">
            {snippets.map((snippet) => (
                <Snippet key={snippet.id} snippet={snippet} />
            ))}
        </div>
    );
};

export default ReactSnippets;