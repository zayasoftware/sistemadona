import React from 'react';
import jackpotGif from '../assets/jackpot.gif'; // Importe o GIF

const Header = () => {
  return (
    <header className="text-white p-3 flex justify-evenly items-center">
      {/* Personagem Animado (GIF) */}
      <div className="w-24 h-24">
        <img
          src={jackpotGif} // Use o GIF importado
          alt="Jackpot Animation"
          className="w-full h-full object-contain" // Ajuste o tamanho e a proporção
        />
      </div>
      {/* Logo da Marca */}
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">MARCA</h1>
      </div>

    </header>
  );
};

export default Header;