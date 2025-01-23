import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Importe os estilos do Swiper
import 'swiper/css';

// Exemplo de ícones para o carrossel (substitua pelos seus ícones)
const icons = [
  { id: 1, icon: '⭐', alt: 'Ícone 1' }, // Substitua por ícones ou imagens
  { id: 2, icon: '🔥', alt: 'Ícone 2' },
  { id: 3, icon: '🎉', alt: 'Ícone 3' },
  { id: 4, icon: '💎', alt: 'Ícone 4' },
  { id: 5, icon: '🚀', alt: 'Ícone 5' },
  { id: 6, icon: '❤️', alt: 'Ícone 6' },
  { id: 7, icon: '🌟', alt: 'Ícone 7' },
  { id: 8, icon: '🎉', alt: 'Ícone 8' },
  { id: 9, icon: '💎', alt: 'Ícone 9' },
  { id: 10, icon: '🚀', alt: 'Ícone 10' },
];

const AdSection = () => {
  return (
    <div className="w-full flex justify-center my-4">
      <div className="w-1/2 p-4 rounded-lg">
        <Swiper
          spaceBetween={-20} // Slides se sobrepõem em 20 pixels
          slidesPerView={3} // Número de ícones visíveis ao mesmo tempo
          centeredSlides={true} // Centraliza o slide ativo
          loop={true} // Carrossel infinito
          autoplay={{
            delay: 0, // Rola continuamente
            disableOnInteraction: false, // Continua a animação após interação do usuário
          }}
          speed={2000} // Velocidade da animação
          modules={[Autoplay]} // Módulos do Swiper
          className="mySwiper"
        >
          {icons.map((icon) => (
            <SwiperSlide key={icon.id}>
              <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg">
                <span className="text-2xl">{icon.icon}</span> {/* Exibe o ícone */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AdSection;