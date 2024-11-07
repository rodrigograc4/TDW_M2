import React from 'react';
import CardExercicio from '../components/CardExercicio';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';

function IndexPage() {
    return (
        <div>
            <Navbar />
            <div
                className="flex flex-col items-center justify-center min-h-screen p-4"
                style={{
                    backgroundImage: 'url(/background.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="flex flex-col items-center rounded-3xl p-6"
                    style={{
                        background: 'rgba(0, 0, 0, 0.2)',
                        backdropFilter: 'blur(2px)',
                        color: 'white',
                    }}>
                    <Banner />
                    <div className="flex flex-col items-center p-6 rounded-3xl"
                        style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            color: 'white',
                        }}>
                        <h1 className="text-4xl font-bold text-white pb-6">Índice de Exercícios</h1>
                        <div className="flex flex-wrap justify-center gap-12 mt-6">
                            <CardExercicio to="/todolist" title="Exercício 1 - ToDo List" />
                            <CardExercicio to="/todolist-proptypes" title="Exercício 2 - Better ToDo" />
                            <CardExercicio to="/notfound" title="Not Found" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default IndexPage;
