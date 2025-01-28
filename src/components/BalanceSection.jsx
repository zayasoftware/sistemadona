import PropTypes from 'prop-types';
import { FaWallet, FaCoins, FaTrophy } from 'react-icons/fa'; // Ícones para saldo, aposta e último ganho

const BalanceSection = ({ balance, bet, lastWin, onBetChange }) => {
  return (
    <div className="flex my-4">
      <div className="w-full md:w-3/4 lg:w-1/2 xl:w-1/4 p-4 my-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
          {/* Saldo */}
          <div className="w-full md:w-auto flex items-center justify-center rounded-2xl border-2 border-green-500 bg-green-900 p-3 shadow-lg hover:shadow-green-500 transition-shadow">
            <FaWallet className="text-2xl text-green-400 mr-2" />
            <span className="text-lg font-semibold">{balance}</span>
          </div>

          {/* Valor da Aposta */}
          <div className="w-full md:w-auto flex items-center justify-center rounded-2xl border-2 border-blue-500 bg-blue-900 p-3 shadow-lg hover:shadow-blue-500 transition-shadow">
            <FaCoins className="text-2xl text-blue-400 mr-2" />
            <label htmlFor="bet" className="sr-only">Valor da Aposta</label>
            <input
              type="number"
              id="bet"
              value={bet}
              onChange={(e) => onBetChange(Number(e.target.value))}
              className="w-20 p-1 text-white bg-transparent border-b-2 border-blue-400 focus:outline-none focus:border-blue-500"
              min="1"
            />
          </div>

          {/* Último Ganho */}
          <div className="w-full md:w-auto flex items-center justify-center rounded-2xl border-2 border-yellow-500 bg-yellow-900 p-3 shadow-lg hover:shadow-yellow-500 transition-shadow">
            <FaTrophy className="text-2xl text-yellow-400 mr-2" />
            <span className="text-lg font-semibold">{lastWin}</span>
          </div>
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