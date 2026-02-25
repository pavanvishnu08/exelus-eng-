
import React from 'react';
import { Link } from 'react-router-dom';
import { FileDown, Linkedin, Twitter, MapPin } from 'lucide-react';
import { BROCHURE_URL } from '../App';

const Footer = () => (
  <footer className="bg-brand-dark text-slate-400 pt-32 pb-16 border-t-8 border-brand-bright">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
        <div>
          <img 
            src="/footer logo .png" 
            alt="Exelus Engineering" 
className="h-20 w-auto  mb-18 "
          />
          <br/>  
          <p className="text-sm leading-relaxed text-slate-400 font-medium mb-8">Specializing in thermal processing and industrial wastewater treatment solutions.</p>
          <a href={BROCHURE_URL} download="Exelus_Engineering_Brochure.pdf" className="inline-flex items-center gap-3 px-6 py-4 bg-brand-bright/10 text-brand-bright border border-brand-bright/20 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-brand-bright hover:text-white transition-all">
            <FileDown className="w-4 h-4" /> Company Brochure
          </a>
        </div>
        <div>
          <h3 className="text-white font-black uppercase tracking-widest text-[10px] mb-8">Solutions</h3>
          <ul className="space-y-4 text-[10px] font-black uppercase tracking-widest">
            <li><Link to="/products" className="hover:text-brand-bright">MEE Evaporators</Link></li>
            <li><Link to="/products" className="hover:text-brand-bright">ATFD Dryers</Link></li>
            <li><Link to="/products" className="hover:text-brand-bright">Heat Exchangers</Link></li>
            <li><Link to="/products" className="hover:text-brand-bright">ZLD Systems</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-black uppercase tracking-widest text-[10px] mb-8">Location</h3>
          <div className="flex gap-4 text-[10px] font-black uppercase tracking-widest leading-relaxed">
             <MapPin className="w-4 h-4 text-brand-bright shrink-0" />
             <p>192/A Suraram, Medchal-Malkajgiri, Telangana, India – 500055</p>
          </div>
        </div>
        <div>
          <h3 className="text-white font-black uppercase tracking-widest text-[10px] mb-8">Contact</h3>
          <p className="text-white font-bold mb-4 text-xl tracking-tighter">+91 9100009490</p>
          <p className="text-brand-bright text-[10px] uppercase font-black tracking-widest">Business@exeluseng.com</p>
          <div className="flex gap-4 mt-8">
            <Linkedin className="w-5 h-5 text-slate-500 hover:text-brand-bright cursor-pointer" />
            <Twitter className="w-5 h-5 text-slate-500 hover:text-brand-bright cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-black uppercase tracking-[0.3em]">
        <p>&copy; {new Date().getFullYear()} Exelus Engineering Pvt. Ltd. | Quality Leads!</p>
        <div className="flex gap-8"><a href="#" className="hover:text-white">Privacy Policy</a><a href="#" className="hover:text-white">Engineering Standards</a></div>
      </div>
    </div>
  </footer>
);

export default Footer;
