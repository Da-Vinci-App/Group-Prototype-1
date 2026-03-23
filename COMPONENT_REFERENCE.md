# 🎨 Component Reference Guide

## Reusable Components

### RatingStars
Displays star ratings with fractional support.
```tsx
<RatingStars rating={4.9} size="md" showText={true} />
```
**Props:**
- `rating: number` - Rating value (0-5)
- `size?: 'sm' | 'md' | 'lg'` - Icon size
- `showText?: boolean` - Show rating number

---

### Badge
Info badges with icons and color variants.
```tsx
<Badge text="25-30 min" icon="timer" variant="info" />
<Badge text="Free Delivery" icon="truck" variant="success" />
```
**Props:**
- `text: string` - Badge text
- `icon?: string` - Icon key (timer, star, truck, discount, fire)
- `variant?: 'primary' | 'success' | 'warning' | 'info'` - Color variant

---

### QuantitySelector
Plus/minus quantity control.
```tsx
<QuantitySelector
  quantity={quantity}
  onIncrease={() => setQuantity(q => q + 1)}
  onDecrease={() => setQuantity(q => q - 1)}
/>
```
**Props:**
- `quantity: number` - Current quantity
- `onIncrease: () => void` - Increase callback
- `onDecrease: () => void` - Decrease callback

---

### BottomNav
Mobile bottom navigation bar.
```tsx
<BottomNav activeTab="home" onTabChange={setActiveTab} />
```
**Props:**
- `activeTab: string` - Currently active tab ID
- `onTabChange: (tab: string) => void` - Tab change callback

**Tabs:**
- 'home' (🏠)
- 'search' (🔍)
- 'cart' (🛒)
- 'profile' (👤)

---

### PromoBanner
Single promotional banner.
```tsx
<PromoBanner
  title="SUMMER COMBO"
  subtitle="Get 30% off your order"
  image="🌞"
  bgColor="bg-gradient-to-r from-orange-400 to-red-400"
/>
```
**Props:**
- `title: string` - Main headline
- `subtitle?: string` - Subtitle text
- `image: string` - Emoji or icon
- `bgColor: string` - Tailwind gradient class
- `textColor?: string` - 'white' or 'black'

---

### FoodCard
Individual food item card.
```tsx
<FoodCard
  name="Gourmet Cheeseburger"
  price={12.99}
  rating={4.8}
  image="🍔"
  onAddToCart={() => handleAdd()}
/>
```
**Props:**
- `name: string` - Food name
- `price: number` - Price
- `rating?: number` - Star rating (default: 4.8)
- `image: string` - Emoji/icon
- `onAddToCart: () => void` - Add to cart callback

---

## Screen Components

### ProductDetailPage
Full product detail view with customization options.
```tsx
<ProductDetailPage onAddToCart={handleAddToCart} />
```
**Features:**
- Large product image with favorite button
- Rating display
- Nutritional info grid
- Size selection
- Toppings selection (scrollable)
- Quantity selector
- Add to cart button

---

### HomeScreen
Browse and search food items.
```tsx
<HomeScreen onAddToCart={handleAddToCart} />
```
**Features:**
- Sticky search bar
- Category filters
- 2-column food grid
- Empty state handling

**Categories:**
- All, Burgers, Pizza, Chicken, Desserts

---

### CartScreen
Shopping cart with checkout.
```tsx
<CartScreen onCheckout={handleCheckout} />
```
**Features:**
- Location header with change option
- Cart items list with quantity controls
- Price breakdown (subtotal, fees, discounts, tax)
- Order now button
- Continue shopping button

**Calculations:**
- Free delivery over $30
- 10% discount over $20
- 8% tax

---

### PromoBanners
Collection of promotional banners.
```tsx
<PromoBanners onBannerClick={handleBannerClick} />
```
**Features:**
- Vertical stack of banners
- 5 predefined promotions
- Gradient backgrounds
- Click handling

