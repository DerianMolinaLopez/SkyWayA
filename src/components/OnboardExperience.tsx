import React, { useState } from 'react';

interface ExperienceTab {
  id: string;
  title: string;
  icon: string;
  description: string;
  imageUrl: string;
}

const experienceTabs: ExperienceTab[] = [
  {
    id: 'premium',
    title: 'Asientos Premium',
    icon: '🌟',
    description: 'Disfruta de asientos más amplios, con mayor reclinación y un servicio de primera clase. Nuestros asientos premium ofrecen el máximo confort para que llegues a tu destino descansado y relajado.',
    imageUrl: 'https://images.pexels.com/photos/1309644/pexels-photo-1309644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'entertainment',
    title: 'Entretenimiento a bordo',
    icon: '🎬',
    description: 'Sistema de entretenimiento de última generación con miles de horas de contenido. Disfruta de películas, series, música y juegos durante todo tu vuelo en nuestras pantallas HD personales.',
    imageUrl: 'https://images.pexels.com/photos/4178664/pexels-photo-4178664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'family',
    title: 'Comodidades para familias',
    icon: '👪',
    description: 'Viajar con niños nunca fue tan fácil. Ofrecemos kits de entretenimiento para los más pequeños, menús infantiles especiales y asistencia prioritaria para familias durante todo el vuelo.',
    imageUrl: 'https://images.pexels.com/photos/6214786/pexels-photo-6214786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const OnboardExperience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(experienceTabs[0].id);

  const getActiveTabData = () => {
    return experienceTabs.find(tab => tab.id === activeTab) || experienceTabs[0];
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experiencia a bordo
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre por qué volar con nosotros es una experiencia excepcional desde el momento en que abordas.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side - Tabs */}
          <div className="lg:w-1/3">
            <div className="bg-gray-100 rounded-xl p-4">
              {experienceTabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`w-full text-left p-4 mb-2 rounded-lg transition-all duration-300 flex items-center ${
                    activeTab === tab.id 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="text-xl mr-3">{tab.icon}</span>
                  <span className="font-medium">{tab.title}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="lg:w-2/3">
            <div className="bg-gray-100 rounded-xl overflow-hidden">
              <div className="h-64 md:h-80">
                <img 
                  src={getActiveTabData().imageUrl} 
                  alt={getActiveTabData().title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">
                  {getActiveTabData().icon} {getActiveTabData().title}
                </h3>
                <p className="text-gray-700 text-lg">
                  {getActiveTabData().description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardExperience;