import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Header from './components/Header';
import NumberCard from './components/NumberCard';
import NumberSelector from './components/NumberSelector';
import BalanceSection from './components/BalanceSection';
import SpinButton from './components/SpinButton';
import WinAnimation from './components/WinAnimation';
import LoseAnimation from './components/LoseAnimation';
import jackpotGif from './assets/jackpot.gif';
import backgroundImage from './assets/background.webp';
import globoSorteioGif from './assets/globo-sorteio.gif';  // Imagem animada de sorteio

function App() {
  const [balance, setBalance] = useState(1000);
  const [bet, setBet] = useState(10);
  const [lastWin, setLastWin] = useState(0);

  // Números selecionados pelo jogador (até 15)
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  // Números sorteados (15)
  const [resultNumbers, setResultNumbers] = useState(new Array(15).fill(0)); // 15 posições

  // Estados de animações
  const [spinning, setSpinning] = useState(false);
  const [showWinAnimation, setShowWinAnimation] = useState(false);
  const [showLoseAnimation, setShowLoseAnimation] = useState(false);
  const [showPrize, setShowPrize] = useState(false);
  const [showGlobeAnimation, setShowGlobeAnimation] = useState(false);  // Para mostrar o globo animado
  const [started, setStarted] = useState(false);  // Controle de visibilidade do NumberCard

  // Tabela de multiplicadores com base no número de acertos
  const multiplicadores = {
    1: 1, 
    2: 3,   
    3: 4, 
    4: 5,  
    5: 6, 
    6: 8,
    7: 9,
    8: 10,
    9: 12,
    10: 15,
    11: 20,
    12: 25,
    13: 30,
    14: 40,
    15: 50,
  };

  // Verifica acertos e retorna quantidade + prêmio
  const verificarAcertos = (dezenasUsuario, numerosSorteados) => {
    const acertos = dezenasUsuario.filter((num) => numerosSorteados.includes(num)).length;
    const multiplicador = multiplicadores[acertos] || 0;
    const premioBase = bet * multiplicador;
    return { acertos, premioBase };
  };

  // Sorteio + limpar seleção de dezenas (Efeito Cascata)
  const handleSpin = () => {
    // Se já está girando ou não há números selecionados, não faz nada
    if (spinning || selectedNumbers.length === 0) return;

    setBalance((prev) => prev - bet);
    setSpinning(true);
    setStarted(true); // Exibe o NumberCard quando o sorteio começar
    setShowGlobeAnimation(true);  // Exibe o globo animado

    // Gerar 15 números aleatórios (1..25)
    const numerosSorteados = Array.from({ length: 15 }, () => Math.floor(Math.random() * 25) + 1);

    // Limpa resultado anterior antes de animar
    setResultNumbers(new Array(15).fill(0)); // Preenche com 0 inicialmente

    // Animação em cascata
    numerosSorteados.forEach((num, index) => {
      setTimeout(() => {
        // Coloca o i-ésimo número
        setResultNumbers((prev) => {
          const newArray = [...prev];
          newArray[index] = num;
          return newArray;
        });

        // Se for o último número, faz a verificação
        if (index === numerosSorteados.length - 1) {
          const { acertos, premioBase } = verificarAcertos(selectedNumbers, numerosSorteados);

          if (acertos > 0) {
            setLastWin(premioBase);
            setBalance((prev) => prev + premioBase);
            setShowWinAnimation(true);
            setShowPrize(true);
            setTimeout(() => setShowWinAnimation(false), 3000);
            setTimeout(() => setShowPrize(false), 3000);
          } else {
            setLastWin(0);
            setShowLoseAnimation(true);
            setTimeout(() => setShowLoseAnimation(false), 3000);
          }

          // Limpar a seleção de dezenas ao final do sorteio
          setSelectedNumbers([]);
          setSpinning(false);
          setShowGlobeAnimation(false);  // Esconde o globo animado
        }
      }, index * 600); // 600ms entre cada número (ajustar para mais rápido ou mais devagar)
    });
  };

  // Gerar 15 números aleatórios (distintos) de 1..25
  const handleGenerateRandom15 = () => {
    const allNums = Array.from({ length: 25 }, (_, i) => i + 1);
    const newSelection = [];

    while (newSelection.length < 15 && allNums.length > 0) {
      const randIndex = Math.floor(Math.random() * allNums.length);
      newSelection.push(allNums[randIndex]);
      allNums.splice(randIndex, 1);
    }
    setSelectedNumbers(newSelection);
  };

  // Lidar com clique em um número na cartela (até 15 selecionados)
  const handleSelectNumber = (number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter((n) => n !== number));
    } else if (selectedNumbers.length < 15) {
      setSelectedNumbers([...selectedNumbers, number]);
    }
  };

  const handleBetChange = (newBet) => {
    if (newBet > 0) {
      setBet(newBet);
    }
  };

  return (
    <div className="min-h-screen text-white relative overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Coluna vertical de GIFs à esquerda */}
      <div className="hidden md:block absolute left-72 top-0 w-[10vh] h-full z-0 overflow-hidden">
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
                src={jackpotGif}
                alt="Winner GIF"
                className="w-[10vh] h-[10vh]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Coluna vertical de GIFs à direita */}
      <div className="hidden md:block absolute right-72 top-0 w-[10vh] h-full z-0 overflow-hidden">
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
                src={jackpotGif}
                alt="Winner GIF"
                className="w-[10vh] h-[10vh]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Exibe o GIF do globo durante o sorteio */}
      {showGlobeAnimation && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <img
            src={globoSorteioGif}
            alt="Globo de Sorteio"
            className="w-64 h-64 animate-bounce"
          />
        </div>
      )}

      {/* Conteúdo central */}
      <div className="relative z-10">
        <Header />
        <div className="flex flex-col items-center mx-auto">
          {/* Exibe o NumberCard apenas quando o sorteio começar */}
          {started && <NumberCard numbers={resultNumbers} spinning={spinning} />}
          
          <NumberSelector selectedNumbers={selectedNumbers} onSelectNumber={handleSelectNumber} />

          <button
            onClick={handleGenerateRandom15}
            className="bg-green-600 px-4 py-2 rounded font-bold mt-2 hover:bg-green-700 transition"
          >
            Gerar Números Aleatórios
          </button>

          <BalanceSection balance={balance} bet={bet} lastWin={lastWin} onBetChange={handleBetChange} />
          
          <div className="w-full flex justify-center">
            <SpinButton onClick={handleSpin} spinning={spinning} />
          </div>
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
