import React from 'react';

const Main = () => {
  return (
    <div className="   min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8  mt-9 mb-9 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Faça sua reserva</h1>
        <form>
          {/* Título do formulário */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Reservar mesa</h2>
            <p className="text-gray-600">Preencha os detalhes para fazer sua reserva</p>
          </div>
          
          {/* Campo Nome */}
          <div className="mb-4">
            <label className="block text-gray-700">Nome</label>
            <input
              type="text"
              placeholder="Seu nome completo"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Campo Telefone */}
          <div className="mb-4">
            <label className="block text-gray-700">Telefone</label>
            <input
              type="tel"
              placeholder="(51) 12345-6789"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Campo Data */}
          <div className="mb-4">
            <label className="block text-gray-700">Data</label>
            <input
              type="date"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Campo Horário */}
          <div className="mb-4">
            <label className="block text-gray-700">Horário</label>
            <input
              type="time"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Campo Número de pessoas */}
          <div className="mb-4">
            <label className="block text-gray-700">Número de pessoas</label>
            <input
              type="number"
              placeholder="Ex: 4"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Campo Observações */}
          <div className="mb-4">
            <label className="block text-gray-700">Observações</label>
            <textarea
              placeholder="Observações"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Botão de confirmação */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-300"
            >
              Confirmar reserva
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Main;