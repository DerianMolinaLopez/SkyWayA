import React from 'react';
import { Plane } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block p-3 bg-white/20 rounded-full mb-6 animate-bounce">
            <Plane className="w-8 h-8" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            ¿Listo para despegar?
          </h2>
          
          <p className="text-xl mb-8 text-blue-100">
            Reserva tu próximo vuelo hoy mismo y comienza a disfrutar de una experiencia de viaje inigualable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Reserva ahora
            </button>
            
            <button className="bg-transparent hover:bg-white/10 border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Contáctanos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;