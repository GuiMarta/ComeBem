import React from 'react';
import ReactDOM from 'react-dom/client';
import HomeCliente from './Pages/Cliente/HomePageCliente';
import reportWebVitals from './reportWebVitals';
import 'tailwindcss/tailwind.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReservaPage from './Pages/Cliente/ReservaPage/reservaPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomeCliente />} />
        <Route path="/reserva" element={<ReservaPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


reportWebVitals();
