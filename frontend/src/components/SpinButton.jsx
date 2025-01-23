import PropTypes from 'prop-types'; // Importe a biblioteca prop-types

const SpinButton = ({ onClick, spinning }) => {
  return (
    <div className="flex justify-center items-center my-4">
      <button
        onClick={onClick}
        className={`bg-green-500 text-white px-8 py-4 rounded-lg text-2xl font-bold ${
          spinning ? 'animate-pulse' : ''
        }`}
      >
        {spinning ? 'Girando...' : 'Girar'}
      </button>
    </div>
  );
};

// Defina os tipos das props
SpinButton.propTypes = {
  onClick: PropTypes.func.isRequired, // onClick deve ser uma função e é obrigatório
  spinning: PropTypes.bool.isRequired, // spinning deve ser um booleano e é obrigatório
};

export default SpinButton;