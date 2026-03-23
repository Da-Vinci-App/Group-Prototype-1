import React from 'react';
import ImagePlaceholder from './ImagePlaceholder';

interface PromoBannerProps {
  title: string;
  subtitle?: string;
  image: 'burger' | 'pizza' | 'chicken' | 'salad' | 'dessert' | 'drink' | 'category';
  bgColor?: string;
  textColor?: string;
  layout?: 'image-top' | 'image-background';
}

const PromoBanner: React.FC<PromoBannerProps> = ({
  title,
  subtitle,
  image,
  bgColor = 'bg-gradient-to-r from-orange-400 to-orange-500',
  textColor = 'white',
  layout = 'image-top',
}) => {
  const imageUrl = {
    burger: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=500&fit=crop',
    pizza: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500&h=500&fit=crop',
    chicken: 'https://images.unsplash.com/photo-1626082927389-6cd097cda687?w=500&h=500&fit=crop',
    salad: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=500&fit=crop',
    dessert: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=500&fit=crop',
    drink: 'https://images.unsplash.com/photo-1554866585-acbb2b3b4b1d?w=500&h=500&fit=crop',
    category: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=500&fit=crop',
  }[image];

  if (layout === 'image-background') {
    // Full background image with text overlay
    return (
      <div className="card-hover overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105">
        {/* Squircle container using high border-radius */}
        <div 
          className="relative w-full h-48 md:h-56 lg:h-64 rounded-3xl overflow-hidden shadow-lg"
          style={{ borderRadius: '30px' }}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            {/* Overlay gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 text-white">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-black leading-tight mb-1">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs md:text-sm text-white text-opacity-90">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Image on top layout
  return (
    <div className="card-hover overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105">
      {/* Squircle container */}
      <div 
        className="rounded-3xl shadow-lg overflow-hidden bg-white"
        style={{ borderRadius: '30px' }}
      >
        {/* Image at Top */}
        <div className="w-full h-40 md:h-48 lg:h-56 overflow-hidden bg-gray-200">
          <img 
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.backgroundColor = '#e5e7eb';
            }}
          />
        </div>

        {/* Text Content Below */}
        <div className="p-4 md:p-6">
          <h3 className="text-lg md:text-xl lg:text-2xl font-black text-text-primary leading-tight mb-1">
            {title}
          </h3>
          {subtitle && (
            <p className="text-xs md:text-sm text-text-secondary">
              {subtitle}
            </p>
          )}
          
          {/* Action button hint */}
          <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-200">
            <button className="text-orange-500 hover:text-orange-600 font-semibold text-sm transition-colors">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
