import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import nikhilMittalImg from '@/assets/nikhil-mittal.png';

const Experience = () => {
  const experiences = [
    {
      title: "Head of Finance",
      company: "Flexprice",
      period: "Sep 2024 - Present · 1 yr 2 mos",
      location: "Gurugram, Haryana, India",
      description: [
        "Leading fund raise",
        "Financial planning, cash flow management, and unit economics",
        "Structuring investor reports and internal MIS",
        "Ensuring compliance and setting up scalable finance processes",
        "Advising on pricing models and long-term financial sustainability"
      ]
    },
    {
      title: "Founder",
      company: "Unchained",
      period: "Apr 2021 - Present · 4 yrs 7 mos",
      location: "Gurugram, Haryana, India",
      description: [
        "Founded and scaled a non-profit focused on social impact, delivering programs that reached 5,000+ beneficiaries",
        "Created governance and finance frameworks, earning recognition from partner NGOs and regulatory bodies",
        "Led cross-functional teams and built partnerships across business and social sectors, expanding outreach"
      ]
    },
    {
      title: "Audit Executive",
      company: "Sahni Natarajan & Bahl · Full-time",
      period: "Jul 2022 - Jul 2025 · 3 yrs 1 mo",
      location: "Delhi, India",
      description: [
        "Led audits for Indian corporates and MNCs in FMCG and startup sectors",
        "Covered Finance & Accounts, P2P, O2C, I2C, Payroll, T&E, Distribution Centers, Revenue Validation, and Provident Funds",
        "Performed control testing and D2C marketing audits"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600">A journey through finance, consulting, and social impact</p>
        </div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-blue-600 font-semibold mb-2">
                    {exp.company}
                  </p>
                  <p className="text-gray-600">
                    {exp.location}
                  </p>
                </div>
                <span className="text-gray-500 font-medium whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              
              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-700 flex gap-3 leading-relaxed">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">What People Say</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Manish Choudhary - First */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-md">
                  MC
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed text-lg">
                  "Akhil has been a tremendous asset on the Finance front. He quickly understood our business, brought structure to our financial processes, and was instrumental in getting us ready for fundraising. He's reliable, takes initiative, and has a great sense of what early-stage companies need from their finance function."
                </p>
                <h4 className="font-bold text-xl text-gray-900 mb-1">Manish Choudhary</h4>
                <p className="text-blue-600 font-medium">CEO at Flexprice</p>
              </div>
            </div>

            {/* CA Nikhil Mittal - Second */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                <Avatar className="w-24 h-24 mb-6 shadow-md">
                  <AvatarImage src={nikhilMittalImg} alt="CA Nikhil Mittal" />
                  <AvatarFallback className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white text-2xl font-bold">NM</AvatarFallback>
                </Avatar>
                <p className="text-gray-700 italic mb-6 leading-relaxed text-lg">
                  "Akhil is a real spark! He's got tons of energy and is amazing at connecting with people. He's a valuable asset to any team. He's a great teammate and always goes the extra mile to deliver the best to client. His confident and commendable personality puts them at ease, allowing him to effectively deliver exceptional service."
                </p>
                <h4 className="font-bold text-xl text-gray-900 mb-1">CA Nikhil Mittal</h4>
                <p className="text-blue-600 font-medium">Sr. Internal Audit Officer | Chartered Accountant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
