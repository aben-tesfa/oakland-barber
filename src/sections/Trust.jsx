import React from 'react';
import SectionTitle from '../components/SectionTitle';
import TrustCard from '../components/TrustCard';
import { HiOutlineUser, HiOutlineClock, HiOutlineShieldCheck, HiOutlineSparkles } from 'react-icons/hi';
import { RiScissorsCutLine, RiGobletLine } from 'react-icons/ri';

export default function Trust() {
  const features = [
    {
      icon: <HiOutlineUser className="w-6 h-6" />,
      title: "1-on-1 Private Suite",
      description: "A private studio reserved entirely for you. No noise, no crowded waiting areas, and zero walk-in interruptions.",
      badge: "Exclusive"
    },
    {
      icon: <HiOutlineClock className="w-6 h-6" />,
      title: "Punctual & Unrushed",
      description: "Generous appointment windows with built-in buffers between clients. We always start on time and never rush.",
      badge: "On-Time"
    },
    {
      icon: <HiOutlineShieldCheck className="w-6 h-6" />,
      title: "Sterilized Japanese Steel",
      description: "Hospital-grade autoclave and UV sanitization for all razors, shears, and guards before every single client.",
      badge: "Hygiene"
    },
    {
      icon: <RiGobletLine className="w-6 h-6" />,
      title: "Complimentary Hospitality",
      description: "Enjoy a fresh pour-over coffee, sparkling chilled water, or a quiet pour of craft bourbon during your session.",
      badge: "Amenities"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-studio-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          tag="The Experience"
          title="Designed for Your Comfort"
          subtitle="Every detail in the studio is curated to give you an effortless, premium grooming session."
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => (
            <TrustCard
              key={idx}
              icon={feat.icon}
              title={feat.title}
              description={feat.description}
              badge={feat.badge}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
