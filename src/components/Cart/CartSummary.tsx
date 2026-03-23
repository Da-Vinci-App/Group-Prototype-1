import React, { useMemo } from 'react';
import styles from './Cart.module.css';

/**
 * CartSummaryProps interface - props for the CartSummary component
 * @interface CartSummaryProps
 */
interface CartSummaryProps {
  /** Total number of items in cart (sum of all quantities) */
  totalItems: number;
  /** Subtotal before fees and discounts */
  subtotal: number;
  /** Delivery fee */
  deliveryFee: number;
  /** Discount amount to subtract */
  discount: number;
  /** Currency symbol (e.g., "$", "€", "£") */
  currency: string;
}

/**
 * CartSummary Component
 *
 * Displays the price breakdown including:
 * - Total number of items
 * - Delivery fee
 * - Applied discount
 * - Final total price
 *
 * Uses useMemo to efficiently calculate the total price and prevent
 * unnecessary recalculations.
 *
 * @component
 * @example
 * <CartSummary
 *   totalItems={5}
 *   subtotal={50}
 *   deliveryFee={5}
 *   discount={2}
 *   currency="$"
 * />
 */
export default function CartSummary({
  totalItems,
  subtotal,
  deliveryFee,
  discount,
  currency,
}: CartSummaryProps) {
  // Calculate final total, ensuring it never goes negative
  const total = useMemo(() => {
    const computed = subtotal + deliveryFee - discount;
    return computed < 0 ? 0 : computed;
  }, [subtotal, deliveryFee, discount]);

  return (
    <div className={styles.summaryContainer}>
      {/* Total items count */}
      <div className={styles.summaryRow}>
        <span>Items</span>
        <span>{totalItems}</span>
      </div>

      {/* Delivery fee */}
      <div className={styles.summaryRow}>
        <span>Delivery</span>
        <span>
          {currency}
          {deliveryFee.toFixed(2)}
        </span>
      </div>

      {/* Discount applied */}
      <div className={styles.summaryRow}>
        <span>Discount</span>
        <span>
          -{currency}
          {discount.toFixed(2)}
        </span>
      </div>

      {/* Final total price */}
      <div className={styles.summaryRow}>
        <span className={styles.summaryTotalLabel}>Total</span>
        <span className={styles.summaryTotalValue}>
          {currency}
          {total.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
