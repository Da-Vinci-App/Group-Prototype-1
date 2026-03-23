# Cart Component

A production-ready, reusable shopping cart component for restaurant ordering applications built with React and TypeScript.

## Features

✅ **Modular & Reusable** - Plug into any React project without breaking existing code  
✅ **TypeScript Support** - Full type safety with exported interfaces  
✅ **Functional Components & Hooks** - Built with `useState`, `useEffect`, `useMemo`  
✅ **CSS Modules** - Scoped styles, no conflicts with other components  
✅ **External State Management** - Works with Redux, Context API, or local state  
✅ **Mobile-First Design** - Responsive layout optimized for all screen sizes  
✅ **Accessible** - Semantic HTML with ARIA labels  
✅ **Async Checkout** - Supports both sync and async payment handlers  
✅ **Empty Cart State** - Shows friendly message and "Browse Menu" button  

## Component Structure

```
src/components/Cart/
├── Cart.tsx              # Main cart container component
├── CartItem.tsx          # Individual item row component
├── CartSummary.tsx       # Price summary section component
├── Cart.module.css       # Scoped CSS module for all components
├── index.ts              # Export barrel with types
├── Cart.example.tsx      # Usage examples
└── README.md             # This file
```

## Installation

The component is already in your `src/components/Cart/` directory. No additional installation needed if you already have React and TypeScript set up.

## Quick Start

### Basic Usage

```tsx
import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import type { CartItemType } from './components/Cart';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItemType[]>([
    {
      id: 1,
      name: 'Burger With Meat',
      price: 12.50,
      quantity: 2,
      image: '/images/burger.png'
    },
  ]);

  return (
    <Cart
      cartItems={cartItems}
      deliveryFee={3}
      discount={1.5}
      currency="$"
      onQuantityChange={(id, qty) => {
        setCartItems(prev =>
          prev.map(item => item.id === id ? { ...item, quantity: qty } : item)
        );
      }}
      onRemoveItem={(id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
      }}
      onCheckout={() => {
        console.log('Proceeding to payment...');
      }}
      onBrowseMenu={() => {
        console.log('Redirecting to menu...');
      }}
    />
  );
}
```

## API Reference

### Cart Component

```tsx
interface CartProps {
  cartItems?: CartItemType[];
  deliveryFee?: number;
  discount?: number;
  currency?: string;
  onQuantityChange?: (itemId: string | number, quantity: number) => void;
  onRemoveItem?: (itemId: string | number) => void;
  onCheckout?: () => void | Promise<void>;
  onBrowseMenu?: () => void;
}
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `cartItems` | `CartItemType[]` | `[]` | Array of items in the cart |
| `deliveryFee` | `number` | `0` | Delivery charge amount |
| `discount` | `number` | `0` | Discount amount (subtracted from total) |
| `currency` | `string` | `"$"` | Currency symbol to display |
| `onQuantityChange` | `function` | `() => {}` | Called when quantity changes: `(itemId, newQuantity) => {}` |
| `onRemoveItem` | `function` | `() => {}` | Called when item is removed: `(itemId) => {}` |
| `onCheckout` | `function` | `() => {}` | Called when "Order Now" is clicked. Can return a Promise for async operations |
| `onBrowseMenu` | `function` | `() => {}` | Called when "Browse Menu" is clicked (empty cart state) |

### CartItemType Interface

```tsx
interface CartItemType {
  id: string | number;          // Unique identifier
  name: string;                  // Product name
  price: number;                 // Unit price
  quantity: number;              // Items in cart
  image: string;                 // Image URL
}
```

## Usage Examples

### With Redux

```tsx
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';

export default function CartContainer() {
  const dispatch = useDispatch();
  const { items, deliveryFee, discount } = useSelector(state => state.cart);

  return (
    <Cart
      cartItems={items}
      deliveryFee={deliveryFee}
      discount={discount}
      currency="$"
      onQuantityChange={(id, qty) => dispatch(updateQuantity(id, qty))}
      onRemoveItem={(id) => dispatch(removeItem(id))}
      onCheckout={() => dispatch(processCheckout())}
    />
  );
}
```

### With Context API

```tsx
import { useCart } from './context/CartContext';
import Cart from './components/Cart/Cart';

