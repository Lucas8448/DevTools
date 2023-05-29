import React from 'react';

const Snippet = ({ snippet }) => (
    <div className="bg-gray-100 p-4 my-2 rounded-md shadow-md overflow-auto">
        <h2 className="text-xl font-bold mb-2">{snippet.description}</h2>
        <pre className="bg-gray-200 p-2 rounded-md font-mono whitespace-pre-wrap">{snippet.code}</pre>
    </div>
);

export default Snippet;