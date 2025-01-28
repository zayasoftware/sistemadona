import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const NumberSelector = ({ onSelect }) => {
  const [selectedNumbers, setSelectedNumbers] = useState([]);

  // Lista de cores para os números selecionados
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

  const handleNumberClick = (number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter(n => n !== number));
    } else if (selectedNumbers.length < 6) {
      setSelectedNumbers([...selectedNumbers, number]);
    }
  };

  useEffect(() => {
    console.log('Números selecionados:', selectedNumbers);
    onSelect(selectedNumbers);
  }, [selectedNumbers, onSelect]);

  return (
    <div className="flex justify-center my-10">
      <div className="grid grid-cols-6 gap-2 rounded-lg">
        {Array.from({ length: 30 }, (_, i) => i + 1).map(number => (
          <div
            key={number}
            onClick={() => handleNumberClick(number)}
            className={`w-12 h-12 flex items-center justify-center text-xl font-bold rounded-full cursor-pointer ${
              selectedNumbers.includes(number)
                ? `${colors[number % colors.length]} text-white` // Cor da lista para números selecionados
                : 'bg-gray-300 text-black' // Cor neutra para números não selecionados
            }`}
          >
            {number}
          </div>
        ))}
      </div>
    </div>
  );
};

NumberSelector.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default NumberSelector;