import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Importe a biblioteca prop-types

const NumberSelector = ({ onSelect }) => {
  const [selectedNumbers, setSelectedNumbers] = useState([]);

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
    <div className="flex justify-center my-4">
      <div className="grid grid-cols-6 gap-2">
        {Array.from({ length: 30 }, (_, i) => i + 1).map(number => (
          <div
            key={number}
            onClick={() => handleNumberClick(number)}
            className={`w-12 h-12 flex items-center justify-center text-xl font-bold rounded-lg cursor-pointer ${
              selectedNumbers.includes(number) ? 'bg-blue-500 text-white' : 'bg-gray-300'
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