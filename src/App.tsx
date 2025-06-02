import React from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import WhyChooseUs from './components/WhyChooseUs';
import Destinations from './components/Destinations';
import OffersPromotions from './components/OffersPromotions';
import OnboardExperience from './components/OnboardExperience';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Header />
      <main>
        <HeroBanner />
        <WhyChooseUs />
        <Destinations />
        <OffersPromotions />
        <OnboardExperience />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;