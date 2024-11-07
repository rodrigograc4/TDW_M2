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
            <div className="flex flex-wrap justify-center gap-12 mt-6">
                <CardExercicio to="/todolist" title="Exercício 1 - ToDo List" />
                <CardExercicio to="/todolist-proptypes" title="Exercício 2 - PropTypes" />
                <CardExercicio to="/notfound" title="Not Found" />
            </div>
        </div>
    );
}

export default IndexPage;
