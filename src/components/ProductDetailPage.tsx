import React, { useState } from 'react';
import RatingStars from './RatingStars';
import Badge from './Badge';
import QuantitySelector from './QuantitySelector';

interface ProductDetailPageProps {
  onAddToCart?: (item: any) => void;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState('regular');

  const product = {
    name: 'Gourmet Cheeseburger',
    description: 'Premium cheeseburger with fresh ingredients and special sauce',
    price: 12.99,
    rating: 4.9,
    reviews: 342,
    calories: 580,
    protein: 28,
    carbs: 42,
    fat: 24,
    deliveryTime: '25-30 min',
    image: '🍔',
  };

  const toppings = [
    { id: 'tomato', name: 'Tomato', icon: '🍅' },
    { id: 'onion', name: 'Onion', icon: '🧅' },
    { id: 'cheese', name: 'Cheese', icon: '🧀' },
    { id: 'bacon', name: 'Bacon', icon: '🥓' },
    { id: 'lettuce', name: 'Lettuce', icon: '🥬' },
  ];

  const sizes = [
    { id: 'small', name: 'Small', price: 0 },
    { id: 'regular', name: 'Regular', price: 0 },
    { id: 'large', name: 'Large', price: 2.0 },
  ];

  const toggleTopping = (id: string) => {
    setSelectedToppings((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  const handleAddToCart = () => {
    const cartItem = {
      ...product,
      quantity,
      selectedToppings,
      selectedSize,
      totalPrice: (product.price + sizes.find((s) => s.id === selectedSize)!.price) * quantity,
    };
    onAddToCart?.(cartItem);
  };

  return (
    <div className="bg-neutral-light pb-32">
      {/* Product Image */}
      <div className="relative h-64 bg-gradient-to-b from-soft-yellow to-neutral flex items-center justify-center">
        <div className="text-9xl">{product.image}</div>
        <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-card hover:shadow-lg transition-shadow">
          ❤️
        </button>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 mt-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-black text-text-primary mb-1">{product.name}</h1>
          <p className="text-text-secondary">{product.description}</p>
        </div>

        {/* Rating & Reviews */}
        <div className="flex items-center gap-4">
          <RatingStars rating={product.rating} size="md" showText={true} />
          <span className="text-sm text-text-secondary">({product.reviews} reviews)</span>
        </div>

        {/* Badges */}
        <div className="flex gap-2 flex-wrap">
          <Badge text={product.deliveryTime} icon="timer" variant="info" />
          <Badge text="Free Delivery" icon="truck" variant="success" />
          <Badge text="Popular" icon="fire" variant="warning" />
        </div>

        {/* Price */}
        <div className="bg-white rounded-2xl p-4 shadow-subtle">
          <p className="text-sm text-text-secondary mb-1">Price</p>
          <p className="text-4xl font-black text-primary">${product.price}</p>
        </div>

        {/* Nutrition Info */}
        <div className="grid grid-cols-4 gap-3">
          <div className="bg-white rounded-2xl p-3 text-center shadow-subtle">
            <p className="text-2xl font-bold text-primary">{product.calories}</p>
            <p className="text-xs text-text-secondary mt-1">Calories</p>
          </div>
          <div className="bg-white rounded-2xl p-3 text-center shadow-subtle">
            <p className="text-2xl font-bold text-accent">{product.protein}g</p>
            <p className="text-xs text-text-secondary mt-1">Protein</p>
          </div>
          <div className="bg-white rounded-2xl p-3 text-center shadow-subtle">
            <p className="text-2xl font-bold text-secondary">{product.carbs}g</p>
            <p className="text-xs text-text-secondary mt-1">Carbs</p>
          </div>
          <div className="bg-white rounded-2xl p-3 text-center shadow-subtle">
            <p className="text-2xl font-bold text-primary-light">{product.fat}g</p>
            <p className="text-xs text-text-secondary mt-1">Fat</p>
          </div>
        </div>

        {/* Size Selection */}
        <div>
          <h3 className="font-semibold text-text-primary mb-3">Choose Size</h3>
          <div className="flex gap-3">
            {sizes.map((size) => (
              <button
                key={size.id}
                onClick={() => setSelectedSize(size.id)}
                className={`flex-1 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  selectedSize === size.id
                    ? 'bg-primary text-white shadow-card'
                    : 'bg-white text-text-primary border-2 border-gray-200 hover:border-primary'
                }`}
              >
                <div>{size.name}</div>
                <div className="text-xs opacity-75">
                  {size.price > 0 ? `+$${size.price.toFixed(2)}` : 'Base'}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Toppings */}
        <div>
          <h3 className="font-semibold text-text-primary mb-3">Add Toppings</h3>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {toppings.map((topping) => (
              <button
                key={topping.id}
                onClick={() => toggleTopping(topping.id)}
                className={`flex-shrink-0 flex flex-col items-center gap-2 p-3 rounded-2xl transition-all duration-200 ${
                  selectedToppings.includes(topping.id)
                    ? 'bg-primary bg-opacity-20 border-2 border-primary'
                    : 'bg-white border-2 border-gray-200 hover:border-primary'
                }`}
              >
                <span className="text-3xl">{topping.icon}</span>
                <span className="text-xs font-medium text-text-primary">{topping.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Quantity & Add to Cart */}
        <div className="flex gap-4 items-center">
          <QuantitySelector
            quantity={quantity}
            onIncrease={() => setQuantity((q) => q + 1)}
            onDecrease={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
          />
          <button
            onClick={handleAddToCart}
            className="btn-primary flex-1"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
