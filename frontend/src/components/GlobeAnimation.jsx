// src/components/GlobeAnimation.jsx
import globoGif from '../assets/globo-sorteio.gif'; // Ajuste o nome/caminho se precisar

const GlobeAnimation = () => {
  return (
    <div className="flex justify-center mt-4">
      <img
        src={globoGif}
        alt="Globo de Sorteio"
        className="w-32 h-32 animate-bounce"
        style={{ animationDuration: '2s' }}
      />
    </div>
  );
};

export default GlobeAnimation;
