import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop" 
          alt="Coffee Shop Vibe" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start">
        <div className="max-w-3xl space-y-6">
          <div className="inline-block bg-buzz-yellow px-4 py-1 transform -rotate-2">
            <span className="font-display font-bold tracking-widest text-black text-sm md:text-base">EST. 2002</span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white leading-none tracking-tighter drop-shadow-lg">
            LIFE'S BETTER <br />
            <span className="text-buzz-yellow">BUZZED</span>
          </h1>
          <p className="text-white text-lg md:text-xl font-light max-w-lg opacity-90">
            Small batch roasting, signature drinks, and a vibe you can't find anywhere else. 
            Get your daily dose of happiness.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" variant="primary">
              View Menu <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="secondary" className="border-2 border-white !shadow-none hover:!bg-white hover:!text-black">
              Find a Location
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-buzz-yellow rounded-full"></div>
        </div>
      </div>
    </section>
  );
};