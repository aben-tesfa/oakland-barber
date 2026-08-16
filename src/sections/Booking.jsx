import React from 'react';
import { studioConfig } from '../data/services';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { HiOutlineCalendar, HiOutlineClock, HiOutlineShieldCheck, HiOutlineCheck } from 'react-icons/hi';
import { RiScissorsCutLine } from 'react-icons/ri';

export default function Booking({ selectedService, onOpenCalendly }) {
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || studioConfig.calendlyUrl;

  return (
    <section id="booking" className="py-20 bg-studio-900/60 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionTitle
          tag="Reservations"
          title="Reserve Your Chair"
          subtitle="All sessions are scheduled through Calendly for live, real-time availability with zero wait times."
          centered={true}
        />

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Booking Action Card */}
          <div className="lg:col-span-7 bg-studio-950 p-6 sm:p-8 rounded-xl border border-brass/30 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-studio-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-studio-900 border border-brass/30 flex items-center justify-center text-brass">
                  <RiScissorsCutLine className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-serif font-bold text-studio-50">
                    Solo Session with {studioConfig.barberName}
                  </h3>
                  <p className="text-xs text-brass font-medium">1-on-1 Studio Appointment</p>
                </div>
              </div>
            </div>

            {selectedService ? (
              <div className="p-4 rounded-lg bg-studio-900/80 border border-brass/40 space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-brass block">
                  Selected Service:
                </span>
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-serif font-bold text-studio-50">
                    {selectedService.name}
                  </h4>
                  <span className="text-base sm:text-lg font-serif font-bold text-brass">
                    {selectedService.priceDisplay || (selectedService.price ? `$${selectedService.price}` : 'Inquire')}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-studio-400">
                  <HiOutlineClock className="w-3.5 h-3.5 text-brass" />
                  <span>{selectedService.duration} duration</span>
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-lg bg-studio-900/50 border border-white/5 text-xs text-studio-400">
                Tip: You can choose your preferred service now or select it directly inside Calendly when picking a date.
              </div>
            )}

            <div className="space-y-3">
              <Button
                variant="primary"
                size="lg"
                className="w-full justify-center text-base"
                onClick={onOpenCalendly}
                icon={<HiOutlineCalendar className="w-5 h-5" />}
              >
                Open Live Calendly Calendar
              </Button>

              <p className="text-center text-[11px] text-studio-400 font-light">
                Opens secure scheduling popup with instant confirmation & calendar invites.
              </p>
            </div>

            <div className="pt-4 border-t border-studio-850 flex items-center justify-between text-xs text-studio-400">
              <span className="flex items-center gap-1.5">
                <HiOutlineShieldCheck className="w-4 h-4 text-brass" />
                Instant Email Confirmation
              </span>
              <span>Reschedule anytime (24h)</span>
            </div>
          </div>

          {/* Right: Studio Etiquette & Policies */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm uppercase font-bold tracking-widest text-studio-300 mb-2">
              Studio Etiquette
            </h3>

            {studioConfig.policies.map((policy, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-studio-950/70 border border-white/5">
                <div className="flex items-start gap-2.5">
                  <HiOutlineCheck className="w-4 h-4 text-brass shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-studio-200 mb-1">
                      {policy.title}
                    </h4>
                    <p className="text-xs text-studio-400 font-light leading-relaxed">
                      {policy.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="p-4 rounded-lg bg-studio-900/40 border border-white/5 text-xs text-studio-400">
              <strong className="text-studio-200">Questions or custom timing?</strong><br />
              Text or call <a href={`tel:${studioConfig.formattedPhone}`} className="text-brass hover:underline">{studioConfig.phone}</a>.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
