import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

interface Destination {
  id: number;
  name: string;
  country: string;
  image: string;
  description: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: 'París',
    country: 'Francia',
    image: 'https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'La ciudad del amor, con su icónica Torre Eiffel y exquisita gastronomía.'
  },
  {
    id: 2,
    name: 'Nueva York',
    country: 'Estados Unidos',
    image: 'https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'La Gran Manzana, un centro de cultura, arte y oportunidades sin fin.'
  },
  {
    id: 3,
    name: 'Tokio',
    country: 'Japón',
    image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Una fascinante mezcla de tradición y futurismo en el corazón de Asia.'
  },
  {
    id: 4,
    name: 'Cancún',
    country: 'México',
    image: 'https://images.pexels.com/photos/1802255/pexels-photo-1802255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Playas paradisíacas de arena blanca y aguas turquesas.'
  },
  {
    id: 5,
    name: 'Roma',
    country: 'Italia',
    image: 'https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'La Ciudad Eterna, cuna de la civilización occidental y el arte.'
  },
  {
    id: 6,
    name: 'Sídney',
    country: 'Australia',
    image: 'https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Icónica ciudad costera con su famosa Ópera y puentes impresionantes.'
  }
];

const Destinations: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Destinos destacados
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conectamos con los destinos más emocionantes del mundo. Descubre lugares increíbles y crea recuerdos inolvidables.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div 
              key={destination.id}
              className="relative rounded-xl overflow-hidden shadow-lg group"
              onMouseEnter={() => setHoveredId(destination.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div 
                className="h-80 bg-cover bg-center"
                style={{ backgroundImage: `url(${destination.image})` }}
              ></div>
              
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300 ${
                hoveredId === destination.id ? 'opacity-100' : 'opacity-90'
              }`}>
                <div className={`transform transition-transform duration-300 ${
                  hoveredId === destination.id ? 'translate-y-0' : 'translate-y-4'
                }`}>
                  <div className="flex items-center mb-2">
                    <MapPin className="w-5 h-5 text-blue-400 mr-2" />
                    <p className="text-white text-sm">{destination.country}</p>
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-2">{destination.name}</h3>
                  <p className={`text-gray-200 transition-opacity duration-300 ${
                    hoveredId === destination.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    {destination.description}
                  </p>
                  <button className={`mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                    hoveredId === destination.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    Explorar vuelos
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;