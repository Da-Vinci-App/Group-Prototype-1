import React, { useState } from 'react';
import FoodCard from './FoodCard';

interface HomeScreenProps {
  onAddToCart?: (item: any) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onAddToCart }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'burgers', name: 'Burgers' },
    { id: 'pizza', name: 'Pizza' },
    { id: 'chicken', name: 'Chicken' },
    { id: 'desserts', name: 'Desserts' },
  ];

  const foods = [
    { id: 1, name: 'Gourmet Cheeseburger', price: 12.99, rating: 4.9, image: 'burger' as const, category: 'burgers' },
    { id: 2, name: 'Pepperoni Pizza', price: 14.99, rating: 4.7, image: 'pizza' as const, category: 'pizza' },
    { id: 3, name: 'Crispy Chicken Sandwich', price: 9.99, rating: 4.8, image: 'chicken' as const, category: 'chicken' },
    { id: 4, name: 'Margherita Pizza', price: 12.99, rating: 4.6, image: 'pizza' as const, category: 'pizza' },
    { id: 5, name: 'Spicy Tacos', price: 8.99, rating: 4.5, image: 'chicken' as const, category: 'chicken' },
    { id: 6, name: 'Chocolate Cake', price: 6.99, rating: 4.9, image: 'dessert' as const, category: 'desserts' },
    { id: 7, name: 'Caesar Salad', price: 7.99, rating: 4.4, image: 'salad' as const, category: 'salad' },
    { id: 8, name: 'Loaded Fries', price: 5.99, rating: 4.8, image: 'burger' as const, category: 'burgers' },
  ];

  const filteredFoods = foods.filter(
    (food) =>
      (selectedCategory === 'all' || food.category === selectedCategory) &&
      (food.name.toLowerCase().includes(searchQuery.toLowerCase()) || searchQuery === '')
  );

  return (
    <div className="bg-neutral-light pb-24 md:pb-8">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-6">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-text-primary mb-2">Browse Menu</h1>
          <p className="text-sm md:text-base text-text-secondary">Select items for collection</p>
        </div>

        {/* Search Bar */}
        <div className="sticky top-0 z-10 pt-0 pb-4 md:pb-6 bg-neutral-light">
          <div className="relative mb-4 md:mb-6">
            <input
              type="text"
              placeholder="Find your favorite food"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 md:px-6 py-3 md:py-4 bg-white rounded-2xl border-2 border-transparent focus:border-primary focus:outline-none shadow-subtle transition-all text-sm md:text-base"
            />
            <span className="absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 text-text-secondary text-lg md:text-xl">
              ⌕
            </span>
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex-shrink-0 px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition-all duration-200 text-sm md:text-base whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white shadow-card'
                    : 'bg-white text-text-primary hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Food Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mb-8">
          {filteredFoods.map((food) => (
            <FoodCard
              key={food.id}
              name={food.name}
              price={food.price}
              rating={food.rating}
              image={food.image}
              onAddToCart={() => {
                onAddToCart?.(food);
                alert(`${food.name} added to cart!`);
              }}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredFoods.length === 0 && (
          <div className="py-12 md:py-16 text-center">
            <p className="text-2xl md:text-3xl font-bold text-gray-400 mb-2">No items found</p>
            <p className="text-sm md:text-base text-text-secondary">Try a different search or category</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
