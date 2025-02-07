import PropTypes from 'prop-types';
import walletGif from '../assets/wallet.gif';
import coins from  '../assets/coins.gif';
import win from '../assets/win.gif';

const BalanceSection = ({ balance, bet, lastWin, onBetChange }) => {
  return (
    <div className="flex justify-center my-4">
      <div className="w-full max-w-md p-2">
        <div className="flex flex-row justify-between items-center space-x-2">
          {/* Saldo - Substituindo o ícone do FaWallet por um GIF */}
          <div className="flex items-center justify-center rounded-xl border-2 border-green-500 bg-green-800 p-2 shadow-lg hover:shadow-green-500 transition-shadow">
            <img src={walletGif} alt="Wallet" className="w-9 h-9 mr-2" />
            <span className="text-md font-semibold">{balance}</span>
          </div>

          {/* Valor da Aposta */}
          <div className="flex items-center justify-center rounded-xl border-2 border-yellow-500 bg-yellow-900 p-2 shadow-lg hover:shadow-yellow-500 transition-shadow">
            <img src={coins} alt="Coins" className="w-9 h-9 mr-2" />
            <label htmlFor="bet" className="sr-only">Valor da Aposta</label>
            <input
              type="number"
              id="bet"
              value={bet}
              onChange={(e) => onBetChange(Number(e.target.value))}
              className="w-16 p-1 text-white bg-transparent border-b-2 border-yellow-400 focus:outline-none focus:border-yellow-500"
              min="1"
            />
          </div>

          {/* Último Ganho */}
          <div className="flex items-center justify-center rounded-xl border-2 border-yellow-500 bg-yellow-900 p-2 shadow-lg hover:shadow-yellow-500 transition-shadow">
            <img src={win} alt="Win" className="w-9 h-9" />
            <span className="text-md font-semibold">{lastWin}</span>
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
