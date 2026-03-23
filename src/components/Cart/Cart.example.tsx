/**
 * Example implementation demonstrating how to integrate the Cart component
 * into a restaurant ordering application.
 *
 * This shows:
 * - How to use the Cart component with sample data
 * - State management approach (useState hooks)
 * - How to handle callbacks from the cart
 * - How to integrate with external payment systems
 */

import React, { useState } from 'react';
import Cart from './Cart';
import type { CartItemType } from './Cart';

/**
 * Example App component demonstrating Cart integration
 */
export default function CartExample() {
  // ========== SAMPLE CART DATA ==========
  const [cartItems, setCartItems] = useState<CartItemType[]>([
    {
      id: 1,
      name: 'Burger With Meat',
      price: 12.5,
      quantity: 2,
      image: 'https://via.placeholder.com/84?text=Burger',
    },
    {
      id: 2,
      name: 'Grilled Chicken Sandwich',
      price: 10.99,
      quantity: 1,
      image: 'https://via.placeholder.com/84?text=Chicken',
    },
    {
      id: 3,
      name: 'Caesar Salad',
      price: 8.5,
      quantity: 3,
      image: 'https://via.placeholder.com/84?text=Salad',
    },
  ]);

  // ========== HANDLERS ==========

  /**
   * Handle quantity changes from the cart
   * This would typically sync with your backend
   */
  const handleQuantityChange = (itemId: string | number, newQuantity: number) => {
    console.log(`Update item ${itemId} quantity to ${newQuantity}`);
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  /**
   * Handle item removal from cart
   * This would typically sync with your backend
   */
  const handleRemoveItem = (itemId: string | number) => {
    console.log(`Remove item ${itemId} from cart`);
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  /**
   * Handle checkout action
   * This can be async to handle payment processing
   */
  const handleCheckout = async () => {
    console.log('Checkout initiated with items:', cartItems);

    // Example: Call your payment API
    try {
      // Simulate API call
      const response = await new Promise<{ success: boolean }>((resolve) => {
        setTimeout(() => {
          resolve({ success: true });
        }, 2000);
      });

      if (response.success) {
        console.log('Payment successful!');
        // Clear cart or redirect to confirmation page
        setCartItems([]);
      }
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };

  /**
   * Handle "Browse Menu" click when cart is empty
   */
  const handleBrowseMenu = () => {
    console.log('Navigate to menu page');
    // In a real app, you would navigate to the menu page
  };

  // ========== RENDER ==========
  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      <Cart
        cartItems={cartItems}
        deliveryFee={3.0}
        discount={2.5}
        currency="$"
        onQuantityChange={handleQuantityChange}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
        onBrowseMenu={handleBrowseMenu}
      />
    </div>
  );
}

/**
 * ========== ALTERNATIVE: Using with Context API or Redux ==========
 *
 * If you're using Context API or Redux, the setup would be similar:
 *
 * import { useCart } from '../context/CartContext';
 *
 * export default function CartIntegration() {
 *   const { items, deliveryFee, discount, updateQuantity, removeItem, checkout } = useCart();
 *
 *   return (
 *     <Cart
 *       cartItems={items}
 *       deliveryFee={deliveryFee}
 *       discount={discount}
 *       currency="$"
 *       onQuantityChange={updateQuantity}
 *       onRemoveItem={removeItem}
 *       onCheckout={checkout}
 *       onBrowseMenu={() => navigate('/menu')}
 *     />
 *   );
 * }
 *
 * ========== INTEGRATION CHECKLIST ==========
 *
 * ✓ Component accepts all required props
 * ✓ Quantity changes trigger callback
 * ✓ Item removal triggers callback
 * ✓ Checkout triggers callback with async support
 * ✓ Empty cart state shows "Browse Menu"
 * ✓ Mobile-responsive design
 * ✓ Sticky footer on desktop
 * ✓ Works with TypeScript
 * ✓ CSS Modules for styling (no style conflicts)
 * ✓ No hardcoded products
 * ✓ Accessible (semantic HTML, ARIA labels)
 */
