import React from 'react';
import styles from './Cart.module.css';

/**
 * CartItem interface - defines the structure of each cart item
 * @interface CartItem
 * @property {string | number} id - Unique identifier for the item
 * @property {string} name - Display name of the food item
 * @property {number} price - Price per unit
 * @property {number} quantity - Current quantity in cart
 * @property {string} image - URL to the item image
 */
export interface CartItemType {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

/**
 * CartItemProps interface - props for the CartItem component
 * @interface CartItemProps
 */
interface CartItemProps {
  /** The cart item to display */
  item: CartItemType;
  /** Currency symbol (e.g., "$", "€", "£") */
  currency: string;
  /** Callback when quantity changes: (itemId, newQuantity) => void */
  onQuantityChange: (itemId: string | number, quantity: number) => void;
  /** Callback when item is removed: (itemId) => void */
  onRemoveItem: (itemId: string | number) => void;
}

/**
 * CartItem Component
 *
 * Renders a single food item in the cart with:
 * - Product image and name
 * - Price display
 * - Quantity selector with +/- buttons
 * - Remove button
 *
 * @component
 * @example
 * <CartItem
 *   item={{ id: 1, name: "Burger", price: 12.5, quantity: 2, image: "/images/burger.png" }}
 *   currency="$"
 *   onQuantityChange={(id, qty) => updateQuantity(id, qty)}
 *   onRemoveItem={(id) => removeItem(id)}
 * />
 */
export default function CartItem({
  item,
  currency,
  onQuantityChange,
  onRemoveItem,
}: CartItemProps) {
  const { id, name, price, quantity, image } = item;

  // Decrease quantity (minimum is 1)
  const handleDecrement = () => {
    if (quantity > 1) {
      onQuantityChange(id, quantity - 1);
    }
  };

  // Increase quantity
  const handleIncrement = () => {
    onQuantityChange(id, quantity + 1);
  };

  // Remove item from cart
  const handleRemove = () => {
    onRemoveItem(id);
  };

  return (
    <div className={styles.cartItem}>
      {/* Product image */}
      <div className={styles.itemImageWrapper}>
        <img className={styles.itemImage} src={image} alt={name} loading="lazy" />
      </div>

      {/* Product details and controls */}
      <div className={styles.itemDetails}>
        {/* Product name and remove button */}
        <div className={styles.itemHeader}>
          <div className={styles.itemName}>{name}</div>
          <button
            type="button"
            className={styles.removeButton}
            onClick={handleRemove}
            aria-label={`Remove ${name} from cart`}
            title="Remove from cart"
          >
            ✕
          </button>
        </div>

        {/* Price and quantity controls */}
        <div className={styles.itemMeta}>
          {/* Price display */}
          <div className={styles.itemPrice}>
            {currency}
            {price.toFixed(2)}
          </div>

          {/* Quantity selector with +/- buttons */}
          <div className={styles.quantityControl}>
            <button
              type="button"
              className={styles.qtyButton}
              onClick={handleDecrement}
              disabled={quantity <= 1}
              aria-label={`Decrease quantity of ${name}`}
              title="Decrease quantity"
            >
              –
            </button>
            <span className={styles.qtyValue}>{quantity}</span>
            <button
              type="button"
              className={styles.qtyButton}
              onClick={handleIncrement}
              aria-label={`Increase quantity of ${name}`}
              title="Increase quantity"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
