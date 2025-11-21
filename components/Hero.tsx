import React from 'react';
import { Button } from './Button';
import { ArrowRight, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop" 
          alt="Coffee Shop Vibe" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
        
        {/* Honeycomb decorative overlay */}
        <div className="absolute inset-0 bg-honeycomb opacity-20 pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start pt-20">
        <div className="max-w-4xl space-y-6 z-10">
          <div className="flex items-center space-x-4 animate-in fade-in slide-in-from-left duration-700">
            <div className="bg-buzz-yellow px-4 py-1 transform -skew-x-12 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
              <span className="font-display font-bold tracking-widest text-black text-sm md:text-base transform skew-x-12 inline-block">EST. 2002</span>
            </div>
            <div className="flex space-x-1">
                 <Zap className="text-buzz-yellow fill-buzz-yellow h-5 w-5" />
                 <Zap className="text-buzz-yellow fill-buzz-yellow h-5 w-5" />
                 <Zap className="text-buzz-yellow fill-buzz-yellow h-5 w-5" />
            </div>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-display font-bold text-white leading-[0.85] tracking-tighter drop-shadow-2xl animate-in fade-in slide-in-from-bottom duration-700 delay-100">
            LIFE'S <br />
            BETTER <br />
            <span className="text-buzz-yellow relative inline-block">
              BUZZED
              <svg className="absolute -bottom-4 left-0 w-full h-4 text-buzz-yellow" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>
          
          <p className="text-white text-lg md:text-2xl font-light max-w-xl opacity-90 border-l-4 border-buzz-yellow pl-6 py-2 animate-in fade-in slide-in-from-bottom duration-700 delay-200 bg-black/40 backdrop-blur-sm rounded-r-lg">
            Small batch roasting, signature drinks, and a vibe you won't find anywhere else. 
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-8 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            <Button size="lg" variant="primary" className="text-xl px-10 py-5">
              View Menu <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button size="lg" variant="secondary" className="text-xl px-10 py-5 border-2 border-white !shadow-none hover:!bg-white hover:!text-black">
              Find a Location
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-buzz-yellow rounded-full shadow-[0_0_10px_rgba(255,199,44,0.8)]"></div>
        </div>
      </div>
    </section>
  );
};