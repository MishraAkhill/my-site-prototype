
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Unchained: Empowering Lives, Unleashing Potential
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="text-center mb-8">
              <div className="inline-block p-6 bg-gray-900 rounded-full mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-white">
                      <path d="M20 30 L40 10 L60 30 L80 10 L80 90 L20 90 Z" fill="currentColor" />
                      <circle cx="30" cy="50" r="3" fill="currentColor" />
                      <circle cx="50" cy="60" r="3" fill="currentColor" />
                      <circle cx="70" cy="45" r="3" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Unchained</h3>
              <p className="text-xl text-gray-600 italic">Empowering Lives, Unleashing Potential</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Unchained is a dedicated NGO committed to uplifting the lives of 
              underprivileged children in our society. Our primary goal is to provide essential 
              amenities and education to children below the age of 15—the budding future of 
              our nation. We firmly believe that proper guidance, basic education, and 
              nutritious food are fundamental elements enabling these children to reach their 
              full potential, thereby helping our country overcome challenges such as poverty, 
              malnutrition, and a lack of access to quality education.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-blue-900 mb-3">Breaking the Cycle of Poverty and Illiteracy</h4>
              <p className="text-blue-800">
                We achieve our goals through comprehensive programs focused on parental education, 
                holistic family assistance, and beyond-textbook learning experiences that foster 
                natural curiosity and creativity.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">Our Approach:</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-800 mb-2">Parental Education and Support</h5>
                  <p className="text-sm text-gray-600">Educating parents and providing financial assistance to empower families.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-800 mb-2">Beyond Textbooks Learning</h5>
                  <p className="text-sm text-gray-600">Providing opportunities to explore talents and develop skills outside traditional curriculum.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
