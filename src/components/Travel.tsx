
import React from 'react';

const Travel = () => {
  return (
    <section id="travel" className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Wheels and Wanderlust: Embracing the Open Road
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Welcome to "Wheels and Wanderlust," a space where I share my passion for road trips 
            and the exhilarating journeys that unfold on the open road.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">Exploring the Roads Less Traveled</h3>
              <p className="text-lg opacity-90 leading-relaxed">
                Embarking on numerous road trips has been a journey of discovery, taking me to 
                enchanting destinations and allowing me to connect with the diverse landscapes of India. 
                From the vibrant streets of Jaipur to the serene banks of Rishikesh, each road has 
                been a story waiting to unfold.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">A Thrilling Ascent to Tungnath</h3>
              <p className="text-lg opacity-90 leading-relaxed">
                One of the most memorable chapters of my road adventures took me to the highest 
                abode of Lord Shiva – Tungnath. Mounted on my trusty Royal Enfield, I undertook a 
                thrilling 450-kilometer journey from Delhi to Tungnath, completing the mesmerizing 
                ascent in a mere 12 hours.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">A Pilgrimage on Two Wheels</h3>
              <p className="text-lg opacity-90 leading-relaxed">
                The road to Tungnath is more than just a physical journey; it's a pilgrimage of the soul. 
                As the altitude increased, so did the spiritual energy. The crisp mountain air and the 
                hum of the engine created a symphony that echoed through the valleys.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&h=400&fit=crop"
              alt="Mountain road trip"
              className="rounded-lg shadow-2xl w-full"
            />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-white/20 rounded-full backdrop-blur-sm"></div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm"></div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl opacity-90 italic max-w-4xl mx-auto">
            "Wheels and Wanderlust" is not just about the miles covered; it's about the moments 
            captured along the way. Whether it's the panoramic views from a mountain pass, the 
            warmth of a roadside chai stall, or the camaraderie shared with fellow travelers, 
            these are the snapshots that define the essence of my road trips.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Travel;
