import React, { useState } from 'react';
import QuantitySelector from './QuantitySelector';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
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
      image: '🍔',
      selectedToppings: ['tomato', 'cheese', 'bacon'],
    },
    {
      id: '2',
      name: 'Crispy Chicken Sandwich',
      price: 9.99,
      quantity: 1,
      image: '🍗',
      selectedToppings: ['tomato', 'lettuce'],
    },
    {
      id: '3',
      name: 'Loaded Fries',
      price: 5.99,
      quantity: 1,
      image: '🍟',
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
  const deliveryFee = subtotal > 30 ? 0 : 4.99;
  const discount = subtotal > 20 ? subtotal * 0.1 : 0;
  const tax = (subtotal + deliveryFee - discount) * 0.08;
  const total = subtotal + deliveryFee - discount + tax;

  return (
    <div className="bg-neutral-light pb-32">
      {/* Header */}
      <div className="bg-white shadow-subtle sticky top-0 z-20">
        <div className="max-w-md mx-auto px-4 py-4">
          <h1 className="text-2xl font-black text-text-primary mb-2">Order Summary</h1>
          <div className="text-sm text-text-secondary">📍 123 Food Street, Downtown</div>
          <button className="text-primary font-semibold text-sm mt-1 hover:text-primary-dark transition-colors">
            Change Location →
          </button>
        </div>
      </div>

      {/* Cart Items */}
      <div className="max-w-md mx-auto px-4 mt-6 space-y-3">
        {items.map((item) => (
          <div key={item.id} className="card-base p-4 flex gap-4">
            <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded-xl flex items-center justify-center text-4xl">
              {item.image}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-text-primary">{item.name}</h3>
              {item.selectedToppings && item.selectedToppings.length > 0 && (
                <p className="text-xs text-text-secondary mt-1">
                  {item.selectedToppings.join(', ')}
                </p>
              )}
              <div className="flex items-center justify-between mt-2">
                <span className="font-bold text-primary">${(item.price * item.quantity).toFixed(2)}</span>
                <QuantitySelector
                  quantity={item.quantity}
                  onIncrease={() => updateQuantity(item.id, 1)}
                  onDecrease={() => updateQuantity(item.id, -1)}
                />
              </div>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="text-text-secondary hover:text-red-500 transition-colors"
              aria-label="Remove item"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Price Summary */}
      <div className="max-w-md mx-auto px-4 mt-6">
        <div className="card-base p-5 space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="text-text-secondary">Subtotal ({items.length} items)</span>
            <span className="font-semibold text-text-primary">${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-text-secondary">Delivery Fee</span>
            <span className={`font-semibold ${deliveryFee === 0 ? 'text-accent' : 'text-text-primary'}`}>
              {deliveryFee === 0 ? 'Free' : `$${deliveryFee.toFixed(2)}`}
            </span>
          </div>

          {discount > 0 && (
            <div className="flex justify-between items-center text-sm bg-soft-green px-3 py-2 rounded-lg">
              <span className="text-accent font-medium">Discount</span>
              <span className="font-semibold text-accent">-${discount.toFixed(2)}</span>
            </div>
          )}

          <div className="flex justify-between items-center text-sm">
            <span className="text-text-secondary">Tax</span>
            <span className="font-semibold text-text-primary">${tax.toFixed(2)}</span>
          </div>

          <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
            <span className="text-lg font-black text-text-primary">Total</span>
            <span className="text-3xl font-black text-primary">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Order Button */}
      <div className="max-w-md mx-auto px-4 mt-6 pb-20">
        <button
          onClick={onCheckout}
          className="btn-primary w-full text-lg"
        >
          Order Now
        </button>
        <button className="btn-secondary w-full mt-3">Continue Shopping</button>
      </div>
    </div>
  );
};

export default CartScreen;
