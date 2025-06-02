import React, { useState, useEffect } from 'react';
import { Plane } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md text-gray-800 py-2' 
          : 'bg-transparent text-white py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Plane className="w-8 h-8 mr-2 text-blue-600" />
            <span className="text-xl font-bold">SkyWay Airlines</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-blue-500 transition-colors">Inicio</a>
            <a href="#why-us" className="hover:text-blue-500 transition-colors">¿Por qué elegirnos?</a>
            <a href="#destinations" className="hover:text-blue-500 transition-colors">Destinos</a>
            <a href="#offers" className="hover:text-blue-500 transition-colors">Ofertas</a>
            <a href="#experience" className="hover:text-blue-500 transition-colors">Experiencia</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
          
          {/* Book Now Button */}
          <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors">
            Reserva ahora
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg absolute left-4 right-4 top-full">
            <nav className="flex flex-col space-y-3 p-4">
              <a 
                href="#home" 
                className="text-gray-800 hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Inicio
              </a>
              <a 
                href="#why-us" 
                className="text-gray-800 hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ¿Por qué elegirnos?
              </a>
              <a 
                href="#destinations" 
                className="text-gray-800 hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Destinos
              </a>
              <a 
                href="#offers" 
                className="text-gray-800 hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Ofertas
              </a>
              <a 
                href="#experience" 
                className="text-gray-800 hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Experiencia
              </a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors mt-2">
                Reserva ahora
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;