import PropTypes from 'prop-types';

/**
 * NumberSelector
 * Exibe botões numerados (1..25). Mostra o botão em verde se estiver selecionado.
 * Usa "onSelectNumber" para comunicar ao pai quando um número foi clicado.
 */
const NumberSelector = ({ selectedNumbers, onSelectNumber }) => {
  // Cor para números selecionados
  const selectedColor = 'bg-gray-500 text-white';

  // Clique no número
  const handleClick = (number) => {
    onSelectNumber(number);
  };

  return (
    <div className="flex justify-center my-10">
      <div className="grid grid-cols-5 gap-2 rounded-lg">
        {Array.from({ length: 25 }, (_, i) => i + 1).map((number) => {
          const isSelected = selectedNumbers.includes(number);
          return (
            <div
              key={number}
              onClick={() => handleClick(number)}
              className={`
                w-12 h-12 flex items-center justify-center text-xl font-bold rounded-full cursor-pointer
                ${isSelected ? selectedColor : 'bg-gray-300 text-black'}
              `}
            >
              {number}
            </div>
          );
        })}
      </div>
    </div>
  );
};

NumberSelector.propTypes = {
  selectedNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  onSelectNumber: PropTypes.func.isRequired,
};

export default NumberSelector;
