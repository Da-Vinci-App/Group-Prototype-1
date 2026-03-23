import React from 'react';
import RatingStars from './RatingStars';
import ImagePlaceholder from './ImagePlaceholder';

interface FoodCardProps {
  image: 'burger' | 'pizza' | 'chicken' | 'salad' | 'dessert' | 'drink';
  name: string;
  price: number;
  rating?: number;
  onAddToCart: () => void;
}

const FoodCard: React.FC<FoodCardProps> = ({
  image,
  name,
  price,
  rating = 4.8,
  onAddToCart,
}) => {
  return (
    <div className="card-base card-hover flex flex-col h-full">
      <div className="relative h-40 bg-gray-100 flex items-center justify-center overflow-hidden">
        <ImagePlaceholder
          category={image}
          alt={name}
          className="w-full h-full"
          width={500}
          height={500}
        />
      </div>
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-text-primary text-lg mb-1">{name}</h3>
          <div className="mb-3">
            <RatingStars rating={rating} size="sm" showText={false} />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">${price.toFixed(2)}</span>
          <button
            onClick={onAddToCart}
            className="bg-primary hover:bg-primary-dark text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 hover:scale-110"
            aria-label="Add to cart"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
