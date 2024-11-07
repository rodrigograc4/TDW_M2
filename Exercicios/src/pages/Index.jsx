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
            <h1 className="text-4xl font-bold text-white mb-12">Índice de Exercícios</h1>
            <ul className="space-y-12 mt-6">
                <div className="flex space-x-12">
                    <li className="flex flex-col items-center">
                        <CardExercicio to="/todolist" title="Exercício 1 - ToDo List" />
                    </li>
                    <li className="flex flex-col items-center">
                        <CardExercicio to="/todolist" title="Exercício 2" />
                    </li>
                </div>
            </ul>
        </div>
    );
}

export default IndexPage;
