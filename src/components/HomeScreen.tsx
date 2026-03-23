import React, { useState } from 'react';
import FoodCard from './FoodCard';

interface HomeScreenProps {
  onAddToCart?: (item: any) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onAddToCart }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: '⭐' },
    { id: 'burgers', name: 'Burgers', icon: '🍔' },
    { id: 'pizza', name: 'Pizza', icon: '🍕' },
    { id: 'chicken', name: 'Chicken', icon: '🍗' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' },
  ];

  const foods = [
    { id: 1, name: 'Gourmet Cheeseburger', price: 12.99, rating: 4.9, image: '🍔' },
    { id: 2, name: 'Pepperoni Pizza', price: 14.99, rating: 4.7, image: '🍕' },
    { id: 3, name: 'Crispy Chicken Sandwich', price: 9.99, rating: 4.8, image: '🍗' },
    { id: 4, name: 'Margherita Pizza', price: 12.99, rating: 4.6, image: '🍕' },
    { id: 5, name: 'Spicy Tacos', price: 8.99, rating: 4.5, image: '🌮' },
    { id: 6, name: 'Chocolate Cake', price: 6.99, rating: 4.9, image: '🍰' },
    { id: 7, name: 'Caesar Salad', price: 7.99, rating: 4.4, image: '🥗' },
    { id: 8, name: 'Loaded Fries', price: 5.99, rating: 4.8, image: '🍟' },
  ];

  const filteredFoods = foods.filter(
    (food) =>
      food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      searchQuery === ''
  );

  return (
    <div className="bg-neutral-light pb-32">
      <div className="max-w-md mx-auto px-4">
        {/* Search Bar */}
        <div className="sticky top-0 z-10 pt-4 pb-4 bg-neutral-light">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Find your favorite food"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 bg-white rounded-2xl border-2 border-transparent focus:border-primary focus:outline-none shadow-subtle transition-all"
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-text-secondary">
              🔍
            </span>
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white shadow-card'
                    : 'bg-white text-text-primary hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <span>{category.icon}</span>
                <span className="whitespace-nowrap">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Food Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {filteredFoods.map((food) => (
            <FoodCard
              key={food.id}
              name={food.name}
              price={food.price}
              rating={food.rating}
              image={food.image}
              onAddToCart={() => {
                onAddToCart?.(food);
                // Show a quick feedback
                alert(`${food.name} added to cart!`);
              }}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredFoods.length === 0 && (
          <div className="py-16 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-text-secondary">No foods found</p>
            <p className="text-sm text-text-secondary mt-1">Try a different search</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
