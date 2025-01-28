import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Header from './components/Header';
import NumberCard from './components/NumberCard';
import NumberSelector from './components/NumberSelector';
import AdSection from './components/AdSection';
import BalanceSection from './components/BalanceSection';
import SpinButton from './components/SpinButton';
import WinAnimation from './components/WinAnimation';
import LoseAnimation from './components/LoseAnimation';

function App() {
  const [balance, setBalance] = useState(1000);
  const [bet, setBet] = useState(10);
  const [lastWin, setLastWin] = useState(0);
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [resultNumbers, setResultNumbers] = useState([0, 0, 0, 0, 0, 0]);
  const [spinning, setSpinning] = useState(false);
  const [showWinAnimation, setShowWinAnimation] = useState(false);
  const [showLoseAnimation, setShowLoseAnimation] = useState(false);
  const [showPrize, setShowPrize] = useState(false);

  // Tabela de multiplicadores com base no número de acertos
  const multiplicadores = {
    1: 1,   // 1 acerto: 1x
    2: 3,   // 2 acertos: 3x
    3: 10,  // 3 acertos: 10x
    4: 50,  // 4 acertos: 50x
    5: 100, // 5 acertos: 100x
    6: 500, // 6 acertos: 500x
  };

  // Função para verificar acertos e calcular o prêmio
  const verificarAcertos = (dezenasUsuario, numerosSorteados) => {
    const acertos = dezenasUsuario.filter(num => numerosSorteados.includes(num)).length;
    const multiplicador = multiplicadores[acertos] || 0; // Usar a tabela de multiplicadores
    const premioBase = bet * multiplicador; // Prêmio base = aposta × multiplicador
    return { acertos, premioBase };
  };

  const handleSpin = () => {
    if (spinning || selectedNumbers.length !== 6) return;
    setSpinning(true);
    setBalance(balance - bet);

    setTimeout(() => {
      // Gerar números aleatórios (de 1 a 30)
      const numerosSorteados = Array.from({ length: 6 }, () => Math.floor(Math.random() * 30) + 1);
      setResultNumbers(numerosSorteados);

      // Verificar acertos e calcular o prêmio
      const { acertos, premioBase } = verificarAcertos(selectedNumbers, numerosSorteados);

      if (acertos > 0) {
        setLastWin(premioBase);
        setBalance(balance + premioBase);
        setShowWinAnimation(true);
        setShowPrize(true);
        setTimeout(() => setShowWinAnimation(false), 3000);
        setTimeout(() => setShowPrize(false), 3000);
      } else {
        setLastWin(0);
        setShowLoseAnimation(true); // Mostrar animação de derrota
        setTimeout(() => setShowLoseAnimation(false), 3000); // Esconder após 3 segundos
      }

      setSpinning(false);
    }, 2000);
  };

  const handleBetChange = (newBet) => {
    if (newBet > 0) {
      setBet(newBet);
    }
  };

  return (
    <div className="min-h-screen bg-purple-950 text-white relative overflow-hidden">
      {/* Coluna vertical de GIFs à esquerda */}
      <div className="absolute left-72 top-0 w-[10vh] h-full z-0 overflow-hidden">
        <Swiper
          direction="vertical"
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={800}
          loop={true}
          modules={[Autoplay]}
          className="h-full"
          slidesPerView={3}
          spaceBetween={10}
        >
          {[...Array(10)].map((_, index) => (
            <SwiperSlide key={index}>
              <img
                src="/jackpot.gif"
                alt="Winner GIF"
                className="w-[10vh] h-[10vh]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Coluna vertical de GIFs à direita */}
      <div className="absolute right-72 top-0 w-[10vh] h-full z-0 overflow-hidden">
        <Swiper
          direction="vertical"
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={800}
          loop={true}
          modules={[Autoplay]}
          className="h-full"
          slidesPerView={3}
          spaceBetween={10}
        >
          {[...Array(10)].map((_, index) => (
            <SwiperSlide key={index}>
              <img src={import.meta.env.BASE_URL + 'jackpot.gif'} alt="Winner GIF" className="w-[10vh] h-[10vh]" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Conteúdo central */}
      <div className="relative z-10">
        <Header />
        <div className="flex flex-col items-center mx-auto">
          <NumberCard numbers={resultNumbers} spinning={spinning} />
          <NumberSelector onSelect={setSelectedNumbers} />
          <AdSection />
          <BalanceSection balance={balance} bet={bet} lastWin={lastWin} onBetChange={handleBetChange} />
          <SpinButton onClick={handleSpin} spinning={spinning} />
        </div>
      </div>

      {/* Animação de vitória */}
      {showWinAnimation && <WinAnimation />}

      {/* Exibição do prêmio na tela principal */}
      {showPrize && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="animate-bounce bg-purple-800 p-8 rounded-lg text-center shadow-lg">
            <h2 className="text-2xl font-bold mb-4">🎉 Parabéns! Você ganhou! 🎉</h2>
            <p className="text-xl mb-4">Prêmio: ${lastWin}</p>
            <p className="text-lg mb-4">Números sorteados: {resultNumbers.join(', ')}</p>
          </div>
        </div>
      )}

      {/* Animação de derrota */}
      {showLoseAnimation && (
        <LoseAnimation
          resultNumbers={resultNumbers}
          onClose={() => setShowLoseAnimation(false)}
        />
      )}
    </div>
  );
}

export default App;