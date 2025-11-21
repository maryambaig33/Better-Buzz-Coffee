import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee, ShoppingBag } from 'lucide-react';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Locations', href: '#locations' },
    { name: 'Shop Merch', href: '#' },
    { name: 'Loyalty', href: '#' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white py-3 shadow-md' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 z-50">
            <div className="bg-buzz-yellow p-2 border-2 border-black">
                <Coffee className="h-6 w-6 text-black" strokeWidth={2.5} />
            </div>
            <span className={`font-display text-2xl tracking-wider font-bold ${isScrolled || isMobileMenuOpen ? 'text-black' : 'text-black md:text-white'}`}>
            BETTER BUZZ
            </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`font-display tracking-wide text-lg hover:text-buzz-yellow transition-colors ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button variant={isScrolled ? 'secondary' : 'primary'} size="sm">
            Order Online
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 text-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} className={isScrolled ? 'text-black' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="font-display text-4xl text-black hover:text-buzz-yellow"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <Button size="lg" onClick={() => setIsMobileMenuOpen(false)}>
          Order Now
        </Button>
      </div>
    </header>
  );
};