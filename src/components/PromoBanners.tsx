import React from 'react';
import PromoBanner from './PromoBanner';

interface PromoBannersProps {
  onBannerClick?: (bannerId: string) => void;
}

const PromoBanners: React.FC<PromoBannersProps> = ({ onBannerClick }) => {
  const banners = [
    {
      id: 'summer',
      title: 'SUMMER COMBO',
      subtitle: 'Get 30% off your order',
      image: '🌞',
      bgColor: 'bg-gradient-to-r from-orange-400 to-red-400',
    },
    {
      id: 'burger',
      title: 'BURGER BASH',
      subtitle: '2 burgers for $19.99',
      image: '🍔',
      bgColor: 'bg-gradient-to-r from-orange-500 to-orange-400',
    },
    {
      id: 'pizza',
      title: 'PIZZA PARTY',
      subtitle: 'Buy 1 Get 1 50% off',
      image: '🍕',
      bgColor: 'bg-gradient-to-r from-red-500 to-pink-400',
    },
    {
      id: 'healthy',
      title: 'BOWL SPECIAL',
      subtitle: 'Fresh & Healthy Choice',
      image: '🥗',
      bgColor: 'bg-gradient-to-r from-green-400 to-teal-400',
    },
    {
      id: 'dessert',
      title: 'SWEET DEALS',
      subtitle: 'Desserts up to 40% off',
      image: '🍰',
      bgColor: 'bg-gradient-to-r from-yellow-300 to-orange-300',
    },
  ];

  return (
    <div className="max-w-md mx-auto px-4 py-8">
      <h2 className="text-2xl font-black text-text-primary mb-6">Special Offers</h2>
      <div className="space-y-4">
        {banners.map((banner) => (
          <button
            key={banner.id}
            onClick={() => onBannerClick?.(banner.id)}
            className="w-full text-left"
          >
            <PromoBanner
              title={banner.title}
              subtitle={banner.subtitle}
              image={banner.image}
              bgColor={banner.bgColor}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default PromoBanners;
