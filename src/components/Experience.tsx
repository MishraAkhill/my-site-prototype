import React from 'react';
import { Briefcase } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
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
    <section id="experience" className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-primary font-medium mb-1">
                    {exp.company}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {exp.location}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-muted-foreground flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Testimonials</h3>
          <p className="text-center text-muted-foreground">
            Testimonials coming soon...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
