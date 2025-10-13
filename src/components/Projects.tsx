import React from 'react';
import unchainedBanner from '@/assets/unchained-banner.png';
import unchainedWork1 from '@/assets/unchained-work-1.jpg';
import unchainedWork2 from '@/assets/unchained-work-2.jpg';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <img 
            src={unchainedBanner} 
            alt="Unchained - Empowering Lives, Unleashing Potential" 
            className="mx-auto w-full max-w-2xl mb-8"
          />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={unchainedWork1} 
                alt="Unchained community work - helping people" 
                className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <img 
                src={unchainedWork2} 
                alt="Unchained community work - distributing aid" 
                className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
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
