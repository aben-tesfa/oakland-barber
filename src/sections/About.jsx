import React from 'react';
import { studioConfig } from '../data/services';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { HiOutlineCalendar, HiOutlineSparkles } from 'react-icons/hi';
import { RiScissorsCutLine } from 'react-icons/ri';

export default function About({ onBookClick }) {
  return (
    <section id="about" className="py-24 bg-studio-900/40 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden bg-studio-950 border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1512690459411-b9245aed614b?q=80&w=1200&auto=format&fit=crop"
                alt="Oakland Barber Studio Chair & Tools"
                className="w-full h-full object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-studio-950/90 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-studio-900/90 backdrop-blur border border-brass/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brass/20 text-brass flex items-center justify-center font-serif font-bold text-sm">
                    MV
                  </div>
                  <div>
                    <h4 className="text-sm font-serif font-bold text-studio-50">{studioConfig.barberName}</h4>
                    <p className="text-xs text-studio-300 font-light">Founder & Solo Master Barber</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <SectionTitle
              tag="The Artisan"
              title="One Chair. Dedicated Attention."
              subtitle="A quiet departure from rushed, crowded barbershops."
            />

            <div className="space-y-4 text-studio-300 font-light text-base leading-relaxed">
              <p>
                After more than a decade cutting across the Bay Area, I created Oakland Barber with a single premise: <strong className="text-studio-100 font-medium">your time and your hair deserve undivided focus.</strong>
              </p>
              <p>
                Here, there is only one chair. When you walk in, the studio is exclusively yours. There are no competing clippers, no walk-in interruptions, and no shortcuts taken to beat the clock.
              </p>
              <p>
                Every cut is architected around your natural hair growth directions, skull geometry, and lifestyle. Whether maintaining an immaculate low fade, transitioning to scissors-only length, or reshaping a heavy beard, we take the time to do it properly.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-lg bg-studio-900/80 border border-white/5">
                <div className="flex items-center gap-2 text-brass text-sm font-semibold mb-1">
                  <RiScissorsCutLine className="w-4 h-4" />
                  <span>Precision Tailoring</span>
                </div>
                <p className="text-xs text-studio-400 font-light">
                  Hand-honed Japanese shears and zero-gapped clippers calibrated for clean, lasting growth.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-studio-900/80 border border-white/5">
                <div className="flex items-center gap-2 text-brass text-sm font-semibold mb-1">
                  <HiOutlineSparkles className="w-4 h-4" />
                  <span>The Ritual</span>
                </div>
                <p className="text-xs text-studio-400 font-light">
                  Steamed essential oil towels, warm lather neck shaves, and clean botanical tonics.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                onClick={onBookClick}
                icon={<HiOutlineCalendar className="w-4 h-4" />}
              >
                Schedule with Marcus
              </Button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
