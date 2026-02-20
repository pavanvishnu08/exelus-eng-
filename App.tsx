
import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { 
  ArrowRight, FileDown
} from 'lucide-react';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Contact from './pages/Contact';

// Fix: Use explicit relative path with encoded spaces to resolve 404 issues in some hosting environments
export const BROCHURE_URL = "/brochure exelus engineering.pdf";

const DeepDivePage = ({ title, category, image }: { title: string, category: string, image: string }) => {
  const specs = [
    { label: "MOC Options", value: "SS316L, Hastelloy, Titanium, Duplex" },
    { label: "Standard Codes", value: "ASME Sec VIII Div 1, TEMA, IS 2825" },
    { label: "Automation", value: "PLC/SCADA Integrated (Siemens/AB)" },
    { label: "Quality Control", value: "Radiography, Hydro, Dye-Penetrant" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-brand-dark pt-32 md:pt-48 pb-24 md:pb-40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={image} className="w-full h-full object-cover" alt="" /></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <span className="text-brand-bright font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">{category}</span>
          <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-8">{title}</h1>
          <p className="text-slate-400 max-w-2xl font-bold uppercase text-xs tracking-widest leading-relaxed">
            High-performance industrial solution engineered by Exelus for mission-critical applications. 
            Fully customizable based on project-specific process parameters.
          </p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tight mb-8">Technical Overview</h2>
            <div className="space-y-6">
              {specs.map((s, i) => (
                <div key={i} className="flex justify-between border-b border-slate-100 pb-4">
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{s.label}</span>
                  <span className="text-[10px] font-black uppercase text-brand-dark tracking-widest text-right">{s.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-4 bg-brand-bright text-white px-8 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-brand-deep transition-all shadow-lg shadow-brand-bright/20">
                Request Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={BROCHURE_URL} download="Exelus_Engineering_Specs.pdf" className="inline-flex items-center gap-4 bg-slate-900 text-white px-8 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-black transition-all shadow-lg">
                Technical Data <FileDown className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="bg-slate-50 rounded-[2.5rem] p-12 border border-slate-200">
            <h3 className="font-black uppercase tracking-tight mb-6">Execution Standards</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium italic">
              Every unit undergoes rigorous Factory Acceptance Testing (FAT) before shipment to ensure 100% compliance with process guarantees.
            </p>
            <div className="grid grid-cols-2 gap-6">
               <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100"><p className="font-black text-[9px] uppercase text-brand-bright mb-2">Efficiency</p><p className="text-[10px] font-black uppercase tracking-widest text-brand-dark">99.9% Yield</p></div>
               <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100"><p className="font-black text-[9px] uppercase text-brand-bright mb-2">Support</p><p className="text-[10px] font-black uppercase tracking-widest text-brand-dark">24/7 Remote</p></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col selection:bg-brand-bright selection:text-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/reactors" element={<DeepDivePage title="Chemical Reactors" category="Process Equipment" image="https://images.unsplash.com/photo-1532187875605-2fe3fe84109b?auto=format&fit=crop&q=80&w=1200" />} />
            <Route path="/products/evaporators" element={<DeepDivePage title="Evaporators & MVR" category="Separation Technology" image="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=1200" />} />
            <Route path="/products/dryers" element={<DeepDivePage title="Dryers & Crystallizers" category="Solids Handling" image="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200" />} />
            <Route path="/products/zld" element={<DeepDivePage title="ZLD & ETP Systems" category="Water Solutions" image="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200" />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/optimization" element={<DeepDivePage title="Plant Optimization" category="Engineering Services" image="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1200" />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
