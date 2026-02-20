
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Globe, Linkedin, Twitter, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    segment: 'Evaporators (MEE)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct email parameters
    const recipient = "Business@exeluseng.com";
    const subject = encodeURIComponent(`Inquiry: ${formData.segment} - ${formData.companyName}`);
    
    const bodyText = `
Technical Inquiry Details:
-------------------------
Name: ${formData.fullName}
Company: ${formData.companyName}
Email: ${formData.email}
Phone: ${formData.phone}
Segment: ${formData.segment}

Requirements / Message:
${formData.message}

---
Inquiry generated via Exelus Engineering Website.
    `;
    
    const body = encodeURIComponent(bodyText);
    
    // Trigger mailto
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    
    // Show success state
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="max-w-xl w-full text-center bg-slate-50 p-12 md:p-20 rounded-[3rem] border border-slate-100 shadow-2xl animate-in zoom-in duration-500">
          <div className="w-24 h-24 bg-brand-bright rounded-full flex items-center justify-center mx-auto mb-10 shadow-xl shadow-brand-bright/20">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-4xl font-black text-brand-dark uppercase tracking-tighter mb-6">Inquiry Sent</h2>
          <p className="text-slate-500 font-bold uppercase text-xs tracking-widest leading-relaxed mb-12">
            Your details have been captured. Please complete the send process in your email client. Our team will contact you shortly.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="bg-brand-dark text-white px-10 py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-brand-bright transition-all"
          >
            Send Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Contact Header */}
      <section className="bg-brand-dark text-white pt-32 md:pt-48 pb-24 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/contact img.jpeg" 
            alt="Contact Banner" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-brand-dark/70"></div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-bright skew-x-[-20deg] translate-x-1/2 opacity-20 blur-3xl" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-8 md:mb-10 tracking-tighter uppercase leading-none">Connect <br/><span className="text-brand-bright">With Us</span></h1>
            <p className="text-base md:text-xl text-slate-400 font-bold max-w-2xl mx-auto leading-relaxed uppercase tracking-widest border-l-4 border-brand-bright pl-6 md:pl-8">
              Partner with us for your next process or wastewater treatment project. 
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="mb-10 md:mb-16">
                <h2 className="text-[10px] font-black text-brand-bright uppercase tracking-[0.4em] mb-4 md:mb-6">Project Inquiry</h2>
                <h3 className="text-3xl md:text-4xl font-black text-brand-dark mb-4 md:mb-6 tracking-tighter uppercase">Send Requirement</h3>
                <p className="text-slate-500 font-bold uppercase text-[9px] md:text-xs tracking-widest">Connect with our engineering hub in Hyderabad.</p>
              </div>
              
              <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-2">
                    <label className="text-[9px] md:text-[10px] font-black text-brand-dark uppercase tracking-widest">Full Name</label>
                    <input 
                      required
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your Name" 
                      className="w-full px-5 md:px-6 py-4 md:py-5 bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-bright/10 focus:border-brand-bright transition-all font-bold text-sm" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] md:text-[10px] font-black text-brand-dark uppercase tracking-widest">Company Name</label>
                    <input 
                      required
                      type="text" 
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Company" 
                      className="w-full px-5 md:px-6 py-4 md:py-5 bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-bright/10 focus:border-brand-bright transition-all font-bold text-sm" 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-2">
                    <label className="text-[9px] md:text-[10px] font-black text-brand-dark uppercase tracking-widest">Email Address</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com" 
                      className="w-full px-5 md:px-6 py-4 md:py-5 bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-bright/10 focus:border-brand-bright transition-all font-bold text-sm" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] md:text-[10px] font-black text-brand-dark uppercase tracking-widest">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91" 
                      className="w-full px-5 md:px-6 py-4 md:py-5 bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-bright/10 focus:border-brand-bright transition-all font-bold text-sm" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] md:text-[10px] font-black text-brand-dark uppercase tracking-widest">Inquiry Segment</label>
                  <select 
                    name="segment"
                    value={formData.segment}
                    onChange={handleChange}
                    className="w-full px-5 md:px-6 py-4 md:py-5 bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-bright/10 focus:border-brand-bright transition-all appearance-none font-bold uppercase text-[10px] md:text-xs tracking-widest"
                  >
                    <option>Evaporators (MEE/MVR)</option>
                    <option>ATFD / Dryers</option>
                    <option>Wastewater / ZLD Solutions</option>
                    <option>Process / HVAC Equipment</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] md:text-[10px] font-black text-brand-dark uppercase tracking-widest">Requirement Message</label>
                  <textarea 
                    required
                    rows={5} 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details about capacity, thermal needs, etc." 
                    className="w-full px-5 md:px-6 py-4 md:py-5 bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-bright/10 focus:border-brand-bright transition-all resize-none font-bold text-sm"
                  ></textarea>
                </div>

                <button type="submit" className="w-full bg-brand-bright text-white py-5 md:py-6 rounded-xl md:rounded-2xl font-black uppercase tracking-[0.2em] md:tracking-[0.3em] flex items-center justify-center gap-3 md:gap-4 hover:bg-brand-deep transition-all shadow-2xl shadow-brand-bright/20 active:scale-95 group text-[10px] md:text-sm">
                  Send Requirement <Send className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="order-1 lg:order-2">
              <div className="bg-brand-dark p-6 md:p-10 lg:p-12 rounded-[1.5rem] md:rounded-[2rem] text-white lg:sticky lg:top-32 shadow-3xl">
                <h3 className="text-lg md:text-xl font-black mb-6 md:mb-8 uppercase tracking-tighter">Direct Channels</h3>
                <div className="space-y-6 md:space-y-8">
                  <a href="tel:+919100009490" className="flex gap-6 md:gap-8 group cursor-pointer">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-bright rounded-2xl md:rounded-3xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-[8px] md:text-[10px] font-black text-brand-bright uppercase tracking-[0.2em] mb-2">Call Sales</p>
                      <p className="text-xl md:text-3xl font-black tracking-tighter">+91 9100009490</p>
                    </div>
                  </a>

                  <div className="flex gap-6 md:gap-8 group">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-bright rounded-2xl md:rounded-3xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-[8px] md:text-[10px] font-black text-brand-bright uppercase tracking-[0.2em] mb-2">Email Business</p>
                      <p className="text-lg sm:text-2xl md:text-3xl font-black tracking-tighter text-wrap break-all lowercase">Business@exeluseng.com</p>
                    </div>
                  </div>

                  <div className="flex gap-6 md:gap-8 group">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-bright rounded-2xl md:rounded-3xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <MapPin className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-[8px] md:text-[10px] font-black text-brand-bright uppercase tracking-[0.2em] mb-2">Head Office</p>
                      <p className="text-[10px] md:text-sm font-black tracking-widest uppercase leading-relaxed">
                        192/A Suraram, Medchal-Malkajgiri,<br/> Telangana, India – 500055
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 md:mt-24 p-8 md:p-10 bg-white/5 border border-white/10 rounded-[1.5rem] md:rounded-[2.5rem]">
                   <h4 className="font-black text-[9px] md:text-xs uppercase tracking-widest text-brand-bright mb-4 md:mb-6">Corporate Info</h4>
                   <p className="text-slate-400 text-[10px] md:text-xs font-bold leading-relaxed tracking-widest uppercase">
                     Exelus Engineering Pvt. Ltd.<br className="hidden md:block"/>
                     Suraram, Hyderabad.
                   </p>
                   <div className="flex gap-6 mt-8 md:mt-10">
                      {[Linkedin, Twitter].map((Icon, i) => (
                        <a key={i} href="#" className="text-slate-400 hover:text-white transition-colors">
                          <Icon className="w-5 h-5 md:w-6 md:h-6" />
                        </a>
                      ))}
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
