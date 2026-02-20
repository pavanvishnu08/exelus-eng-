
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, TrendingDown, Settings, ArrowRight, FileDown, 
  CheckCircle, Zap, ShieldCheck, Factory, Cpu
} from 'lucide-react';
import { BROCHURE_URL } from '../App';

const ServiceTabContent = ({ 
  icon: Icon, title, desc, details, items 
}: { 
  icon: any, title: string, desc: string, details: string, items: string[] 
}) => (
  <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
    <div className="flex flex-col lg:flex-row gap-10 md:gap-20 items-start">
      <div className="w-full lg:w-1/2">
        <div className="w-16 h-16 bg-brand-bright/10 text-brand-bright rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-bright/5">
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-3xl md:text-5xl font-black text-brand-dark mb-4 tracking-tighter leading-tight">{title}</h3>
        <p className="text-slate-500 font-semibold text-lg md:text-xl mb-6 italic border-l-4 border-brand-bright pl-6 leading-relaxed">
          {desc}
        </p>
        <p className="text-sm md:text-base text-slate-500 font-medium mb-8 leading-relaxed">
          {details}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {items.map((item, idx) => (
            <div key={idx} className="flex gap-4 items-center p-4 md:p-5 bg-slate-50 rounded-xl border border-slate-100 group hover:border-brand-bright/20 transition-all">
              <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-brand-bright shrink-0" />
              <span className="text-sm md:text-lg font-black text-brand-dark tracking-tight leading-tight">{item}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <Link to="/contact" className="inline-flex items-center justify-center gap-4 bg-brand-bright text-white px-8 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-brand-deep transition-all active:scale-95 shadow-xl shadow-brand-bright/10">
            Enquire Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="w-full lg:w-1/2 relative">
        <div className="aspect-[4/3] bg-slate-100 rounded-2xl overflow-hidden border-4 border-white shadow-xl max-w-md mx-auto lg:max-w-none">
           <img 
            src={title.includes('Audit') 
              ? "/img2.jpeg" 
              : title.includes('Retrofit')
              ? "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600"
              : "/img3.jpeg"
            } 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            alt={title} 
           />
        </div>
        <div className="absolute -top-4 -right-4 bg-brand-dark text-white p-6 rounded-2xl shadow-2xl">
          <p className="text-[8px] font-black uppercase tracking-[0.3em] mb-1 text-brand-bright">Certified Excellence</p>
          <p className="text-[10px] font-bold italic">Performance Handover</p>
        </div>
      </div>
    </div>
  </div>
);

const Services = () => {
  const [activeTab, setActiveTab] = useState('audit');

  const servicesData: Record<string, any> = {
    audit: {
      id: 'audit',
      icon: Search,
      title: 'Plant Audit & Optimization',
      desc: 'Identifying bottlenecks and enhancing lifecycle efficiency.',
      details: 'Comprehensive performance evaluation comparing existing plant metrics against original design basis. We use advanced diagnostic tools to identify operational gaps.',
      items: [
        'Performance Evaluation',
        'Process Verification',
        'Bottleneck Identification',
        'Efficiency Benchmarking'
      ]
    },
    retrofit: {
      id: 'retrofit',
      icon: TrendingDown,
      title: 'Retrofit & OPEX Reduction',
      desc: 'Redesigning legacy systems for modern industrial standards.',
      details: 'Specializing in brownfield expansions and energy optimization. We retrofit systems to handle new effluent characteristics while significantly reducing steam and power consumption.',
      items: [
        'Energy Optimization',
        'Steam/Power Reduction',
        'Brownfield Expansion',
        'OPEX-Focused Redesign'
      ]
    },
    execution: {
      id: 'execution',
      icon: Factory,
      title: 'Project Execution (EPC)',
      desc: 'Full-cycle engineering from modeling to commissioning.',
      details: 'Turnkey execution leveraging Tekla-based modeling and STAAD Pro analysis. We handle detailed engineering, procurement support, and site erection with rigorous FAT/SAT protocols.',
      items: [
        'Tekla 3D Modeling',
        'STAAD Pro Analysis',
        'EPC Project Mgmt',
        'FAT/SAT Commissioning'
      ]
    }
  };

  const tabs = [
    { id: 'audit', label: 'Audit & Optimization', icon: Search },
    { id: 'retrofit', label: 'Retrofit & Expansion', icon: TrendingDown },
    { id: 'execution', label: 'Project Execution', icon: Factory }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-brand-dark text-white pt-32 md:pt-48 pb-20 md:pb-28 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" alt="Industrial Engineering" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="text-brand-bright font-black uppercase tracking-[0.4em] text-[10px] mb-6 md:mb-8 block">Exelus Engineering Solutions</span>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-8 md:mb-10 tracking-tighter leading-[1.1]">
              ENGINEERING <br className="hidden md:block"/><span className="text-brand-bright">SERVICE MASTERY</span>
            </h1>
            <p className="text-base md:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto border-y border-white/10 py-8 mb-10">
              Transforming conventional processes into dynamic systems through technical excellence and lifecycle thinking.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={BROCHURE_URL} download="Exelus_Services_Guide.pdf" className="bg-brand-bright hover:bg-brand-deep text-white px-8 py-5 rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center gap-3 shadow-xl transition-all">
                <FileDown className="w-4 h-4" /> Technical Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-xs md:text-sm font-black text-brand-bright uppercase tracking-[0.5em] mb-6">Introduction</h2>
              <h3 className="text-3xl md:text-5xl font-black text-brand-dark mb-8 tracking-tighter">Our Excellence Pillars</h3>
              <p className="text-slate-600 font-semibold text-base md:text-lg leading-relaxed mb-6 italic">
                Our comprehensive suite of services is meticulously crafted to tackle the unique challenges faced by industrial clients, ensuring peak performance.
              </p>
              <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed">
                We provide a professional bridge between conceptual design and full-scale operation, focusing on robust industrial design and reliability without compromise.
              </p>
            </div>
            <div className="relative">
               <div className="aspect-video bg-slate-50 rounded-[2.5rem] overflow-hidden border-8 border-white shadow-3xl">
                  <img src="/img6.jpeg" className="w-full h-full object-cover" alt="Service Engineering" />
               </div>
               <div className="absolute -bottom-6 -left-6 bg-brand-bright p-8 rounded-3xl text-white shadow-2xl hidden md:block">
                  <Cpu className="w-10 h-10 mb-4" />
                  <p className="font-black text-xs uppercase tracking-widest">Digital Integration</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-slate-50">
        <div className="bg-white border-y border-slate-100 z-20 relative">
          <div className="container mx-auto flex flex-wrap py-6 md:py-10 px-4 gap-4 md:gap-8 justify-center">
            {tabs.map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-8 py-5 rounded-xl font-black text-xs md:text-base uppercase tracking-widest transition-all whitespace-nowrap border-2 ${
                  activeTab === tab.id 
                  ? 'bg-brand-bright text-white border-brand-bright shadow-lg shadow-brand-bright/20' 
                  : 'text-slate-500 border-transparent hover:bg-slate-50'
                }`}
              >
                <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? 'text-white' : 'text-brand-bright'}`} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 pt-12 pb-24 md:pt-16 md:pb-32">
           <h2 className="text-xs md:text-sm font-black text-brand-bright text-center uppercase tracking-[0.6em] mb-8 md:mb-12">Capacities & Expertise</h2>
           <ServiceTabContent {...servicesData[activeTab]} />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 md:py-40 bg-white">
        <div className="container mx-auto px-6">
           <div className="max-w-5xl mx-auto bg-brand-dark rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-3xl">
              <div className="absolute inset-0 opacity-20"><img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" alt="Philosophy" /></div>
              <div className="absolute inset-0 bg-gradient-to-br from-brand-dark to-brand-deep/80"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-black mb-10 md:mb-12 tracking-tighter leading-tight italic">
                  Sustainable <span className="text-brand-bright">engineering innovation</span> <br className="hidden md:block"/>for a reliable industrial future.
                </h3>
                <p className="text-slate-300 font-semibold text-sm md:text-lg leading-relaxed max-w-3xl mx-auto mb-12">
                  Our customized solutions are based on actual operating conditions, leveraging strong integration of process, mechanical, and structural engineering.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-4 bg-brand-bright text-white px-10 py-6 rounded-2xl font-black uppercase text-[10px] md:text-xs tracking-[0.3em] shadow-2xl hover:bg-white hover:text-brand-dark transition-all active:scale-95">
                   Enquire with Experts <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