export default function App() {
  const { state, dispatch } = useCart();

  return (
    <Cart
      cartItems={state.items}
      deliveryFee={state.deliveryFee}
      discount={state.discount}
      onQuantityChange={(id, qty) => 
        dispatch({ type: 'UPDATE_QUANTITY', payload: { id, qty } })
      }
      onRemoveItem={(id) => 
        dispatch({ type: 'REMOVE_ITEM', payload: id })
      }
      onCheckout={async () => {
        await dispatch({ type: 'PROCESS_CHECKOUT' });
      }}
    />
  );
}
```

### With Async Checkout (Payment API)

```tsx
const handleCheckout = async () => {
  try {
    const response = await fetch('/api/checkout', {
      method: 'POST',
      body: JSON.stringify({
        items: cartItems,
        total: calculateTotal()
      })
    });
    
    const result = await response.json();
    if (result.success) {
      // Clear cart or redirect
    }
  } catch (error) {
    console.error('Checkout failed:', error);
  }
};

<Cart
  cartItems={cartItems}
  // ... other props
  onCheckout={handleCheckout}  // Automatically handles the Promise
/>
```

## Features Explained

### 1. Quantity Controls

- **Increase Button (+)**: Increments item quantity by 1
- **Decrease Button (–)**: Decrements quantity by 1 (minimum is 1)
- **Real-time Updates**: Total price updates immediately via `useMemo`

### 2. Price Calculation

All price calculations use `useMemo` for performance:
- **Subtotal**: Sum of (price × quantity) for all items
- **Total Items**: Sum of all quantities
- **Final Total**: Subtotal + Delivery Fee - Discount (never negative)

### 3. Empty Cart State

When cart is empty:
- Shows "Your cart is empty" message
- Displays "Browse Menu" button
- "Order Now" button is disabled

### 4. Responsive Design

- **Mobile**: Full-width layout with bottom sticky button
- **Desktop** (720px+): Centered card layout with max-width of 580px
- Touch-friendly button sizes and spacing

### 5. Accessibility

- Semantic HTML (`<section>`, `<header>`, `<footer>`)
- ARIA labels on interactive buttons
- Proper button states (disabled, loading)
- Screen reader friendly item counts

### 6. CSS Modules

All styles are in `Cart.module.css` using CSS Modules for:
- **Zero conflicts** with other components
- **Scoped class names** (e.g., `styles.cartRoot`)
- **CSS variables** for easy theming

## Customization

### Change Colors

Edit CSS variables in `Cart.module.css`:

```css
:root {
  --accent: #ff781f;        /* Primary button color */
  --bg: #fafafa;            /* Background */
  --card: #ffffff;          /* Card background */
  --text: #1c1c1c;          /* Text color */
}
```

### Change Fonts

Update the global CSS or wrap the component:

```tsx
<div style={{ fontFamily: 'Your Font, sans-serif' }}>
  <Cart {...props} />
</div>
```

### Custom Empty State

Create a wrapper component:

```tsx
export default function CustomCart(props) {
  return (
    <>
      <Cart {...props} />
      {props.cartItems?.length === 0 && (
        <YourCustomEmptyState />
      )}
    </>
  );
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## TypeScript Types

The component exports all necessary types:

```tsx
import { Cart, CartItem, CartSummary } from './components/Cart';
import type { CartProps, CartItemType } from './components/Cart';
```

## Performance

- **Memoization**: Uses `useMemo` for price calculations
- **No Re-renders**: Child components only re-render when their props change
- **Lazy Loading**: Images use `loading="lazy"` for better performance

## Testing

Example test setup (Jest + React Testing Library):

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Cart from './Cart';

test('removes item when remove button clicked', async () => {
  const handleRemove = jest.fn();
  render(
    <Cart
      cartItems={[{ id: 1, name: 'Burger', price: 10, quantity: 1, image: '' }]}
      onRemoveItem={handleRemove}
    />
  );

  const removeButton = screen.getByLabelText(/remove burger/i);
  await userEvent.click(removeButton);

  expect(handleRemove).toHaveBeenCalledWith(1);
});
```

## Troubleshooting

### Styles not applying?
- Check that `Cart.module.css` is in the same directory
- Ensure your build tool supports CSS Modules

### Component not updating?
- Make sure you're passing new object references for `cartItems` (immutable updates)
- Check that callbacks are not preventing re-renders

### TypeScript errors?
- Install types: `npm install --save-dev @types/react`
- Ensure `tsconfig.json` includes `"jsx": "react-jsx"`

## License

This component is part of your project. Feel free to use and modify as needed.

## Support

For issues or improvements, refer to the example files or check the component JSDoc comments.
