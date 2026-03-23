import React from 'react';

interface ImagePlaceholderProps {
  category: 'burger' | 'pizza' | 'chicken' | 'salad' | 'dessert' | 'drink' | 'category';
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  category,
  alt,
  className = '',
  width = 300,
  height = 300,
}) => {
  // Using Unsplash API for high-quality placeholder images
  const categoryMap: Record<string, string> = {
    burger: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=500&fit=crop',
    pizza: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500&h=500&fit=crop',
    chicken: 'https://images.unsplash.com/photo-1626082927389-6cd097cda687?w=500&h=500&fit=crop',
    salad: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=500&fit=crop',
    dessert: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=500&fit=crop',
    drink: 'https://images.unsplash.com/photo-1554866585-acbb2b3b4b1d?w=500&h=500&fit=crop',
    category: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=500&fit=crop',
  };

  return (
    <img
      src={categoryMap[category]}
      alt={alt}
      width={width}
      height={height}
      className={`object-cover ${className}`}
      onError={(e) => {
        // Fallback to a simple background color if image fails
        (e.target as HTMLImageElement).style.backgroundColor = '#f0f0f0';
      }}
    />
  );
};

export default ImagePlaceholder;
