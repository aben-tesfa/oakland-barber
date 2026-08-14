import React, { useState } from 'react';
import { galleryCategories, galleryItems } from '../data/gallery';
import { HiX, HiOutlineZoomIn } from 'react-icons/hi';

export default function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All Cuts');
  const [activeImage, setActiveImage] = useState(null);

  const filteredItems = selectedCategory === 'All Cuts'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`text-xs uppercase tracking-wider px-4 py-2 rounded transition-all duration-200 ${
              selectedCategory === cat
                ? 'bg-brass text-studio-950 font-bold shadow'
                : 'bg-studio-900/80 text-studio-400 hover:text-studio-100 hover:bg-studio-800 border border-white/5'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveImage(item)}
            className="group relative overflow-hidden rounded-lg bg-studio-900 border border-white/5 cursor-pointer aspect-[4/5]"
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-studio-950/90 via-studio-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-5">
              <span className="text-[10px] uppercase font-bold tracking-widest text-brass mb-1">
                {item.tag}
              </span>
              <h4 className="text-base font-serif font-bold text-studio-50">
                {item.title}
              </h4>
            </div>
            {/* Hover icon */}
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-studio-950/60 backdrop-blur text-studio-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <HiOutlineZoomIn className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-studio-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-studio-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-studio-950/80 text-studio-200 hover:text-brass hover:bg-studio-950 transition-colors"
              aria-label="Close modal"
            >
              <HiX className="w-6 h-6" />
            </button>
            <div className="max-h-[75vh] overflow-hidden flex items-center justify-center bg-black">
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
            <div className="p-6 bg-studio-900 flex items-center justify-between border-t border-white/5">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-brass block mb-1">
                  {activeImage.tag} • {activeImage.category}
                </span>
                <h3 className="text-xl font-serif font-bold text-studio-50">
                  {activeImage.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
