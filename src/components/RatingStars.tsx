import React from 'react';

interface RatingStarsProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating, size = 'md', showText = true }) => {
  const sizeClass = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  }[size];

  const stars = Array.from({ length: 5 }, (_, i) => i + 1).map((star) => {
    const isFilled = star <= Math.floor(rating);
    const isPartial = star === Math.ceil(rating) && rating % 1 !== 0;

    return (
      <div key={star} className="relative">
        <svg
          className={`${sizeClass} text-gray-200`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
        <div className="absolute top-0 left-0 overflow-hidden" style={{ width: `${isPartial ? 50 : isFilled ? 100 : 0}%` }}>
          <svg
            className={`${sizeClass} text-primary`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        </div>
      </div>
    );
  });

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">{stars}</div>
      {showText && <span className="text-sm font-semibold text-text-primary">{rating.toFixed(1)}</span>}
    </div>
  );
};

export default RatingStars;
