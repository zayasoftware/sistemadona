import { useState } from 'react';
import Header from './components/Header';
import NumberCard from './components/NumberCard';
import NumberSelector from './components/NumberSelector';
import AdSection from './components/AdSection';
import BalanceSection from './components/BalanceSection';
import SpinButton from './components/SpinButton';
import WinAnimation from './components/WinAnimation'; // Importe o componente de animação

function App() {
  const [balance, setBalance] = useState(1000);
  const [bet, setBet] = useState(10);
  const [lastWin, setLastWin] = useState(0);
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [resultNumbers, setResultNumbers] = useState([0, 0, 0, 0, 0, 0]);
  const [spinning, setSpinning] = useState(false);
  const [showWinAnimation, setShowWinAnimation] = useState(false); // Estado para controlar a animação

  const handleSpin = () => {
    if (spinning || selectedNumbers.length !== 6) return;
    setSpinning(true);
    setBalance(balance - bet);

    setTimeout(() => {
      const newResult = Array.from({ length: 6 }, () => Math.floor(Math.random() * 30) + 1);
      setResultNumbers(newResult);
      setSpinning(false);

      const matches = newResult.filter(num => selectedNumbers.includes(num)).length;
      if (matches > 0) {
        const win = bet * matches * 10;
        setLastWin(win);
        setBalance(balance + win);
        setShowWinAnimation(true); // Mostra a animação de vitória
        setTimeout(() => setShowWinAnimation(false), 3000); // Esconde a animação após 3 segundos
      } else {
        setLastWin(0);
      }
    }, 2000);
  };

  const handleBetChange = (newBet) => {
    if (newBet > 0) {
      setBet(newBet);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <div className="container mx-auto p-4">
        <NumberCard numbers={resultNumbers} spinning={spinning} />
        <NumberSelector onSelect={setSelectedNumbers} />
        <AdSection />
        <BalanceSection balance={balance} bet={bet} lastWin={lastWin} onBetChange={handleBetChange} />
        <SpinButton onClick={handleSpin} spinning={spinning} />
      </div>
      {showWinAnimation && <WinAnimation />} {/* Exibe a animação de vitória */}
    </div>
  );
}

export default App;