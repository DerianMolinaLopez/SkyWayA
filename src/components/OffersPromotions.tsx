import React from 'react';
import { Tag, Calendar, TrendingUp } from 'lucide-react';

interface Offer {
  id: number;
  title: string;
  discount: string;
  description: string;
  imageUrl: string;
  validUntil: string;
  tag: string;
}

const offers: Offer[] = [
  {
    id: 1,
    title: "Oferta Flash de Verano",
    discount: "30% OFF",
    description: "En vuelos nacionales este mes. ¡Reserva ya y ahorra!",
    imageUrl: "https://images.pexels.com/photos/2007401/pexels-photo-2007401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    validUntil: "30 de junio, 2025",
    tag: "Limited Time"
  },
  {
    id: 2,
    title: "Paquete Familiar",
    discount: "Niños Gratis",
    description: "Los menores de 12 años vuelan gratis en rutas internacionales seleccionadas.",
    imageUrl: "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    validUntil: "31 de agosto, 2025",
    tag: "Family Deal"
  },
  {
    id: 3,
    title: "Viajero Frecuente",
    discount: "2X Millas",
    description: "Duplica tus millas en todos los vuelos de larga distancia.",
    imageUrl: "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    validUntil: "15 de julio, 2025",
    tag: "Rewards"
  },
];

const OffersPromotions: React.FC = () => {
  return (
    <section id="offers" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ofertas y promociones
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Aprovecha nuestras increíbles ofertas y descuentos exclusivos para tu próximo viaje.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div 
              key={offer.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="relative h-48">
                <img 
                  src={offer.imageUrl} 
                  alt={offer.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-sm font-bold py-1 px-3 rounded-full flex items-center">
                  <Tag className="w-4 h-4 mr-1" />
                  {offer.tag}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-blue-600">{offer.discount}</span>
                </div>
                <p className="text-gray-600 mb-4 flex-1">{offer.description}</p>
                
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>Válido hasta: {offer.validUntil}</span>
                </div>
                
                <button className="bg-blue-600 hover:bg-blue-700 text-white w-full py-3 rounded-md font-medium transition-colors flex items-center justify-center">
                  Aprovecha ahora <TrendingUp className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersPromotions;