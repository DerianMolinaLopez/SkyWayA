import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroBanner: React.FC = () => {
  return (
    <section 
      id="home"
      className="relative h-screen flex items-center"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/379419/pexels-photo-379419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-20 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fadeIn">
            Viaja con SkyWay Airlines, donde el confort y la seguridad son nuestra prioridad
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fadeInDelay">
            Descubre destinos increíbles con tarifas competitivas y servicio excepcional
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center">
              Reserva ahora <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="bg-transparent hover:bg-white/10 border-2 border-white text-white px-6 py-3 rounded-md font-medium transition-colors">
              Explora destinos
            </button>
          </div>
        </div>
      </div>
      
      {/* Wave effect at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#f9fafb" fillOpacity="1" d="M0,96L80,85.3C160,75,320,53,480,53.3C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroBanner;