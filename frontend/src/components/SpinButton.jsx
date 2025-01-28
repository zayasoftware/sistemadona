import PropTypes from 'prop-types';
import { ImSpinner11 } from 'react-icons/im'; // Ícone para girar
import { FaBolt, FaMinus, FaPlus, FaPlay } from 'react-icons/fa'; // Ícones para raio, -, + e player

const SpinButton = ({ onClick, spinning, onIncreaseBet, onDecreaseBet, onAutoSpin }) => {
  return (
    <div className="flex justify-center items-center space-x-10">
      {/* Botão com raio (Turbo) */}
      <button
        onClick={() => alert('Modo Turbo ativado!')} // Substitua por uma função adequada
        className="bg-blue-500 text-white w-8 h-8 flex items-center justify-center rounded-full shadow-lg hover:bg-blue-600 transition-colors"
      >
        <FaBolt className="text-sm" />
      </button>

      {/* Botão de diminuir valor da aposta (-) */}
      <button
        onClick={onDecreaseBet}
        className="bg-red-500 text-white w-8 h-8 flex items-center justify-center rounded-full shadow-lg hover:bg-red-600 transition-colors"
      >
        <FaMinus className="text-sm" />
      </button>

      {/* Botão de girar (maior e central) */}
      <button
        onClick={onClick}
        className={`bg-green-500 text-white w-16 h-16 flex items-center justify-center rounded-full text-2xl font-bold shadow-lg hover:bg-green-600 transition-colors ${
          spinning ? 'animate-spin' : ''
        }`}
        disabled={spinning}
      >
        {spinning ? (
          <ImSpinner11 className="inline-block animate-spin" />
        ) : (
          <ImSpinner11 className="inline-block" />
        )}
      </button>

      {/* Botão de aumentar valor da aposta (+) */}
      <button
        onClick={onIncreaseBet}
        className="bg-yellow-500 text-white w-6 h-6 flex items-center justify-center rounded-full shadow-lg hover:bg-yellow-600 transition-colors"
      >
        <FaPlus className="text-sm" />
      </button>

      {/* Botão de giro automático (Player) */}
      <button
        onClick={onAutoSpin}
        className="bg-purple-500 text-white w-6 h-6 flex items-center justify-center rounded-full shadow-lg hover:bg-purple-600 transition-colors"
      >
        <FaPlay className="text-sm" />
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