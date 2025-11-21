import React from 'react';
import { Coffee, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t-4 border-buzz-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-buzz-yellow" />
              <span className="font-display text-3xl font-bold">BETTER BUZZ</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Life's Better Buzzed. We are committed to sourcing fair trade organic coffee beans and serving them with a smile.
            </p>
          </div>

          <div>
            <h4 className="font-display text-xl font-bold text-buzz-yellow mb-6">QUICK LINKS</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-buzz-yellow transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-buzz-yellow transition-colors">Menu</a></li>
              <li><a href="#" className="hover:text-buzz-yellow transition-colors">Locations</a></li>
              <li><a href="#" className="hover:text-buzz-yellow transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl font-bold text-buzz-yellow mb-6">GET IN TOUCH</h4>
            <ul className="space-y-4 text-gray-400">
              <li>info@betterbuzzcoffee.com</li>
              <li>619-555-0123</li>
              <li>San Diego, California</li>
            </ul>
          </div>

          <div>
             <h4 className="font-display text-xl font-bold text-buzz-yellow mb-6">FOLLOW US</h4>
             <div className="flex space-x-4">
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-buzz-yellow hover:text-black transition-all">
                    <Instagram size={20} />
                </a>
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-buzz-yellow hover:text-black transition-all">
                    <Facebook size={20} />
                </a>
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-buzz-yellow hover:text-black transition-all">
                    <Twitter size={20} />
                </a>
             </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Better Buzz Coffee. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};