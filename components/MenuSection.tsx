import React from 'react';
import { MenuItem } from '../types';

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
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-black mb-2">
              POPULAR <span className="text-transparent bg-clip-text bg-gradient-to-br from-buzz-yellow to-orange-500">PICKS</span>
            </h2>
            <p className="text-gray-600 font-light text-lg">Handcrafted favorites that keep our bees buzzing.</p>
          </div>
          <button className="hidden md:block font-display text-xl border-b-2 border-black hover:text-buzz-yellow hover:border-buzz-yellow transition-colors mt-4 md:mt-0">
            View Full Menu
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularItems.map((item) => (
            <div key={item.id} className="group relative cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden rounded-lg mb-4 bg-gray-100">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {item.popular && (
                  <div className="absolute top-4 left-4 bg-buzz-yellow text-black px-3 py-1 font-display font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    FAN FAVE
                  </div>
                )}
                {/* Overlay Button */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <div className="bg-white rounded-full p-3 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                   </div>
                </div>
              </div>
              
              <div className="space-y-1">
                <h3 className="text-2xl font-display font-bold text-black group-hover:text-buzz-yellow transition-colors">
                  {item.name}
                </h3>
                <div className="flex justify-between items-center">
                    <p className="text-gray-500 text-sm font-light line-clamp-2 pr-2">{item.description}</p>
                    <span className="font-bold text-lg">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
            <button className="font-display text-xl border-b-2 border-black pb-1">
                View Full Menu
            </button>
        </div>
      </div>
    </section>
  );
};