**Promotions:**
- SUMMER COMBO (30% off)
- BURGER BASH (2 burgers $19.99)
- PIZZA PARTY (Buy 1 Get 1 50%)
- BOWL SPECIAL (Fresh & Healthy)
- SWEET DEALS (Desserts 40% off)

---

## Styling Classes

### Buttons
```tsx
// Primary button (orange)
<button className="btn-primary">Action</button>

// Secondary button (neutral)
<button className="btn-secondary">Alternative</button>
```

### Cards
```tsx
// Base card style (white, rounded, shadow)
<div className="card-base">Content</div>

// With hover effects
<div className="card-base card-hover">Content</div>
```

### Colors (Tailwind)
```tsx
// Primary orange
<div className="bg-primary text-white">Primary</div>

// Text colors
<p className="text-text-primary">Main text</p>
<p className="text-text-secondary">Secondary text</p>

// Accent colors
<div className="bg-accent">Success</div>
<div className="bg-secondary">Warning</div>
```

### Shadows
```tsx
// Subtle shadow (small elements)
<div className="shadow-subtle">Content</div>

// Card shadow
<div className="shadow-card">Content</div>

// Soft shadow (very light)
<div className="shadow-soft">Content</div>
```

---

## App Layout

### Mobile Layout (< 1024px)
- Single-column full-screen content
- Fixed bottom navigation bar
- Tab-based navigation

### Desktop Layout (≥ 1024px)
```
┌─────────────────────────────────────────────────┐
│ Three-Panel Layout (all visible simultaneously) │
├─────────────────┬──────────────┬────────────────┤
│  Product Detail │   Home/Search│  Promo Banners │
│     Screen      │    Screen    │    Screen      │
│                 │              │                │
└─────────────────┴──────────────┴────────────────┘
```

---

## State Management Pattern

```tsx
// App.tsx manages:
const [activeTab, setActiveTab] = useState('home');
const [showProductDetail, setShowProductDetail] = useState(false);

// Pass callbacks to components
<HomeScreen onAddToCart={handleAddToCart} />
<CartScreen onCheckout={handleCheckout} />
<PromoBanners onBannerClick={handleBannerClick} />
```

---

## Integration Examples

### Adding Item to Cart
```tsx
const handleAddToCart = (item: any) => {
  // Add logic here
  console.log('Added to cart:', item);
};

<FoodCard name="Pizza" price={14.99} onAddToCart={() => handleAddToCart(food)} />
```

### Handling Tab Changes
```tsx
const [activeTab, setActiveTab] = useState('home');

<BottomNav activeTab={activeTab} onTabChange={setActiveTab} />

{activeTab === 'home' && <HomeScreen />}
{activeTab === 'cart' && <CartScreen />}
```

---

## Design Tokens

### Border Radius
- `rounded-lg`: 8px (small elements)
- `rounded-xl`: 12px (buttons, inputs)
- `rounded-2xl`: 16px (cards)
- `rounded-3xl`: 24px (large cards)

### Font Sizes & Weights
- `text-3xl font-black`: Product title (36px, 900)
- `text-2xl font-bold`: Section title (24px, 700)
- `text-lg font-semibold`: Card title (18px, 600)
- `text-sm font-medium`: Labels (14px, 500)
- `text-xs font-medium`: Badges (12px, 500)

### Spacing
- `gap-2` to `gap-6`: Component spacing
- `p-3` to `p-8`: Content padding
- `my-6` to `my-8`: Vertical margins
- `px-4`: Standard horizontal padding

---

## Quick Tips

✅ **DO:**
- Use `card-base` for card-like containers
- Apply `card-hover` for interactive cards
- Use semantic color names (primary, accent, secondary)
- Leverage badge component for quick info
- Use emoji for food items

❌ **DON'T:**
- Use hard-coded hex colors (use Tailwind classes)
- Add heavy shadows (use shadow-subtle or shadow-card)
- Make corners too sharp (minimum 12px radius)
- Use harsh contrasts (maintain warm, friendly feel)

---

Build amazing experiences with this design system! 🚀
