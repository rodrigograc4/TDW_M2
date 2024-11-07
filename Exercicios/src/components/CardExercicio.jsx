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
                        width: '1920px',           // Largura fixa do iframe
                        height: '940px',          // Altura fixa do iframe
                        transform: 'scale(0.17)', // Ajuste para caber no card
                        transformOrigin: 'top left',
                        pointerEvents: 'none',    // Desativa interações no iframe
                        border: 'none'
                    }}
                />
            </div>
            <div className="block w-full text-center px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition duration-200">
                {title}
            </div>
        </Link>
    );
}

export default CardExercicio;
