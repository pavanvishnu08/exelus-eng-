
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Play, ChevronLeft, ChevronRight, Droplets, Factory, Layout, Zap, Beaker, Leaf, FlaskConical, FileDown, Database, ShieldCheck, Target
} from 'lucide-react';
import { BROCHURE_URL } from '../App';

const DomainCard = ({ icon: Icon, title, items }: { icon: any, title: string, items: string[] }) => (
  <div className="bg-white p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-slate-100 hover:shadow-2xl hover:border-brand-bright/20 transition-all duration-500 group flex flex-col h-full">
    <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-bright/5 text-brand-bright rounded-[1.25rem] md:rounded-[1.5rem] flex items-center justify-center mb-8 md:mb-10 group-hover:brand-gradient group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-lg shadow-brand-bright/10">
      <Icon className="w-8 h-8 md:w-10 md:h-10" />
    </div>
    <h3 className="text-xl md:text-2xl font-black text-brand-dark mb-6 md:mb-8 tracking-tighter uppercase leading-tight group-hover:text-brand-bright transition-colors">
      {title}
    </h3>
    <ul className="space-y-4 md:space-y-5 mt-auto">
      {items.map((item, idx) => (
        <li key={idx} className="text-slate-500 text-[10px] md:text-[11px] font-bold flex items-start gap-3 md:gap-4 leading-relaxed">
          <div className="w-2 h-2 bg-brand-bright/40 rounded-full mt-1.5 shrink-0 group-hover:bg-brand-bright transition-all" /> 
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Advanced Process Equipment ETP, ZLD, EPC Solutions",
      subtitle: "High-recovery ETP and ZLD systems designed for zero environmental footprint and resource recovery.",
      image: "/home1.jpeg",
    },
    {
      title: "ADVANCING PROCESS & WATER ENGINEERING THROUGH TECHNOLOGY",
      subtitle: "High-recovery ETP and ZLD systems designed for zero environmental footprint and resource recovery.",
      image: "/home2.jpeg",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % slides.length), 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[600px] h-[100svh] flex items-stretch overflow-hidden z-10">
        {slides.map((slide, index) => (
          <div key={index} className={`absolute inset-0 transition-all duration-[1200ms] ease-out ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'}`}>
            <img src={slide.image} className="w-full h-full object-cover brightness-[0.25]" alt={slide.title} />
            <div className="absolute inset-0 hero-gradient" />
            <div className="container mx-auto px-6 md:px-12 absolute inset-0 flex items-center pt-24 md:pt-32">
              <div className={`max-w-6xl transition-all duration-1000 delay-300 ${index === currentSlide ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <span className="h-px w-8 md:w-12 bg-brand-bright"></span>
                  <span className="text-brand-bright text-[14px] md:text-[16px] font-black tracking-[0.3em] md:tracking-[0.5em] uppercase">Engineering the Future of Industrial Sustainability</span>
                </div>
<h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] mb-8 md:mb-10 tracking-tighter text-white uppercase break-normal">
                  {slide.title}
                </h1>
                <p className="text-sm md:text-xl text-slate-300 mb-8 md:mb-12 leading-relaxed max-w-2xl font-medium border-l-4 border-brand-bright pl-6 md:pl-10 italic">{slide.subtitle}</p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-5">
                  <Link to="/products" className="bg-brand-bright hover:bg-brand-deep text-white px-8 md:px-12 py-4 md:py-6 rounded-xl font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-[9px] md:text-[10px] flex items-center justify-center gap-3 md:gap-4 shadow-3xl shadow-brand-bright/20 active:scale-95 transition-all">Our Portfolio <ArrowRight className="w-4 h-4" /></Link>
                  <a href={BROCHURE_URL} download="Exelus_Engineering_Brochure.pdf" className="bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white border border-white/20 px-8 md:px-12 py-4 md:py-6 rounded-xl font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-[9px] md:text-[10px] flex items-center justify-center gap-3 transition-all">Download Brochure <FileDown className="w-4 h-4" /></a>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* Slide Controls */}
        <div className="absolute bottom-10 right-6 md:right-12 flex items-center gap-3 md:gap-4 z-40">
           <button onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)} className="p-4 md:p-5 rounded-xl border border-white/10 text-white hover:bg-brand-bright backdrop-blur-md transition-all active:scale-90"><ChevronLeft className="w-5 h-5 md:w-6 md:h-6" /></button>
           <button onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)} className="p-4 md:p-5 rounded-xl border border-white/10 text-white hover:bg-brand-bright backdrop-blur-md transition-all active:scale-90"><ChevronRight className="w-5 h-5 md:w-6 md:h-6" /></button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 py-16 md:py-24 bg-brand-dark border-y border-white/5 shadow-2xl">
        <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
           {[
             { label: "Water Recovery", val: "99.5%" },
             { label: "Installations", val: "500+" },
             { label: "Energy Savings", val: "40%" },
             { label: "Compliance", val: "100%" }
           ].map((stat, i) => (
             <div key={i} className="text-center group">
                <div className="text-3xl md:text-6xl font-black text-brand-bright mb-1 md:mb-2 tracking-tighter group-hover:scale-110 transition-transform">{stat.val}</div>
                <div className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-slate-500">{stat.label}</div>
             </div>
           ))}
        </div>
      </section>

      {/* New Image Section: Precision Engineering */}
      <section className="py-24 md:py-40 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 md:-inset-8 bg-brand-bright/5 rounded-[3rem] -rotate-2 -z-10"></div>
              <div className="aspect-[4/5] md:aspect-square rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border-[12px] border-white shadow-3xl">
                <img 
                  src="/img1.jpeg" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                  alt="Process Excellence" 
                />
              </div>
              <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-brand-dark p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] text-white shadow-3xl max-w-[140px] md:max-w-[220px]">
                <ShieldCheck className="w-8 h-8 md:w-12 md:h-12 text-brand-bright mb-3 md:mb-5" />
                <h4 className="text-xs md:text-xl font-black uppercase tracking-tighter mb-1 md:mb-2">Quality Certified</h4>
                <p className="text-[7px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
                  Every component is engineered to ASME & TEMA standards for maximum reliability.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-10 bg-brand-bright"></span>
                <span className="text-brand-bright text-[9px] md:text-[10px] font-black tracking-[0.4em] uppercase">Built for Performance</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-brand-dark mb-8 md:mb-10 tracking-tighter uppercase leading-[0.95]">
                Precision in <br/>Every <span className="text-brand-bright">Component</span>
              </h2>
              <p className="text-slate-500 font-semibold text-lg md:text-xl mb-10 leading-relaxed italic border-l-4 border-brand-bright pl-6 md:pl-10">
                At Exelus Engineering, we bridge the gap between complex conceptual design and robust industrial reality.
              </p>
              <div className="space-y-6 mb-12">
                {[
                  "Process Systems ",
                  "Equipment Engineering ",
                  "Digital Design",
                  "Optimization & Services"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-5 group">
                    <div className="mt-1 w-6 h-6 rounded-full bg-brand-bright/10 flex items-center justify-center shrink-0 group-hover:bg-brand-bright transition-colors">
                      <CheckCircle className="w-4 h-4 text-brand-bright group-hover:text-white" />
                    </div>
                    <p className="text-xs md:text-sm font-black text-brand-dark uppercase tracking-widest leading-snug">{item}</p>
                  </div>
                ))}
              </div>
              <Link to="/about" className="inline-flex items-center gap-4 bg-brand-dark text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-xs shadow-2xl hover:bg-brand-bright transition-all active:scale-95">
                Learn Our Process <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* operational segments */}
      <section className="py-24 md:py-40 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
             <h2 className="text-[9px] md:text-[10px] font-black text-brand-bright uppercase tracking-[0.5em] md:tracking-[0.8em] mb-6 md:mb-8">Process Mastery</h2>
             <h3 className="text-3xl md:text-6xl font-black text-brand-dark tracking-tighter uppercase leading-tight">Operational Segments</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            <DomainCard icon={Database} title="Chemical Reactors" items={['Batch & Continuous', '50L to 300KL Capacity', 'High-Pressure Duty', 'Agitation Systems']} />
            <DomainCard icon={Droplets} title="Evaporation" items={['Multi-Effect Evaporators', 'MVR/MVRE Systems', 'Optimal Heat Utilization', 'Energy Efficiency']} />
            <DomainCard icon={Layout} title="Water & ZLD" items={['Effluent Treatment (ETP)', 'Zero Liquid Discharge', 'MBBR/SBR Technology', 'Water Recovery']} />
            <DomainCard icon={Zap} title="Heat Transfer" items={['Heat Exchangers', 'Shell & Tube Units', 'Process Vessels', 'ASME/TEMA Standard']} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
