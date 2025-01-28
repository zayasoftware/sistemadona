import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
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
    <div className="w-[380px] mx-auto flex justify-center my-4">
      <div className="w-full p-4 rounded-lg">
        <Swiper
          spaceBetween={20} // Espaçamento entre os slides
          slidesPerView={1} // Número padrão de ícones visíveis (para telas pequenas)
          centeredSlides={true} // Centraliza o slide ativo
          loop={true} // Carrossel infinito
          autoplay={{
            delay: 0, // Rola continuamente
            disableOnInteraction: false, // Continua a animação após interação do usuário
          }}
          speed={2000} // Velocidade da animação
          modules={[Autoplay]} // Módulos do Swiper
          className="mySwiper"
          breakpoints={{
            // Em telas pequenas (>= 640px), mostra 2 ícones
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // Em telas médias (>= 768px), mostra 3 ícones
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            // Em telas grandes (>= 1024px), mostra 4 ícones
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {icons.map((icon) => (
            <SwiperSlide key={icon.id}>
              <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg mx-auto">
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