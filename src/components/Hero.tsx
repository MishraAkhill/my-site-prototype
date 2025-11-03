
import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-16">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            AKHIL MISHRA
          </h1>
          <div className="flex items-center justify-center mb-8">
            <div className="h-1 w-16 bg-red-500 mr-4"></div>
            <p className="text-xl md:text-2xl text-gray-600 font-medium">
              Chartered Accountant | Business & Fundraising Consultant | Philanthropist | Adventurer
            </p>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Dedicated to financial excellence, societal upliftment, and exploring the world's diverse landscapes. 
            Join me on a journey where finance, adventure, and social impact converge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#about"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Learn More About Me
            </a>
            <a
              href="#contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
