import React, { useState } from 'react';
import RatingStars from './RatingStars';
import Badge from './Badge';
import QuantitySelector from './QuantitySelector';
import ImagePlaceholder from './ImagePlaceholder';

interface ProductDetailPageProps {
  onAddToCart?: (item: any) => void;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState('regular');
  const [isFavorite, setIsFavorite] = useState(false);

  const product = {
    name: 'Gourmet Cheeseburger',
    description: 'Premium cheeseburger made with fresh beef patty, melted cheddar cheese, crispy bacon, and our special house sauce on a toasted bun.',
    price: 12.99,
    rating: 4.9,
    reviews: 342,
    calories: 580,
    protein: 28,
    carbs: 42,
    fat: 24,
    prepTime: '10-15 min',
    image: 'burger' as const,
  };

  const toppings = [
    { id: 'tomato', name: 'Tomato' },
    { id: 'onion', name: 'Onion' },
    { id: 'cheese', name: 'Extra Cheese' },
    { id: 'bacon', name: 'Bacon' },
    { id: 'lettuce', name: 'Lettuce' },
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
    <div className="bg-neutral-light pb-32 md:pb-8">
      {/* Product Image */}
      <div className="relative w-full h-48 md:h-64 lg:h-80 bg-gradient-to-b from-soft-yellow to-neutral flex items-center justify-center overflow-hidden">
        <ImagePlaceholder
          category={product.image}
          alt={product.name}
          className="w-full h-full"
          width={500}
          height={500}
        />
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-4 md:top-6 right-4 md:right-6 w-10 md:w-12 h-10 md:h-12 bg-white rounded-full flex items-center justify-center shadow-card hover:shadow-lg transition-all text-xl md:text-2xl"
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>

      {/* Content */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-6 md:mt-8 space-y-6 md:space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-text-primary mb-2 md:mb-3">{product.name}</h1>
          <p className="text-sm md:text-base text-text-secondary leading-relaxed">{product.description}</p>
        </div>

        {/* Rating & Reviews */}
        <div className="flex items-center gap-4">
          <RatingStars rating={product.rating} size="md" showText={true} />
          <span className="text-sm md:text-base text-text-secondary">({product.reviews} reviews)</span>
        </div>

        {/* Badges */}
        <div className="flex gap-2 flex-wrap">
          <Badge text={product.prepTime} icon="timer" variant="info" />
          <Badge text="In Stock" icon="fire" variant="success" />
        </div>

        {/* Price Card */}
        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-subtle">
          <p className="text-xs md:text-sm text-text-secondary mb-2">Collection Price</p>
          <p className="text-4xl md:text-5xl font-black text-primary">${product.price}</p>
        </div>

        {/* Nutrition Info */}
        <div>
          <h3 className="font-semibold text-text-primary mb-3 md:mb-4 text-base md:text-lg">Nutritional Information</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <div className="bg-white rounded-2xl p-3 md:p-4 text-center shadow-subtle">
              <p className="text-xl md:text-2xl font-bold text-primary">{product.calories}</p>
              <p className="text-xs md:text-sm text-text-secondary mt-1">Calories</p>
            </div>
            <div className="bg-white rounded-2xl p-3 md:p-4 text-center shadow-subtle">
              <p className="text-xl md:text-2xl font-bold text-accent">{product.protein}g</p>
              <p className="text-xs md:text-sm text-text-secondary mt-1">Protein</p>
            </div>
            <div className="bg-white rounded-2xl p-3 md:p-4 text-center shadow-subtle">
              <p className="text-xl md:text-2xl font-bold text-secondary">{product.carbs}g</p>
              <p className="text-xs md:text-sm text-text-secondary mt-1">Carbs</p>
            </div>
            <div className="bg-white rounded-2xl p-3 md:p-4 text-center shadow-subtle">
              <p className="text-xl md:text-2xl font-bold text-primary-light">{product.fat}g</p>
              <p className="text-xs md:text-sm text-text-secondary mt-1">Fat</p>
            </div>
          </div>
        </div>

        {/* Size Selection */}
        <div>
          <h3 className="font-semibold text-text-primary mb-3 md:mb-4 text-base md:text-lg">Choose Size</h3>
          <div className="grid grid-cols-3 gap-2 md:gap-3">
            {sizes.map((size) => (
              <button
                key={size.id}
                onClick={() => setSelectedSize(size.id)}
                className={`py-3 md:py-4 rounded-xl font-semibold transition-all duration-200 text-sm md:text-base ${
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
          <h3 className="font-semibold text-text-primary mb-3 md:mb-4 text-base md:text-lg">Add Toppings</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3">
            {toppings.map((topping) => (
              <button
                key={topping.id}
                onClick={() => toggleTopping(topping.id)}
                className={`flex items-center justify-center py-3 md:py-4 px-2 md:px-4 rounded-xl transition-all duration-200 text-xs md:text-sm font-medium ${
                  selectedToppings.includes(topping.id)
                    ? 'bg-primary text-white border-2 border-primary'
                    : 'bg-white text-text-primary border-2 border-gray-200 hover:border-primary'
                }`}
              >
                {topping.name}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity & Add to Cart */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch md:items-center pb-4">
          <QuantitySelector
            quantity={quantity}
            onIncrease={() => setQuantity((q) => q + 1)}
            onDecrease={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
          />
          <button
            onClick={handleAddToCart}
            className="btn-primary flex-1 text-base md:text-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
