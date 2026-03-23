import React, { useEffect, useMemo, useState } from 'react';
import CartItem, { CartItemType } from './CartItem';
import CartSummary from './CartSummary';
import styles from './Cart.module.css';

/**
 * CartProps interface - props accepted by the Cart component
 * @interface CartProps
 */
interface CartProps {
  /** Array of items currently in the cart */
  cartItems?: CartItemType[];
  /** Delivery fee amount */
  deliveryFee?: number;
  /** Discount amount (if any) */
  discount?: number;
  /** Currency symbol to display with prices */
  currency?: string;
  /** Callback when item quantity changes: (itemId, newQuantity) => void */
  onQuantityChange?: (itemId: string | number, quantity: number) => void;
  /** Callback when item is removed from cart: (itemId) => void */
  onRemoveItem?: (itemId: string | number) => void;
  /** Callback when checkout is triggered: () => void | Promise<void> */
  onCheckout?: () => void | Promise<void>;
  /** Callback when "Browse Menu" is clicked (shown when cart is empty) */
  onBrowseMenu?: () => void;
}

/**
 * Cart Component
 *
 * A reusable, modular shopping cart component designed for restaurant
 * ordering applications. Supports external state management (Redux, Context API, etc).
 *
 * Features:
 * - Display cart items with quantity controls
 * - Instant price calculation and total updates
 * - Price summary (items, delivery, discount, total)
 * - Sticky "Order Now" button at bottom
 * - Empty cart state with "Browse Menu" option
 * - Mobile-first responsive design
 * - Accessible (semantic HTML, ARIA labels)
 * - Async checkout support
 *
 * @component
 * @example
 * import Cart from './components/Cart/Cart';
 *
 * export default function App() {
 *   const [items, setItems] = useState([...]);
 *
 *   return (
 *     <Cart
 *       cartItems={items}
 *       deliveryFee={3}
 *       discount={1.5}
 *       currency="$"
 *       onQuantityChange={(id, qty) => updateItem(id, qty)}
 *       onRemoveItem={(id) => removeItem(id)}
 *       onCheckout={() => proceedToPayment()}
 *       onBrowseMenu={() => navigateToMenu()}
 *     />
 *   );
 * }
 */
export default function Cart({
  cartItems = [],
  deliveryFee = 0,
  discount = 0,
  currency = '$',
  onQuantityChange = () => {},
  onRemoveItem = () => {},
  onCheckout = () => {},
  onBrowseMenu = () => {},
}: CartProps) {
  // Calculate subtotal (sum of price * quantity for all items)
  const subtotal = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  // Calculate total item count (sum of all quantities)
  const totalItems = useMemo(() => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  }, [cartItems]);

  // Track cart state
  const isEmpty = cartItems.length === 0;
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  // Reset checkout state if cart becomes empty while processing
  useEffect(() => {
    if (isEmpty && isCheckingOut) {
      setIsCheckingOut(false);
    }
  }, [isEmpty, isCheckingOut]);

  /**
   * Handle checkout button click
   * Supports both synchronous and asynchronous checkout handlers
   */
  const handleCheckout = () => {
    // Don't allow checkout if cart is empty or already processing
    if (isEmpty || isCheckingOut) return;

    setIsCheckingOut(true);

    try {
      const result = onCheckout?.();

      // Handle async checkout (returns a Promise)
      if (result && typeof result.then === 'function') {
        result.finally(() => setIsCheckingOut(false));
      } else {
        // Sync checkout - reset state immediately
        setIsCheckingOut(false);
      }
    } catch (error) {
      // Log error and reset checkout state if handler throws
      console.error('Checkout error:', error);
      setIsCheckingOut(false);
    }
  };

  return (
    <section className={styles.cartRoot} data-testid="cart">
      {/* ========== HEADER ========== */}
      <header className={styles.cartHeader}>
        <h1 className={styles.cartTitle}>Your Order</h1>
        <span className={styles.cartSubtitle}>
          {totalItems} item{totalItems === 1 ? '' : 's'}
        </span>
      </header>

      {/* ========== MAIN CONTENT ========== */}
      <div className={styles.cartContent}>
        {isEmpty ? (
          // Empty state
          <div className={styles.emptyState}>
            <h2 className={styles.emptyTitle}>Your cart is empty</h2>
            <p className={styles.emptyText}>
              Find something tasty and add it to your order.
            </p>
            <button
              type="button"
              className={styles.browseButton}
              onClick={() => onBrowseMenu?.()}
            >
              Browse Menu
            </button>
          </div>
        ) : (
          // Cart items list
          <div className={styles.itemsList}>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                currency={currency}
                onQuantityChange={onQuantityChange}
                onRemoveItem={onRemoveItem}
              />
            ))}
          </div>
        )}
      </div>

      {/* ========== STICKY FOOTER WITH SUMMARY & CHECKOUT ========== */}
      <footer className={styles.footer}>
        {/* Price summary */}
        <CartSummary
          totalItems={totalItems}
          subtotal={subtotal}
          deliveryFee={deliveryFee}
          discount={discount}
          currency={currency}
        />

        {/* Checkout button */}
        <button
          type="button"
          className={styles.orderButton}
          onClick={handleCheckout}
          disabled={isEmpty || isCheckingOut}
          aria-busy={isCheckingOut}
        >
          {isCheckingOut ? 'Processing…' : 'Order Now'}
        </button>
      </footer>
    </section>
  );
}

export type { CartProps, CartItemType };
