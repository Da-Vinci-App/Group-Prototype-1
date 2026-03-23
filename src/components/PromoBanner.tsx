import React from 'react';

interface PromoBannerProps {
  title: string;
  subtitle?: string;
  image: string;
  bgColor: string;
  textColor?: string;
}

const PromoBanner: React.FC<PromoBannerProps> = ({
  title,
  subtitle,
  image,
  bgColor,
  textColor = 'white',
}) => {
  return (
    <div
      className={`card-base card-hover relative overflow-hidden h-40 flex items-center justify-between px-6 ${bgColor}`}
    >
      <div className="relative z-10">
        <h3 className={`text-2xl font-black ${textColor === 'white' ? 'text-white' : 'text-text-primary'} leading-tight`}>
          {title}
        </h3>
        {subtitle && (
          <p className={`text-sm mt-1 ${textColor === 'white' ? 'text-white text-opacity-90' : 'text-text-secondary'}`}>
            {subtitle}
          </p>
        )}
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-32 h-32 opacity-80">
        <div className="text-6xl">{image}</div>
      </div>
    </div>
  );
};

export default PromoBanner;
