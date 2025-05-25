
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">About Me</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
              alt="Akhil Mishra"
              className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-100 rounded-full -z-10"></div>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I Akhil Mishra, a dedicated CA Finalist deeply engaged in Assurance & Business 
              Consulting at a leading CA firm. Beyond financial intricacies, I'm the founder of 
              "Unchained," a not-for-profit committed to societal upliftment. We envision a 
              future where everyone wakes up to a day free from hunger, suffering, abuse, and 
              poverty.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Outside the corporate world, I'm a road trip enthusiast on my Royal Enfield, 
              exploring miles and indulging my passion for Finance, Markets, and History. Amid 
              spreadsheets, I also find solace strumming melodies on my Ukulele, delving into 
              books, and practicing Yoga. This harmonious blend reflects my belief in 
              balancing professional excellence with personal well-being.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              In essence, I'm driven by diligence, dedication, and a profound passion for 
              excelling in every endeavor. Join me on a journey where finance, adventure, and 
              societal impact converge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
