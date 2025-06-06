import React, { useEffect } from 'react';

function FontExample({ font, onSelect }) {
    useEffect(() => {
        const link =  document.createElement('link');
        link.href = font.url;
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, [font.url])

    return (
        <div
            style={{ 
                fontFamily: font.name, 
                fontSize: '24px', 
                margin: '20px 0', 
                cursor: 'pointer',
                border: '1px solid #ccc',
                padding: '10px',
                borderRadius: '8px'
            }}

            onClick={() => onSelect(font)}
        >
            Exemplo de font: {font.name}
        </div>
    );
}

export default FontExample;