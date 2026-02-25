import React, { useState } from 'react';
import { FileDown, X, Send, CheckCircle } from 'lucide-react';
import { BROCHURE_URL } from '../App';

interface BrochureDownloadProps {
  buttonText?: string;
  fileName?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

const BrochureDownload: React.FC<BrochureDownloadProps> = ({ 
  buttonText = 'Download Brochure', 
  fileName = 'Exelus_Engineering_Brochure.pdf',
  variant = 'primary',
  className = ''
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const whatsappNumber = '919100009490'; // Contact page number with country code
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }
    
    // Prepare WhatsApp message with email
    const message = `Hello Exelus Engineering,\n\nI would like to download your brochure.\n\nMy Email: ${email}\n\nPlease share the brochure link.`;
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp with the message
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitted(true);
    
    // Auto download after a short delay
    setTimeout(() => {
      setIsDownloading(true);
      const link = document.createElement('a');
      link.href = BROCHURE_URL;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Close modal after download starts
      setTimeout(() => {
        setIsModalOpen(false);
        setIsSubmitted(false);
        setIsDownloading(false);
        setEmail('');
      }, 2000);
    }, 1500);
  };

  const getButtonClasses = () => {
    const baseClasses = 'inline-flex items-center justify-center gap-3 font-black uppercase tracking-widest transition-all active:scale-95';
    
    switch (variant) {
      case 'primary':
        return `${baseClasses} bg-brand-bright hover:bg-brand-deep text-white px-8 py-5 rounded-xl shadow-xl text-[10px]`;
      case 'secondary':
        return `${baseClasses} bg-brand-dark hover:bg-brand-bright text-white px-8 py-5 rounded-xl shadow-xl text-[10px]`;
      case 'outline':
        return `${baseClasses} bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white border border-white/20 px-8 md:px-12 py-4 md:py-6 rounded-xl text-[9px] md:text-[10px]`;
      default:
        return `${baseClasses} bg-brand-bright hover:bg-brand-deep text-white px-8 py-5 rounded-xl shadow-xl text-[10px]`;
    }
  };

  return (
    <>
      <button onClick={() => setIsModalOpen(true)} className={`${getButtonClasses()} ${className}`}>
        <FileDown className="w-4 h-4" /> {buttonText}
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => !isSubmitted && setIsModalOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 max-w-md w-full shadow-3xl animate-in zoom-in duration-300">
            {/* Close Button */}
            {!isSubmitted && (
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-slate-500" />
              </button>
            )}

            {!isSubmitted ? (
              <>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-brand-bright/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <FileDown className="w-8 h-8 text-brand-bright" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-brand-dark uppercase tracking-tighter mb-3">
                    Download Brochure
                  </h3>
                  <p className="text-slate-500 text-sm font-medium">
                    Enter your email to receive the brochure. We'll also notify our team via WhatsApp.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-black text-brand-dark uppercase tracking-widest mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-brand-bright/10 focus:border-brand-bright transition-all font-bold text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-bright hover:bg-brand-deep text-white py-5 rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 shadow-xl transition-all"
                  >
                    <Send className="w-4 h-4" /> Send & Download
                  </button>

                  <p className="text-[9px] text-slate-400 text-center font-bold uppercase tracking-widest">
                    Your email will be shared with our team via WhatsApp
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-black text-brand-dark uppercase tracking-tighter mb-3">
                  WhatsApp Opened!
                </h3>
                <p className="text-slate-500 text-sm font-medium mb-4">
                  Please send the message to complete your request.
                </p>
                {isDownloading && (
                  <p className="text-brand-bright text-xs font-black uppercase tracking-widest animate-pulse">
                    Downloading brochure...
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default BrochureDownload;
