import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center text-center gap-4 h-screen w-screen p-8 mt-[75px]">
            <h1 className=" font-bold text-xl">404 - Página não encontrada</h1>
            <p>Desculpe, a página que procura não foi encontrada.</p>
            <p className=" underline underline-offset-4">
                <Link to="/">Clique aqui para voltar à página inicial</Link>
            </p>
        </div>
    );
}
