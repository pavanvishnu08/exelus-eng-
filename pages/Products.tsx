
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FlaskConical, Droplets, Wind, Waves, 
  CheckCircle2, ArrowRight, Settings, ShieldCheck, Zap, FileDown, Layers,
  Database
} from 'lucide-react';
import { BROCHURE_URL } from '../App';

const SpecsTable = ({ data }: { data: { label: string, value: string }[] }) => (
  <div className="overflow-hidden rounded-[1.25rem] md:rounded-[1.5rem] border border-slate-200 mt-6 bg-white shadow-lg">
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse min-w-[300px]">
        <thead className="bg-brand-dark text-white">
          <tr>
            <th className="p-4 md:p-6 text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em]">Parameter</th>
            <th className="p-4 md:p-6 text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] text-right">Standard Range</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
              <td className="p-4 md:p-6 text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-dark">{row.label}</td>
              <td className="p-4 md:p-6 text-[10px] md:text-sm font-bold text-brand-bright text-right tracking-tighter">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const ProductContent = ({ 
  id, title, subtitle, desc, moc, features, specs, deepContent, image 
}: { 
  id: string, title: string, subtitle: string, desc: string, moc: string[], features: string[], specs: {label: string, value: string}[], deepContent: string, image: string 
}) => (
  <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
    <div className="flex flex-col lg:grid lg:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-20 items-center mb-20">
      <div className="w-full">
        <h2 className="text-[10px] md:text-xs font-black text-brand-bright uppercase tracking-[0.4em] mb-4">{subtitle}</h2>
        <h3 className="text-3xl md:text-5xl font-black text-brand-dark mb-6 tracking-tighter leading-tight">{title}</h3>
        <p className="text-slate-500 font-semibold text-lg md:text-xl mb-6 italic border-l-4 border-brand-bright pl-6 leading-relaxed">
          {desc}
        </p>
        <p className="text-sm md:text-base text-slate-500 font-medium mb-10 leading-relaxed">
          {deepContent}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">
          <div className="space-y-6">
            <p className="text-[10px] md:text-xs font-black uppercase text-slate-400 border-b border-slate-100 pb-3 flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-brand-bright" /> Metallurgy (MOC)
            </p>
            <ul className="space-y-4">
              {moc.map(v => (
                <li key={v} className="flex gap-4 text-sm md:text-lg font-black text-brand-dark items-center group">
                  <div className="w-2 h-2 rounded-full bg-brand-bright/40 group-hover:bg-brand-bright transition-all shrink-0" /> 
                  <span className="tracking-tight">{v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <p className="text-[10px] md:text-xs font-black uppercase text-slate-400 border-b border-slate-100 pb-3 flex items-center gap-3">
              <Settings className="w-4 h-4 text-brand-bright" /> Design Features
            </p>
            <ul className="space-y-4">
              {features.map(v => (
                <li key={v} className="flex gap-4 text-sm md:text-lg font-black text-brand-dark items-center group">
                  <div className="w-2 h-2 rounded-full bg-brand-bright/40 group-hover:bg-brand-bright transition-all shrink-0" /> 
                  <span className="tracking-tight">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link to="/contact" className="inline-flex items-center justify-center gap-4 bg-brand-bright text-white px-10 py-5 rounded-xl font-black uppercase text-xs md:text-sm tracking-widest hover:bg-brand-deep transition-all active:scale-95 shadow-xl shadow-brand-bright/20">
            Request Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <div className="w-full relative flex justify-center lg:justify-end">
        <div className="w-full max-w-[320px] md:max-w-md aspect-square bg-slate-100 rounded-[2.5rem] overflow-hidden border-[8px] border-white shadow-2xl relative">
           <img 
            src={image} 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 transform hover:scale-105" 
            alt={title} 
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity pointer-events-none"></div>
        </div>
        <div className="absolute -bottom-4 -right-2 lg:-right-4 bg-brand-dark text-white p-5 md:p-6 rounded-2xl shadow-2xl max-w-[160px] md:max-w-[200px] z-10">
          <p className="text-[8px] font-black uppercase tracking-[0.3em] mb-1 text-brand-bright">Verified Quality</p>
          <p className="text-[9px] md:text-[10px] font-bold italic leading-tight">Engineered for Process Integrity.</p>
        </div>
      </div>
    </div>

    <div className="border-t border-slate-100 pt-16">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
         <h4 className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-dark">Detailed Technical Specifications</h4>
         <div className="flex items-center gap-2 px-4 py-1.5 bg-brand-bright/5 rounded-full">
            <Zap className="w-3 h-3 text-brand-bright" />
            <span className="text-[8px] md:text-[10px] font-black text-brand-bright uppercase tracking-widest">ASME / TEMA Compliant</span>
         </div>
      </div>
      <div className="max-w-4xl">
        <SpecsTable data={specs} />
      </div>
    </div>
  </div>
);

const Products = () => {
  const [activeTab, setActiveTab] = useState('reactors');

  const productData: Record<string, any> = {
    reactors: {
      id: 'reactors',
      subtitle: 'Process Vessel Technology',
      title: 'Chemical Reactors',
      image: '/img9.jpeg',
      desc: 'Batch and continuous reactors engineered for pharmaceuticals, API, and specialty chemical applications.',
      deepContent: 'Our reactors are designed based on reaction kinetics and safety considerations, featuring optimized agitation systems including Anchor, Turbine, and Helical Ribbon.',
      moc: ['SS 316L / 304', 'Hastelloy C Series', 'Duplex Steel', 'Titanium / Lined'],
      features: ['Optimized Agitation', 'Jacketed / Limpet Coil', 'Vacuum & Pressure Duty', 'Precision Sealing'],
      specs: [
        { label: 'Capacity Range', value: '50 L to 300 KL' },
        { label: 'Pressure Rating', value: 'Full Vacuum to 30 bar' },
        { label: 'Temperature', value: '-20°C to 300°C' },
        { label: 'Standards', value: 'ASME Sec VIII / IS 2825' }
      ]
    },
    evaporators: {
      id: 'evaporators',
      subtitle: 'Thermal Separation Technology',
      title: 'MEE & MVR Systems',
      image: 'imh7.jpeg',
      desc: 'Advanced concentration systems designed for high thermal effectiveness and operational reliability.',
      deepContent: 'Including Falling Film, Forced Circulation, and Mechanical Vapour Recompression (MVR) systems designed to minimize fouling and reduce specific energy consumption.',
      moc: ['SS 316L', 'Duplex / Super Duplex', 'High Nickel Alloys', 'Titanium'],
      features: ['Anti-Scaling Design', 'High Steam Economy', 'MVRE Technology', 'Automated Operation'],
      specs: [
        { label: 'Capacity', value: '0.5 to 100 m³/hr' },
        { label: 'Steam Economy', value: 'Up to 6.5 (MEE)' },
        { label: 'Energy (MVR)', value: '25–60 kWh/m³' },
        { label: 'Concentration', value: 'Up to 98% Recovery' }
      ]
    },
    dryers: {
      id: 'dryers',
      subtitle: 'Advanced Solids Management',
      title: 'ATFD & Dryers',
      image: '/img4.jpeg',
      desc: 'Agitated Thin Film Dryers (ATFD) engineered for processing sticky, corrosive, and abrasive materials.',
      deepContent: 'Continuous systems that convert slurry into free-flowing powder with moisture reduction down to less than 5%, ideal for ZLD and solids recovery.',
      moc: ['Hastelloy', 'Alloy 20', 'SS 316 Ti', 'Duplex'],
      features: ['Single Pass Drying', 'Low Maintenance', 'Solids Management', 'Continuous Discharge'],
      specs: [
        { label: 'Moisture Level', value: '< 5–10% Final' },
        { label: 'Heat Source', value: 'Steam / Thermal Oil' },
        { label: 'Operation', value: 'PLC Automated' },
        { label: 'Feed Types', value: 'Slurry / Concentrates' }
      ]
    },
    heat_transfer: {
      id: 'heat_transfer',
      subtitle: 'Thermal Processing Utilities',
      title: 'Heat Exchangers',
      image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1000',
      desc: 'High-precision Shell & Tube exchangers and industrial vapor condensation systems.',
      deepContent: 'Optimized for complex industrial process cycles, ensuring durability and high thermal effectiveness in both process and utility applications.',
      moc: ['Stainless Steel', 'Carbon Steel', 'Copper Alloys', 'Titanium'],
      features: ['Thermal Optimization', 'Process Cycle Ready', 'Compact Footprint', 'Robust Fabrication'],
      specs: [
        { label: 'Standard Codes', value: 'TEMA / ASME' },
        { label: 'Types', value: 'Shell & Tube / Condensers' },
        { label: 'Testing', value: 'Hydro / Radiography' },
        { label: 'Design', value: 'Thermal & Mechanical' }
      ]
    },
    zld: {
      id: 'zld',
      subtitle: 'Water & Sustainability',
      title: 'ETP & ZLD Systems',
      image: '/img8.jpeg',
      desc: 'Turnkey wastewater treatment solutions achieving maximum water recovery and environmental compliance.',
      deepContent: 'From Primary treatment to Biological stages (MBBR/SBR) and tertiary polishing, our ZLD systems ensure 95-99% water recovery for process reuse.',
      moc: ['FRP / PP Lined', 'Coated Steel', 'SS 316', 'Composite'],
      features: ['MBBR / SBR Biological', 'UF / RO Integration', 'Stripper Columns', 'Resource Recovery'],
      specs: [
        { label: 'Water Recovery', value: '95% to 99.5%' },
        { label: 'Treatment Stages', value: 'Primary / Bio / Tertiary' },
        { label: 'Inlet TDS', value: 'High TDS Tolerant' },
        { label: 'Output', value: 'Recycle Grade Permeate' }
      ]
    }
  };

  const tabs = [
    { id: 'reactors', label: 'Reactors', icon: Database },
    { id: 'evaporators', label: 'Evaporators (MEE/MVR)', icon: Droplets },
    { id: 'dryers', label: 'ATFD & Dryers', icon: Wind },
    { id: 'heat_transfer', label: 'Heat Exchangers', icon: Layers },
    { id: 'zld', label: 'ETP & ZLD', icon: Waves }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-brand-dark text-white pt-32 md:pt-48 pb-16 md:pb-24 relative overflow-hidden px-6 text-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/products img.jpeg" 
            alt="Products Banner" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-brand-dark/70"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto mb-10">
            <span className="text-brand-bright font-black uppercase tracking-[0.4em] text-xs md:text-sm mb-6 block">Product Inventory</span>
            <h1 className="text-4xl md:text-8xl font-black tracking-tighter uppercase leading-[1]">Engineered <br/><span className="text-brand-bright">Solutions</span></h1>
          </div>
          <p className="text-slate-400 font-semibold max-w-2xl mx-auto leading-relaxed border-y border-white/10 py-6">
            Custom-designed industrial process and thermal products engineered for efficiency, sustainability, and peak performance.
          </p>
        </div>
      </section>

      <section className="bg-white border-y border-slate-100 z-20 relative">
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
      </section>

      <div className="container mx-auto px-6 pt-12 pb-24 md:pt-16 md:pb-32">
        <ProductContent {...productData[activeTab]} />
      </div>
    </div>
  );
};

export default Products;
