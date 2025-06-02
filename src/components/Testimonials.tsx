import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Mendoza",
    role: "Viajero frecuente",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5,
    quote: "El mejor servicio que he experimentado. Los asientos son cómodos, la comida deliciosa y el personal extremadamente atento. ¡Volveré a volar con ellos sin duda!"
  },
  {
    id: 2,
    name: "Ana García",
    role: "Empresaria",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5,
    quote: "Como viajera de negocios, valoro la puntualidad y el confort. SkyWay Airlines ha superado mis expectativas en ambos aspectos. Su programa de viajero frecuente es excelente."
  },
  {
    id: 3,
    name: "Miguel Suárez",
    role: "Fotógrafo de viajes",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4,
    quote: "He volado con muchas aerolíneas, pero el servicio a bordo y la atención al cliente de SkyWay son realmente excepcionales. Además, sus políticas de equipaje para equipo fotográfico son las mejores."
  },
  {
    id: 4,
    name: "Lucía Fernández",
    role: "Viajera con familia",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5,
    quote: "Viajar con niños puede ser complicado, pero SkyWay lo hace muy fácil. El personal fue atento con mis hijos y los kits de entretenimiento mantuvieron a los pequeños ocupados durante todo el vuelo."
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextTestimonial = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }
  };

  const prevTestimonial = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(interval);
  }, [isTransitioning]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lo que dicen nuestros pasajeros
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Miles de viajeros satisfechos eligen SkyWay Airlines para sus viajes. Estas son algunas de sus experiencias.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
          
          {/* Testimonials */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="min-w-full px-8 sm:px-12"
                >
                  <div className="bg-white p-8 rounded-xl shadow-md">
                    <div className="flex flex-col sm:flex-row items-center mb-6">
                      <div className="w-20 h-20 rounded-full overflow-hidden mb-4 sm:mb-0 sm:mr-6">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div className="text-center sm:text-left">
                        <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.role}</p>
                        <div className="flex items-center justify-center sm:justify-start mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i}
                              className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote>
                      <p className="text-gray-700 text-lg italic">"{testimonial.quote}"</p>
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-all ${
                  index === currentIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;