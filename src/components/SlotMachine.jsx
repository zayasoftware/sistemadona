import { useState } from 'react';

const SlotMachine = () => {
  const [balance, setBalance] = useState(1000);
  const [bet] = useState(10);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState([0, 0, 0]);

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    setBalance(balance - bet);

    setTimeout(() => {
      const newResult = [
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
      ];
      setResult(newResult);
      setSpinning(false);

      if (newResult[0] === newResult[1] && newResult[1] === newResult[2]) {
        setBalance(balance + bet * 10);
      }
    }, 2000);
  };

  return (
    <div className="p-4 bg-gray-800 text-white">
      <div className="flex justify-between mb-4">
        <div>Saldo: {balance}</div>
        <div>Aposta: {bet}</div>
      </div>
      <div className="flex space-x-4 mb-4">
        {result.map((num, index) => (
          <div key={index} className="w-20 h-20 bg-gray-700 flex items-center justify-center text-4xl">
            {spinning ? '?' : num}
          </div>
        ))}
      </div>
      <button onClick={spin} className="bg-blue-500 px-4 py-2 rounded">
        {spinning ? 'Girando...' : 'Girar'}
      </button>
    </div>
  );
};

export default SlotMachine;