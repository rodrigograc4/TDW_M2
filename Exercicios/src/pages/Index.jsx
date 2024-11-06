import React from 'react';
import { Link } from 'react-router-dom';

function IndexPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-bold text-blue-600 mb-6">Índice de Exercícios</h1>
            <ul className="space-y-4">
                <li>
                    <Link
                        to="/todolist"
                        className="block w-48 text-center px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-200"
                    >
                        Exercício 1
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default IndexPage;
