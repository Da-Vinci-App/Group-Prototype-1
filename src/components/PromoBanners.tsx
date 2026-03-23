import React from 'react';
import PromoBanner from './PromoBanner';

interface PromoBannersProps {
  onBannerClick?: (bannerId: string) => void;
}

const PromoBanners: React.FC<PromoBannersProps> = ({ onBannerClick }) => {
  const banners: Array<{
    id: string;
    title: string;
    subtitle: string;
    image: 'burger' | 'pizza' | 'chicken' | 'salad' | 'dessert' | 'drink' | 'category';
    bgColor?: string;
    layout?: 'image-top' | 'image-background';
  }> = [
    {
      id: 'summer',
      title: 'SUMMER COMBO',
      subtitle: 'Get 30% off your order',
      image: 'burger',
      layout: 'image-top',
    },
    {
      id: 'burger',
      title: 'BURGER SPECIAL',
      subtitle: '2 burgers for just $19.99',
      image: 'burger',
      layout: 'image-top',
    },
    {
      id: 'pizza',
      title: 'PIZZA DEAL',
      subtitle: 'Buy 1 Get 1 50% off',
      image: 'pizza',
      layout: 'image-background',
    },
    {
      id: 'healthy',
      title: 'FRESH SALAD',
      subtitle: 'Healthy Choice Collection',
      image: 'salad',
      layout: 'image-top',
    },
    {
      id: 'dessert',
      title: 'SWEET TREATS',
      subtitle: 'Desserts up to 40% off',
      image: 'dessert',
      layout: 'image-background',
    },
    {
      id: 'drinks',
      title: 'COOL REFRESHMENTS',
      subtitle: 'Any drink - Buy 2 Get 1 Free',
      image: 'drink',
      layout: 'image-top',
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-10 pb-24 md:pb-12">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-text-primary mb-6 md:mb-8">
        ✨ Special Offers
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
        {banners.map((banner) => (
          <button
            key={banner.id}
            onClick={() => onBannerClick?.(banner.id)}
            className="w-full text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-3xl transition-all"
            style={{ borderRadius: '30px' }}
          >
            <PromoBanner
              title={banner.title}
              subtitle={banner.subtitle}
              image={banner.image}
              bgColor={banner.bgColor}
              layout={banner.layout}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default PromoBanners;
