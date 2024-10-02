import React from 'react';
import bannerImage from './assets/RESTAURANTE 1.png'; // Importando a imagem diretamente

const Banner = () => {
return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${bannerImage})` }}>
        {/* Overlay para escurecer a imagem */}
        <div className="absolute inset-0 bg-black bg-opacity-100"></div>

        {/* Conteúdo */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold">Bem-Vindo ao Come Bem</h1>
            <p className="mt-4 text-lg md:text-xl">
                Experimente o melhor da culinária brasileira em um ambiente acolhedor e caseiro
            </p>
            <a href="/reserva" className="mt-8 bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
                Faça sua reserva
            </a>
        </div>
    </div>
);
};

export default Banner;