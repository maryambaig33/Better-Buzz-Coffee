import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { AIBarista } from './components/AIBarista';
import { Locations } from './components/Locations';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <MenuSection />
        <AIBarista />
        <Locations />
      </main>
      <Footer />
    </div>
  );
};

export default App;