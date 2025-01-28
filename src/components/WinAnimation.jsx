import winnerGif from '../assets/winner.gif'; // Importe o GIF

const WinAnimation = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <img
        src={winnerGif}
        alt="Vitória!"
        className="w-1/2 h-auto"
      />
    </div>
  );
};

export default WinAnimation;