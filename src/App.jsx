import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { studioConfig } from './data/services';
import { HiX, HiOutlineExternalLink } from 'react-icons/hi';
import { RiScissorsCutLine } from 'react-icons/ri';

export default function App() {
  const [calendlyModalOpen, setCalendlyModalOpen] = useState(false);
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || studioConfig.calendlyUrl;

  const handleOpenCalendly = () => {
    // If official Calendly script loaded and available on window
    if (window.Calendly && typeof window.Calendly.initPopupWidget === 'function') {
      window.Calendly.initPopupWidget({ url: calendlyUrl });
    } else {
      // Sleek fallback modal with iframe & direct link
      setCalendlyModalOpen(true);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setCalendlyModalOpen(false);
      }
    };
    if (calendlyModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [calendlyModalOpen]);

  return (
    <div className="bg-studio-950 text-studio-100 min-h-screen flex flex-col antialiased">
      {/* Sticky Header */}
      <Navbar onBookClick={handleOpenCalendly} />

      {/* Main Content */}
      <div className="flex-grow">
        <Home onOpenCalendly={handleOpenCalendly} />
      </div>

      {/* Footer */}
      <Footer onBookClick={handleOpenCalendly} />

      {/* Fallback Calendly Modal */}
      {calendlyModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-studio-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setCalendlyModalOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl bg-studio-900 border border-brass/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-6 bg-studio-950 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-studio-900 border border-brass/30 flex items-center justify-center text-brass">
                  <RiScissorsCutLine className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-serif font-bold text-studio-50">
                    Schedule with Marcus Vance
                  </h3>
                  <p className="text-xs text-brass font-medium">Downtown Oakland Studio</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1 text-xs text-studio-300 hover:text-brass transition-colors px-3 py-1.5 rounded bg-studio-900 border border-white/5"
                >
                  <span>Open in New Tab</span>
                  <HiOutlineExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setCalendlyModalOpen(false)}
                  className="p-2 rounded-lg text-studio-400 hover:text-studio-50 hover:bg-studio-800 transition-colors"
                  aria-label="Close"
                >
                  <HiX className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body / Calendly Frame */}
            <div className="flex-1 bg-studio-950 p-2 sm:p-4 min-h-[500px]">
              <iframe
                src={`${calendlyUrl}?embed_domain=${window.location.hostname}&embed_type=Inline`}
                width="100%"
                height="100%"
                className="w-full min-h-[500px] border-0 rounded-lg"
                title="Calendly Scheduling Page"
              ></iframe>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-studio-950 border-t border-white/5 flex items-center justify-between text-xs text-studio-400">
              <span>Appointment confirmation will be sent to your email.</span>
              <button
                onClick={() => setCalendlyModalOpen(false)}
                className="text-xs text-brass hover:underline"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
