import React from 'react';
import { Clock, Headphones, Utensils, Award } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 transition-transform duration-300">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vuela con la aerolínea líder en América Latina
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre por qué millones de viajeros nos eligen cada año para sus aventuras alrededor del mundo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<Clock className="w-12 h-12" />}
            title="Puntualidad garantizada"
            description="Más del 95% de nuestros vuelos salen y llegan a tiempo, respetando tu agenda y compromisos."
          />
          
          <FeatureCard 
            icon={<Headphones className="w-12 h-12" />}
            title="Asistencia 24/7"
            description="Nuestro equipo de atención al cliente está disponible en cualquier momento para resolver tus dudas."
          />
          
          <FeatureCard 
            icon={<Utensils className="w-12 h-12" />}
            title="Menú gourmet a bordo"
            description="Disfruta de una experiencia gastronómica excepcional con opciones para todos los gustos y necesidades."
          />
          
          <FeatureCard 
            icon={<Award className="w-12 h-12" />}
            title="Millas acumulables"
            description="Nuestro programa de viajero frecuente te premia con beneficios exclusivos y vuelos gratis."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;