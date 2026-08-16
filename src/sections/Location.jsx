import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ContactInfo from '../components/ContactInfo';
import { HiOutlineExternalLink } from 'react-icons/hi';

export default function Location() {
  const address = "3233 Grand Ave, Oakland, CA 94610";
  const mapQuery = encodeURIComponent(address);
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  return (
    <section id="location" className="py-20 bg-studio-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionTitle
          tag="Visit The Barbershop"
          title="Location & Hours"
          subtitle="Conveniently located on Grand Avenue in Oakland's Grand Lake district near Lake Merritt."
          centered={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact & Studio Info */}
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>

          {/* Right Column: Clean Map Embed & Guide */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-xl overflow-hidden bg-studio-900 border border-white/10 shadow-xl aspect-[16/10] sm:aspect-[16/11]">
              <iframe
                title="Barbershop by Binyam Location Map"
                src={`https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-85 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              ></iframe>

              <div className="absolute top-4 right-4">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider bg-studio-950/90 text-brass border border-brass/40 px-3.5 py-2 rounded shadow-lg backdrop-blur hover:bg-studio-900 transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <HiOutlineExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-studio-900/40 border border-white/5 text-xs text-studio-400 font-light flex items-center justify-between">
              <span>Street parking available along Grand Ave & neighboring streets.</span>
              <span className="text-brass font-medium">3233 Grand Ave</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
