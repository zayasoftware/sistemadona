import PropTypes from 'prop-types';
import { FaBolt, FaMinus, FaPlus, FaPlay } from 'react-icons/fa'; // Ícones para raio, -, + e player
import spinButtonImg from '../assets/spin-button.png'; // Imagem do botão de spin normal
import spinButtonPressedImg from '../assets/spin-button-pressed.png'; // Imagem do botão de spin pressionado

const SpinButton = ({ onClick, spinning, onIncreaseBet, onDecreaseBet, onAutoSpin }) => {
  return (
    <div className="flex justify-center items-center space-x-10">
      {/* Botão com raio (Turbo) */}
      <button
        onClick={() => alert('Modo Turbo ativado!')} // Substitua por uma função adequada
        className="bg-blue-500 text-white w-8 h-8 flex items-center justify-center rounded-full shadow-lg hover:bg-blue-600 transition-colors"
      >
        <FaBolt className="text-xl pulse-animation" /> {/* Animação aplicada sempre */}
      </button>

      {/* Botão de diminuir valor da aposta (-) */}
      <button
        onClick={onDecreaseBet}
        className="bg-red-500 text-white w-8 h-8 flex items-center justify-center rounded-full shadow-lg hover:bg-red-600 transition-colors"
      >
        <FaMinus className="text-xl pulse-animation" /> {/* Animação aplicada sempre */}
      </button>

      {/* Botão de girar (maior e central) */}
      <button
        onClick={onClick}
        className={`w-20 h-16 flex items-center justify-center rounded-full shadow-lg transition-colors`}
        disabled={spinning}
      >
        {/* Aqui usamos a imagem do botão de spin */}
        <img
          src={spinning ? spinButtonPressedImg : spinButtonImg}
          alt="Spin Button"
          className="w-full h-full object-contain"
        />
      </button>

      {/* Botão de aumentar valor da aposta (+) */}
      <button
        onClick={onIncreaseBet}
        className="bg-yellow-500 text-white w-8 h-8 flex items-center justify-center rounded-full shadow-lg hover:bg-yellow-600 transition-colors"
      >
        <FaPlus className="text-xl pulse-animation" /> {/* Animação aplicada sempre */}
      </button>

      {/* Botão de giro automático (Player) */}
      <button
        onClick={onAutoSpin}
        className="bg-purple-500 text-white w-8 h-8 flex items-center justify-center rounded-full shadow-lg hover:bg-purple-600 transition-colors"
      >
        <FaPlay className="text-xl pulse-animation" /> {/* Animação aplicada sempre */}
      </button>
    </div>
  );
};

// Defina os tipos das props
SpinButton.propTypes = {
  onClick: PropTypes.func.isRequired, // Função para girar
  spinning: PropTypes.bool.isRequired, // Estado de giro
  onIncreaseBet: PropTypes.func.isRequired, // Função para aumentar a aposta
  onDecreaseBet: PropTypes.func.isRequired, // Função para diminuir a aposta
  onAutoSpin: PropTypes.func.isRequired, // Função para giro automático
};

export default SpinButton;
