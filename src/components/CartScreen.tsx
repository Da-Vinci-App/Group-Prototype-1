import React, { useState } from 'react';
import QuantitySelector from './QuantitySelector';
import ImagePlaceholder from './ImagePlaceholder';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: 'burger' | 'pizza' | 'chicken' | 'salad' | 'dessert' | 'drink';
  selectedToppings?: string[];
}

interface CartScreenProps {
  onCheckout?: () => void;
}

const CartScreen: React.FC<CartScreenProps> = ({ onCheckout }) => {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Gourmet Cheeseburger',
      price: 12.99,
      quantity: 2,
      image: 'burger',
      selectedToppings: ['tomato', 'cheese', 'bacon'],
    },
    {
      id: '2',
      name: 'Crispy Chicken Sandwich',
      price: 9.99,
      quantity: 1,
      image: 'chicken',
      selectedToppings: ['tomato', 'lettuce'],
    },
    {
      id: '3',
      name: 'Pepperoni Pizza',
      price: 14.99,
      quantity: 1,
      image: 'pizza',
      selectedToppings: [],
    },
  ]);

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="bg-neutral-light pb-32 md:pb-8">
      {/* Header */}
      <div className="bg-white shadow-subtle sticky top-0 z-20">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-6">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-text-primary mb-2">Your Order</h1>
          <div className="text-sm md:text-base text-text-secondary">Collection Order - Ready for pickup</div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-4 md:mt-6">
        {items.length > 0 ? (
          <>
            {/* Cart Items */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Items List */}
              <div className="lg:col-span-2 space-y-3 md:space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="card-base p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6">
                    <div className="w-full md:w-24 h-24 flex-shrink-0 bg-gray-100 rounded-xl overflow-hidden">
                      <ImagePlaceholder
                        category={item.image}
                        alt={item.name}
                        className="w-full h-full"
                        width={200}
                        height={200}
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-semibold text-text-primary text-base md:text-lg">{item.name}</h3>
                        {item.selectedToppings && item.selectedToppings.length > 0 && (
                          <p className="text-xs md:text-sm text-text-secondary mt-1">
                            Mods: {item.selectedToppings.join(', ')}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center justify-between mt-3 md:mt-0">
                        <span className="font-bold text-primary text-lg md:text-xl">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <div className="flex items-center gap-3">
                          <QuantitySelector
                            quantity={item.quantity}
                            onIncrease={() => updateQuantity(item.id, 1)}
                            onDecrease={() => updateQuantity(item.id, -1)}
                          />
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-text-secondary hover:text-red-500 transition-colors text-lg md:text-xl"
                            aria-label="Remove item"
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Summary */}
              <div className="lg:col-span-1">
                <div className="card-base p-6 md:p-8 sticky top-24 md:top-32 space-y-4">
                  <h2 className="font-bold text-text-primary text-lg md:text-xl mb-4">Order Summary</h2>

                  <div className="flex justify-between items-center text-sm md:text-base">
                    <span className="text-text-secondary">Subtotal ({items.length} items)</span>
                    <span className="font-semibold text-text-primary">${subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between items-center text-sm md:text-base">
                    <span className="text-text-secondary">Tax (8%)</span>
                    <span className="font-semibold text-text-primary">${tax.toFixed(2)}</span>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-base md:text-lg font-black text-text-primary">Total</span>
                      <span className="text-2xl md:text-3xl font-black text-primary">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    onClick={onCheckout}
                    className="btn-primary w-full text-base md:text-lg mt-6"
                  >
                    Ready to Collect
                  </button>
                  <button className="btn-secondary w-full">Continue Browsing</button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="py-16 md:py-24 text-center">
            <p className="text-2xl md:text-3xl font-bold text-gray-400 mb-2">Your cart is empty</p>
            <p className="text-sm md:text-base text-text-secondary">Add items to get started</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartScreen;
