import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FileDown } from 'lucide-react';
import BrochureDownload from './BrochureDownload';

const NavLogo = () => (
  <Link to="/" className="flex items-center gap-1.5 md:gap-3 group max-w-[65%] sm:max-w-none shrink">
    <img 
      src="/final logo exelus.png" 
      alt="Exelus Engineering" 
      className="h-10 md:h-14 w-auto object-contain group-hover:scale-105 transition-transform"
    />
  </Link>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Force body scroll lock when mobile menu is active
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-[200] transition-all duration-300 bg-white ${
        scrolled ? 'shadow-lg py-1.5 md:py-2.5' : 'shadow-md py-2 md:py-4'
      }`}>
        <div className="container mx-auto px-3 md:px-8 flex justify-between items-center">
          <NavLogo />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
            {['Home', 'About', 'Products', 'Services', 'Contact'].map((item) => (
              <Link 
                key={item} 
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={`text-xs font-black uppercase tracking-[0.15em] transition-all relative py-2 text-brand-dark hover:text-brand-bright`}
              >
                {item}
                {((item === 'Home' && location.pathname === '/') || location.pathname.startsWith(`/${item.toLowerCase()}`)) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-bright"></span>
                )}
              </Link>
            ))}
            <div className="flex items-center gap-3">
              <BrochureDownload 
                buttonText="Brochure" 
                fileName="Exelus_Engineering_Brochure.pdf"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all border border-slate-200 text-brand-dark hover:bg-slate-50 !bg-transparent !text-brand-dark !shadow-none hover:!bg-slate-50"
              />
              <Link to="/contact" className="px-5 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all shadow-xl bg-brand-bright text-white hover:bg-brand-deep active:scale-95">
                Inquiry
              </Link>
            </div>
          </nav>

          {/* Mobile Toggle Button */}
          <button 
            className="lg:hidden p-1.5 md:p-2.5 rounded-lg transition-all active:scale-90 flex items-center justify-center shrink-0 bg-slate-50 text-brand-dark border border-slate-200"
            onClick={() => setIsOpen(true)}
            aria-label="Toggle Menu"
          >
            <Menu className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-brand-dark z-[999] transition-transform duration-500 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Menu Header */}
        <div className="flex justify-between items-center p-5 md:p-8 border-b border-white/10">
          <div className="flex items-center gap-3 bg-white rounded-lg p-2">
             <img 
               src="/final logo exelus.png" 
               alt="Exelus Engineering" 
               className="h-8 md:h-10 w-auto object-contain"
             />
          </div>
          <button 
            onClick={() => setIsOpen(false)} 
            className="p-2 md:p-3 bg-white/5 rounded-xl text-white hover:bg-white/10 transition-colors active:scale-90"
            aria-label="Close Menu"
          >
            <X className="w-6 h-6 md:w-7 md:h-7" />
          </button>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex flex-col items-center justify-center flex-grow gap-6 px-8 overflow-y-auto">
          {['Home', 'About', 'Products', 'Services', 'Contact'].map((item, idx) => (
            <Link 
              key={item} 
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
              className={`text-2xl sm:text-4xl font-black uppercase tracking-tighter transition-all py-2 ${
                ((item === 'Home' && location.pathname === '/') || location.pathname.startsWith(`/${item.toLowerCase()}`))
                ? 'text-brand-bright scale-110'
                : 'text-white hover:text-brand-bright'
              }`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Action Buttons at Bottom */}
        <div className="p-6 md:p-8 border-t border-white/10 bg-brand-deep/30 flex flex-col gap-4">
           <BrochureDownload 
             buttonText="Technical Guide" 
             fileName="Exelus_Engineering_Brochure.pdf"
             className="flex items-center justify-center gap-3 w-full bg-white/5 text-white py-4 rounded-xl font-black uppercase tracking-widest text-[10px] md:text-xs border border-white/10 hover:bg-white/10 transition-all active:scale-[0.98] !shadow-none"
           />
           <Link 
             to="/contact" 
             className="block w-full bg-brand-bright text-white py-5 rounded-xl font-black uppercase tracking-widest text-[10px] md:text-xs shadow-2xl text-center active:scale-[0.98] transition-all"
           >
             Connect With Experts
           </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
