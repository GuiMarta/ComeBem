import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Ícone e Nome */}
            <div className="flex-shrink-0">
              <span className="text-xl font-semibold flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v10m-6-6h12"
                  />
                </svg>
                Come Bem
              </span>
            </div>
          </div>
          {/* Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#sobre"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Sobre
            </a>
            
            <a
              href="#contato"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Contato
            </a>
            <a
              href="#contato"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Gerencia
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
