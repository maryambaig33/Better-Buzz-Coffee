import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import { Button } from './Button';

const locations = [
  {
    id: '1',
    name: 'Hillcrest',
    address: '801 University Ave, San Diego, CA',
    hours: '5:00 AM - 8:00 PM',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'La Jolla',
    address: '909 Prospect St, La Jolla, CA',
    hours: '5:30 AM - 7:00 PM',
    image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Pacific Beach',
    address: '1186 Garnet Ave, San Diego, CA',
    hours: '5:00 AM - 9:00 PM',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop'
  }
];

export const Locations: React.FC = () => {
  return (
    <section id="locations" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-buzz-yellow font-display font-bold text-xl tracking-wider">FIND YOUR SPOT</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-black mt-2">COME GET <span className="text-buzz-yellow">BUZZED</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((loc) => (
            <div key={loc.id} className="bg-white group hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={loc.image} 
                  alt={loc.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-black text-white p-2 rounded-full">
                    <MapPin size={20} />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-display font-bold mb-4">{loc.name.toUpperCase()}</h3>
                <div className="space-y-3 text-gray-600 mb-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-buzz-yellow shrink-0" />
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-buzz-yellow shrink-0" />
                    <span>{loc.hours}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-black group-hover:text-white">
                  Get Directions
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};