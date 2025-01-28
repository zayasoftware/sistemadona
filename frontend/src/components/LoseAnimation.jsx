import PropTypes from 'prop-types';

const LoseAnimation = ({ resultNumbers, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="animate-bounce bg-red-900 p-8 rounded-lg text-center shadow-lg">
        <h2 className="text-2xl font-bold mb-4">😢 Tente Novamente! 😢</h2>
        <p className="text-xl mb-4">Você não acertou desta vez.</p>
        <p className="text-lg mb-4">Números sorteados: {resultNumbers.join(', ')}</p>
        <button
          onClick={onClose}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

LoseAnimation.propTypes = {
  resultNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LoseAnimation;