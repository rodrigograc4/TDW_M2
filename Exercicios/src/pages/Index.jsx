import React from 'react';
import CardExercicio from '../components/CardExercicio';

function IndexPage() {
    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen p-4"
            style={{
                backgroundImage: 'url(/background.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <h1 className="text-3xl font-bold text-blue-600 mb-6">Índice de Exercícios</h1>
            <ul className="space-y-4">
                <li className="flex flex-col items-center">
                    <CardExercicio to="/todolist" title="Exercício 1" />
                </li>
            </ul>
        </div>
    );
}

export default IndexPage;
