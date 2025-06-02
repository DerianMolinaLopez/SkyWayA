import React from 'react';
import { Plane, Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <Plane className="w-8 h-8 mr-2 text-blue-400" />
              <span className="text-2xl font-bold">SkyWay Airlines</span>
            </div>
            <p className="text-gray-400 mb-6">
              Conectando personas, uniendo destinos. Desde 2002, ofreciendo experiencias de vuelo excepcionales.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">Enlaces rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre nosotros</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Destinos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Ofertas especiales</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Programa de viajero frecuente</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Viajes de negocios</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Políticas de equipaje</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-400">Reservas:</p>
                  <p>+1 800 123 4567</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-400">Email:</p>
                  <p>info@skyway-airlines.com</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-400">Oficinas centrales:</p>
                  <p>Av. Aeropuerto 123, Madrid, España</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">Suscríbete a nuestro boletín</h3>
            <p className="text-gray-400 mb-4">
              Recibe ofertas exclusivas, noticias y actualizaciones directamente en tu bandeja de entrada.
            </p>
            <form className="flex flex-col space-y-3">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Tu correo electrónico" 
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 p-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <label className="flex items-start text-sm text-gray-400">
                <input type="checkbox" className="mt-1 mr-2" />
                Acepto recibir comunicaciones promocionales de SkyWay Airlines.
              </label>
            </form>
          </div>
        </div>
        
        {/* Footer bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} SkyWay Airlines. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Términos y condiciones</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Política de privacidad</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Cookies</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Mapa del sitio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;