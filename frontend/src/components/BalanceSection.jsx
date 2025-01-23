import PropTypes from 'prop-types';

const BalanceSection = ({ balance, bet, lastWin, onBetChange }) => {
  return (
    <div className="w-full flex justify-center my-4">
      <div className="w-1/2 bg-gray-700 text-white p-4 my-4">
        <div className="flex justify-between items-center">
          <div className="mr-4">Saldo: {balance}</div>
          <div>
            <label htmlFor="bet" className="mr-2 rounded p-2">Valor da Aposta:</label>
            <input
              type="number"
              id="bet"
              value={bet}
              onChange={(e) => onBetChange(Number(e.target.value))}
              className="w-20 p-1 text-white rounded"
              min="1"
            />
          </div>
          <div className="mr-4 ">Último Ganho: {lastWin}</div>
        </div>
      </div>
    </div>
  );
};

BalanceSection.propTypes = {
  balance: PropTypes.number.isRequired, 
  bet: PropTypes.number.isRequired,
  lastWin: PropTypes.number.isRequired, 
  onBetChange: PropTypes.func.isRequired, 
};

export default BalanceSection;