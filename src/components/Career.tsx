import React from 'react';
import { Calendar, Briefcase } from 'lucide-react';
const Career = () => {
  const experiences = [{
    period: "2017-2020",
    institution: "University of Delhi",
    subtitle: "Deshbandhu College",
    position: "B.COM(Honours)",
    description: "Coursework: Financial Accounting | Cost Accounting | Computer Applications in Business | Goods and Services Tax | Income Tax Laws | Tally ERP9",
    isCurrentStudy: false
  }];
  return <section id="career" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Education & Skills</h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => <div key={index} className="relative mb-12 last:mb-0">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-8">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full">
                    {exp.isCurrentStudy ? <Briefcase className="w-6 h-6 text-white" /> : <Calendar className="w-6 h-6 text-white" />}
                  </div>
                </div>
                
                <div className="flex-grow bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {exp.institution}
                  </h3>
                  
                  {exp.subtitle && <div className="flex items-center mb-2">
                      <div className="h-0.5 w-8 bg-red-500 mr-3"></div>
                      <p className="text-gray-600 font-medium">{exp.subtitle}</p>
                    </div>}
                  
                  <div className="flex items-center mb-3">
                    <div className="h-0.5 w-8 bg-red-500 mr-3"></div>
                    <p className="text-gray-800 font-semibold">{exp.position}</p>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
              
              {index < experiences.length - 1 && <div className="absolute left-6 top-12 w-0.5 h-16 bg-gray-300"></div>}
            </div>)}
        </div>
      </div>
    </section>;
};
export default Career;