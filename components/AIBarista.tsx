import React, { useState } from 'react';
import { Sparkles, Send, Coffee, Loader2 } from 'lucide-react';
import { Button } from './Button';
import { getDrinkRecommendation } from '../services/geminiService';

export const AIBarista: React.FC = () => {
  const [input, setInput] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGetRecommendation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    const result = await getDrinkRecommendation(input);
    setRecommendation(result);
    setLoading(false);
  };

  return (
    <section className="py-24 bg-buzz-black text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-buzz-yellow opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-900 opacity-20 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-buzz-yellow rounded-full mb-4">
            <Sparkles className="h-6 w-6 text-black" />
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">
            THE AI <span className="text-buzz-yellow">BARISTA</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Not sure what to order? Tell our virtual barista how you're feeling or what flavors you love, 
            and we'll find your perfect buzz.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Input Side */}
            <div>
              <form onSubmit={handleGetRecommendation} className="space-y-6">
                <div>
                  <label htmlFor="mood" className="block text-buzz-yellow font-display text-xl mb-2">
                    How's your vibe today?
                  </label>
                  <textarea
                    id="mood"
                    rows={4}
                    className="w-full bg-black/50 border-2 border-gray-700 rounded-lg p-4 text-white placeholder-gray-500 focus:border-buzz-yellow focus:ring-0 transition-colors resize-none text-lg"
                    placeholder="e.g. I need to stay awake for a study session, I love sweet things, or I'm feeling adventurous..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                </div>
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full md:w-auto"
                  disabled={loading || !input.trim()}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Brewing Idea...
                    </>
                  ) : (
                    <>
                      Get Recommendation <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Output Side */}
            <div className="relative min-h-[300px] flex items-center justify-center bg-black/30 rounded-xl p-8 border border-white/5">
              {recommendation ? (
                <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <Coffee className="h-12 w-12 text-buzz-yellow mx-auto mb-4" />
                  <h3 className="text-2xl font-display font-bold text-white mb-4">
                    WE RECOMMEND:
                  </h3>
                  <p className="text-xl md:text-2xl font-light italic leading-relaxed text-gray-200">
                    "{recommendation}"
                  </p>
                </div>
              ) : (
                <div className="text-center text-gray-500">
                  <Coffee className="h-16 w-16 mx-auto mb-4 opacity-20" />
                  <p className="text-lg">Your perfect drink awaits...</p>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};