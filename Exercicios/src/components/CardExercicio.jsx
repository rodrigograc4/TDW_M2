import React from 'react';
import { Link } from 'react-router-dom';

function CardExercicio({ to, title }) {
    return (
        <Link
            to={to}
            className="w-80 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
        >
            <div className="w-full h-40 border-b border-gray-300 overflow-hidden">
                <iframe
                    src={to}
                    title="Preview"
                    style={{
                        width: '1920px',
                        height: '960px',
                        transform: 'scale(0.167)',
                        transformOrigin: 'top left',
                        pointerEvents: 'none',
                        border: 'none'
                    }}
                />
            </div>
            <div
                className="block w-full text-center px-4 py-2 transition duration-200"
                style={{
                    background: 'rgba(0, 0, 0, 0.2)',
                    backdropFilter: 'blur(2px)',
                    color: 'white',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '0 0 8px 8px'
                }}
            >
                {title}
            </div>
        </Link>
    );
}

export default CardExercicio;
