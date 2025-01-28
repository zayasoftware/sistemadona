import PropTypes from 'prop-types';

const NumberCard = ({ numbers, spinning }) => {
  // Lista de cores para os números
  const colors = [
    'bg-red-500',
    'bg-blue-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-green-500',
    'bg-orange-500',
    'bg-teal-500',
    'bg-gray-500',
  ];

  return (
    <div className="flex justify-center space-x-4 my-4">
      {numbers.map((num, index) => (
        <div
          key={index}
          className={`w-12 h-12 flex items-center justify-center text-4xl font-bold rounded-full ${
            colors[index % colors.length] // Usa a cor correspondente ao índice
          } ${spinning ? 'animate-spin' : ''}`}
        >
          {spinning ? '?' : num}
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