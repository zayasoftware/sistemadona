import PropTypes from 'prop-types';

const NumberCard = ({ numbers, spinning }) => {
  return (
    <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 gap-4 my-4">
      {numbers.map((num, index) => (
        <div
          key={index}
          className={`w-12 h-12 flex items-center justify-center text-2xl font-bold rounded-full
            ${num !== 0 ? 'bg-green-500 text-white' : ''}
            transition-all duration-300
          `}
        >
          {/* Mostra "?" enquanto está girando, senão exibe o número */}
          {spinning && num === 0 ? '?' : num !== 0 ? num : ''}
        </div>
      ))}
    </div>
  );
};

NumberCard.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  spinning: PropTypes.bool.isRequired,
};

export default NumberCard;
