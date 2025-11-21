import React from 'react';
import { MenuItem } from '../types';
import { Star } from 'lucide-react';

const popularItems: MenuItem[] = [
  {
    id: '1',
    name: 'Best Drink Ever®',
    description: 'Our signature vanilla powder combined with espresso and water. Creamy, sweet, and caffeinated.',
    price: '$5.50',
    category: 'drink',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=800&auto=format&fit=crop',
    popular: true
  },
  {
    id: '2',
    name: 'The Hornet',
    description: 'A bold latte with cinnamon honey and espresso. Hits you with a sweet sting.',
    price: '$6.00',
    category: 'drink',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'OG Acai Bowl',
    description: 'Organic acai topped with hemp granola, bananas, strawberries, and blueberries.',
    price: '$11.95',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'Iced Matcha Latte',
    description: 'Premium matcha green tea whisked with milk and sweetened to perfection.',
    price: '$5.75',
    category: 'drink',
    image: 'https://images.unsplash.com/photo-1515823664972-6d66e795b692?q=80&w=800&auto=format&fit=crop'
  }
];

export const MenuSection: React.FC = () => {
  return (
    <section id="menu" className="py-24 bg-white relative">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-white"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-4 border-buzz-yellow pb-8">
          <div>
            <h2 className="text-6xl md:text-8xl font-display font-bold text-black mb-2 leading-none">
              POPULAR <br />
              <span className="text-buzz-yellow text-stroke-black">PICKS</span>
            </h2>
            <p className="text-gray-600 font-light text-xl mt-4 max-w-md">Handcrafted favorites that keep our bees buzzing all day long.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 font-display text-xl bg-black text-white px-8 py-3 hover:bg-buzz-yellow hover:text-black transition-all duration-300 transform hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(255,199,44,1)]">
            View Full Menu
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {popularItems.map((item) => (
            <div key={item.id} className="group relative cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden mb-6 bg-gray-100 relative shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {item.popular && (
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-buzz-yellow flex items-center justify-center clip-hexagon shadow-lg z-10 animate-pulse">
                    <div className="text-center transform -rotate-12">
                        <Star className="w-4 h-4 mx-auto fill-black text-black" />
                        <span className="block font-display font-bold text-xs leading-tight text-black">FAN<br/>FAVE</span>
                    </div>
                  </div>
                )}
                {/* Overlay */}
                <div className="absolute inset-0 bg-buzz-yellow/80 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                   <h4 className="font-display text-2xl font-bold text-black mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.name}</h4>
                   <p className="text-black font-medium text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.description}</p>
                   <span className="mt-4 bg-black text-white px-4 py-2 font-display text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{item.price}</span>
                </div>
              </div>
              
              <div className="space-y-1 text-center group-hover:opacity-0 transition-opacity duration-300 absolute bottom-0 left-0 right-0 bg-white/90 p-2">
                <h3 className="text-2xl font-display font-bold text-black uppercase">
                  {item.name}
                </h3>
                <p className="font-bold text-buzz-yellow text-xl">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
            <button className="font-display text-xl bg-black text-white px-8 py-3 w-full">
                View Full Menu
            </button>
        </div>
      </div>
    </section>
  );
};