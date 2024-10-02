import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between">
        {/* Informação da Empresa */}
        <div>
          <h2 className="text-xl font-bold">Come Bem</h2>
          <p>O melhor da culinária brasileira.</p>
        </div>
        
        {/* Contato */}
        <div className="mt-4 md:mt-0">
          <h2 className="text-xl font-bold">Contato</h2>
          <p>
            <span className="inline-block align-middle">&#x1F4CD;</span> Bento Gonçalves, 2509 - Taquara, RS
          </p>
          <p>
            <span className="inline-block align-middle">&#x260E;&#xFE0E;</span> (11) 1234-5678
          </p>
          <p>
            <span className="inline-block align-middle">&#x1F551;</span> Ter-Dom: 11h30 - 23h00
          </p>
        </div>

        {/* Redes Sociais */}
        <div className="mt-4 md:mt-0">
          <h2 className="text-xl font-bold">Siga-nos</h2>
          <div className="flex space-x-4">
            <a href="#" aria-label="Instagram" className="text-white hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm7.5 1.5h-8.5A4.25 4.25 0 0 0 2.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 15.25 3.5zM16 8.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-6 1a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm0 1.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="text-white hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12.07c0-5.52-4.48-10-10-10S2 6.55 2 12.07c0 4.99 3.66 9.12 8.44 9.87v-6.99h-2.54V12h2.54V9.92c0-2.5 1.49-3.88 3.76-3.88 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.62.77-1.62 1.56v1.87h2.76l-.44 2.95h-2.32v6.99c4.78-.75 8.44-4.88 8.44-9.87z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-gray-800 text-center py-4">
        <p className="text-sm">&copy; 2024 Come Bem. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;