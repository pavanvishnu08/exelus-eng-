
import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, Target, Eye, Leaf, HeartHandshake, Award, 
  Settings, Search, PencilRuler, ShoppingCart, Factory, Construction, 
  Flag, ChevronRight, Globe, FileDown, ArrowRight, Users, Zap, CheckCircle
} from 'lucide-react';
import BrochureDownload from '../components/BrochureDownload';

const TurnkeyStep = ({ icon: Icon, title, desc, delay }: any) => (
  <div className="flex flex-col items-center text-center group animate-in fade-in slide-in-from-bottom duration-700" style={{ animationDelay: delay }}>
    <div className="w-14 h-14 md:w-16 md:h-16 bg-white border-2 border-slate-100 rounded-xl md:rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-brand-bright group-hover:text-white group-hover:border-brand-bright group-hover:-translate-y-2 transition-all duration-500 shadow-sm group-hover:shadow-2xl group-hover:shadow-brand-bright/10">
      <Icon className="w-6 h-6 md:w-8 md:h-8" />
    </div>
    <div className="mt-4 md:mt-6">
       <h4 className="font-black text-[9px] md:text-[10px] uppercase tracking-widest text-brand-dark mb-1">{title}</h4>
       <p className="text-[8px] md:text-[9px] text-slate-400 font-bold uppercase">{desc}</p>
    </div>
  </div>
);

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 md:pt-48 pb-24 md:pb-32 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <img src="/aboutus img.jpeg" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20 max-w-7xl mx-auto">
            <div className="w-full lg:w-auto">
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.9]">
                About <br/> <span className="text-brand-bright">Exelus</span>
              </h1>
            </div>
            <div className="w-full lg:flex-1 lg:max-w-xl">
              <p className="text-lg md:text-2xl text-slate-400 font-bold leading-relaxed italic border-l-4 border-brand-bright pl-6 md:pl-8 mb-10">
                "An engineering-driven organization based in Telangana, delivering advanced thermal and wastewater processing equipment."
              </p>
              <div className="flex flex-wrap gap-4">
                <BrochureDownload buttonText="Company Profile" fileName="Exelus_Engineering_Profile.pdf" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-6 md:-inset-10 bg-brand-bright/5 rounded-[2.5rem] md:rounded-[4rem] -rotate-2 md:-rotate-3 -z-10"></div>
              <img src="/imh5.jpeg" className="rounded-[2.5rem] md:rounded-[3rem] shadow-3xl w-full" alt="Engineering Team" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-[10px] font-black text-brand-bright uppercase tracking-[0.4em] mb-6 md:mb-8">Company Strengths</h2>
              <h3 className="text-3xl md:text-6xl font-black text-brand-dark mb-8 md:mb-12 tracking-tighter uppercase leading-tight">Focusing on Robust <br className="hidden md:block"/>Industrial Design</h3>
              <p className="text-slate-500 font-bold text-base md:text-lg mb-10 md:mb-12 leading-relaxed italic">
                Exelus serves industrial clients looking for high-performance equipment design, standard process engineering, and durability. Our key focus areas include:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {[
                  { label: "Evaporators", val: "MEE & Thermal Mastery" },
                  { label: "ATFDs", val: "Agitated Thin Film Dryers" },
                  { label: "Wastewater", val: "Wastewater Treatment Systems" },
                  { label: "Machinery", val: "Process Plant Machinery" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <div className="w-2 h-2 rounded-full bg-brand-bright shrink-0"></div>
                    <div>
                      <h4 className="font-black text-[10px] md:text-sm uppercase text-brand-dark tracking-widest">{item.label}</h4>
                      <p className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-24 md:py-40 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 md:mb-24 max-w-4xl mx-auto">
            <h2 className="text-[10px] font-black text-brand-bright uppercase tracking-[0.5em] mb-6">WHAT MAKES EXELUS DIFFERENT</h2>
            <h3 className="text-3xl md:text-6xl font-black text-brand-dark mb-8 md:mb-10 tracking-tighter uppercase leading-tight">Our Differentiators</h3>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-6">
              {[
                "Engineering-first organization (not a trading or standard skid supplier)",
                "Strong integration of process, mechanical, and structural engineering",
                "Custom-designed systems based on actual operating conditions",
                "Advanced digital tools: PFD, P&ID, 3D modelling, STAAD Pro, Tekla",
                "Capability to audit, retrofit, modify, and expand existing plants",
                "Strong focus on OPEX reduction and efficiency improvement",
                "Long-term technical partnership approach"
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-brand-bright hover:border-brand-bright transition-all duration-300 group">
                  <div className="w-8 h-8 bg-brand-bright rounded-full flex items-center justify-center shrink-0 group-hover:bg-white transition-colors">
                    <CheckCircle className="w-5 h-5 text-white group-hover:text-brand-bright" />
                  </div>
                  <p className="text-sm md:text-lg font-bold text-brand-dark group-hover:text-white transition-colors leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Expertise (Relocated under Why Us) */}
      <section className="py-24 md:py-32 bg-brand-dark text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-[10px] font-black text-brand-bright uppercase tracking-[0.4em] mb-4 md:mb-6">Our Experts</h2>
            <h3 className="text-3xl md:text-6xl font-black tracking-tighter uppercase">Team Capabilities</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: ShieldCheck, title: "Engineering Design", desc: "Technical Design & P&ID." },
              { icon: Factory, title: "Manufacturing", desc: "Standard Fabrication QC." },
              { icon: Settings, title: "Project Management", desc: "EPC Handling Mastery." },
              { icon: Search, title: "Optimization", desc: "Process Performance Audit." }
            ].map((v, i) => (
              <div key={i} className="p-8 md:p-10 bg-white/5 border border-white/10 rounded-[1.5rem] md:rounded-[2rem] text-center hover:bg-brand-bright transition-all duration-300 group">
                <v.icon className="w-8 h-8 mx-auto mb-6 text-brand-bright group-hover:text-white transition-colors" />
                <h4 className="font-black text-[10px] uppercase tracking-widest mb-3 leading-tight">{v.title}</h4>
                <p className="text-[9px] text-slate-400 font-bold uppercase group-hover:text-white/80">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Turnkey Project Cycle */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-[10px] font-black text-brand-bright uppercase tracking-[0.5em] mb-8 md:mb-12">Execution Framework</h2>
          <h3 className="text-3xl md:text-4xl font-black text-brand-dark mb-16 md:mb-20 tracking-tighter uppercase">Comprehensive Execution</h3>
          
          <div className="max-w-6xl mx-auto relative">
            <div className="absolute top-8 left-0 w-full h-px bg-slate-200 hidden lg:block -z-0"></div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-12 relative z-10">
              <TurnkeyStep icon={Search} title="Technical Design" desc="Standard Engineering" delay="0ms" />
              <TurnkeyStep icon={PencilRuler} title="Modeling" desc="Simulation Mastery" delay="100ms" />
              <TurnkeyStep icon={ShoppingCart} title="Fabrication" desc="In-House Build" delay="200ms" />
              <TurnkeyStep icon={Factory} title="Project Mgmt" desc="EPC Execution" delay="300ms" />
              <TurnkeyStep icon={Construction} title="Erection" desc="Site Installation" delay="400ms" />
              <TurnkeyStep icon={Flag} title="Commissioning" desc="Performance Run" delay="500ms" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div className="p-10 md:p-16 bg-brand-bright rounded-[2rem] md:rounded-[3rem] text-white group hover:scale-[1.02] transition-transform duration-500 shadow-2xl shadow-brand-bright/20">
               <Eye className="w-12 h-12 md:w-16 md:h-16 text-brand-dark mb-8 md:mb-10 group-hover:rotate-12 transition-transform" />
               <h3 className="text-3xl md:text-4xl font-black mb-6 md:mb-8 tracking-tighter uppercase">Our Vision</h3>
               <p className="text-xl md:text-2xl font-bold leading-relaxed italic opacity-90">
                 "To be a global leader in designing and manufacturing wastewater treatment equipment and advanced industrial processing solutions that leverage cutting-edge technology and deliver superior performance."
               </p>
            </div>
            <div className="p-10 md:p-16 bg-brand-dark rounded-[2rem] md:rounded-[3rem] text-white group hover:scale-[1.02] transition-transform duration-500 shadow-2xl shadow-brand-dark/20">
               <Target className="w-12 h-12 md:w-16 md:h-16 text-brand-bright mb-8 md:mb-10 group-hover:-rotate-12 transition-transform" />
               <h3 className="text-3xl md:text-4xl font-black mb-6 md:mb-8 tracking-tighter uppercase">Our Mission</h3>
               <ul className="text-lg md:text-xl font-bold leading-relaxed italic opacity-90 text-slate-300 space-y-4">
                 <li>• Sustainable engineering innovation</li>
                 <li>• Highly reliable industrial products</li>
                 <li>• Client-centric solution delivery</li>
                 <li>• Continuous improvement in environmental outcomes</li>
               </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
