# 🎯 App Architecture Overview - With Authentication

## Complete App Flow

```
┌──────────────────────────────────────────────────────────────────┐
│                      FoodCollect App                             │
│                    (React 18 + TypeScript)                       │
└──────────────────────────────────────────────────────────────────┘
                              │
                    ┌─────────┴─────────┐
                    │   App.tsx         │
                    │ (Main Orchestrator)
                    └────────┬──────────┘
                             │
                ┌────────────┼────────────┐
                │                         │
        ┌───────▼────────┐      ┌────────▼──────┐
        │ Authenticated? │      │ Not Auth?      │
        │     (True)     │      │  (False)       │
        └───────┬────────┘      └────────┬───────┘
                │                        │
        ┌───────▼─────────────┐   ┌──────▼────────────┐
        │  MAIN APP PAGES     │   │ LOGIN/SIGNUP PAGE │
        │  (Show Header+Nav)  │   │ (Hide Nav)        │
        └───────┬─────────────┘   └──────┬────────────┘
                │                        │
        ┌───────┴─────────┬──────┬───┐   │
        │                 │      │   │   │
    ┌───▼──┐  ┌────▼────┐ │ ┌───▼─┐ │ ┌─▼──────────┐
    │ Menu │  │ Offers  │ │ │Cart │ │ │ Profile    │
    └──────┘  └─────────┘ │ └─────┘ │ │ (with Auth)│
    (Browse)  (Squircle   │ (Items)│ │ (Logout)   │
              Cards)      │         │ └────────────┘
              (Images)    └─────────┘
                                │
                         ┌──────▼──────┐
                         │ localStorage │
                         │ (User Data)  │
                         └──────────────┘
```

---

## 🏗️ Component Tree

```
App (Main Container)
│
├─ Header (Sticky, Desktop Only)
│  ├─ Logo: 🍔 FoodCollect
│  ├─ Nav Buttons: Menu | Offers | Profile
│  └─ Cart Button (with badge count)
│
├─ Main Content (Conditional Rendering)
│  │
│  ├─ [IF Authenticated = False]
│  │  └─ LoginSignUp Component (NEW)
│  │     ├─ Header Image Section (Pizza photo)
│  │     ├─ Logo Badge (🍕)
│  │     ├─ Form
│  │     │  ├─ Full Name Input (Sign Up only)
│  │     │  ├─ Email Input
│  │     │  └─ Password Input
│  │     ├─ Sign Up / Sign In Button
│  │     ├─ Toggle Link
│  │     └─ Demo Info Banner
│  │
│  ├─ [IF Authenticated = True]
│  │  │
│  │  ├─ Page: Home (Menu)
│  │  │  └─ HomeScreen Component
│  │  │     ├─ Search Bar
│  │  │     ├─ Category Filters
│  │  │     └─ Food Grid
│  │  │        └─ FoodCard (1→2→3→4 columns)
│  │  │           ├─ ImagePlaceholder
│  │  │           ├─ Name & Price
│  │  │           ├─ RatingStars
│  │  │           └─ Add to Cart Button
│  │  │
│  │  ├─ Page: Offers (Special Offers)
│  │  │  └─ PromoBanners Component (UPDATED)
│  │  │     └─ Promo Grid (1→2→3 columns)
│  │  │        └─ PromoBanner Component (UPDATED - Squircle)
│  │  │           ├─ Layout Option 1: Image Top
│  │  │           │  ├─ Food Image (Unsplash)
│  │  │           │  ├─ Title & Subtitle
│  │  │           │  └─ Learn More Button
│  │  │           │
│  │  │           └─ Layout Option 2: Background Image
│  │  │              ├─ Full Image Background
│  │  │              ├─ Dark Overlay
│  │  │              ├─ Title & Subtitle (White)
│  │  │              └─ Implicit CTA
│  │  │
│  │  ├─ Page: Cart
│  │  │  └─ CartScreen Component
│  │  │     ├─ Order Items List
│  │  │     │  └─ CartItem
│  │  │     │     ├─ ImagePlaceholder
│  │  │     │     ├─ Item Name
│  │  │     │     ├─ QuantitySelector (±)
│  │  │     │     └─ Remove Button
│  │  │     └─ Sticky Summary (Desktop)
│  │  │        ├─ Subtotal
│  │  │        ├─ Tax (8%)
│  │  │        ├─ Total (Bold)
│  │  │        └─ "Ready to Collect" Button
│  │  │
│  │  └─ Page: Profile
│  │     ├─ User Avatar (◯)
│  │     ├─ User Name (From localStorage)
│  │     ├─ Buttons
│  │     │  ├─ My Orders
│  │     │  ├─ Saved Addresses
│  │     │  ├─ Settings
│  │     │  └─ Logout (Clears Auth)
│  │     └─ [On Logout] → Back to LoginSignUp
│  │
│  └─ ProductDetailPage Component
│     ├─ ImagePlaceholder (Large)
│     ├─ Product Info
│     ├─ Price & Stock
│     ├─ Nutrition Facts
│     ├─ Toppings Selection
│     ├─ RatingStars
│     ├─ QuantitySelector
│     └─ Add to Cart Button
│
├─ BottomNav (Mobile Only, md:hidden)
│  ├─ Icon: ≡ (Menu)
│  ├─ Icon: ★ (Offers)
│  ├─ Icon: ◇ (Cart)
│  └─ Icon: ◯ (Profile)
│
└─ Data & State Management
   ├─ currentPage: 'home' | 'offers' | 'cart' | 'profile' | 'login' | 'signup'
   ├─ isAuthenticated: boolean
   ├─ cartCount: number
   ├─ userName: string
   └─ localStorage: { user: { fullName, email } }
```

---

## 🔐 Authentication State Machine

```
                    ┌─────────────────────┐
                    │   App Initializes   │
                    └──────────┬──────────┘
                               │
                       Check localStorage
                               │
                 ┌─────────────┼─────────────┐
                 │             │             │
            User exists?    No Data       Empty Data
            (Valid)         Found         Found
                 │             │             │
          ┌──────▼──┐    ┌─────▼──┐   ┌────▼─────┐
          │ Restore │    │ Show   │   │ Ask to   │
          │ Session │    │ SignUp │   │ SignUp   │
          └──────┬──┘    └────┬───┘   └────┬─────┘
                 │            │            │
                 └────────┬───┴────────┬───┘
                          │           │
                          ▼           ▼
                  ┌──────────────────────┐
                  │  LoginSignUp Page    │
                  │  (Ready for Input)   │
                  └──────┬───────────────┘
                         │
          ┌──────────────┼──────────────┐
          │              │              │
      User Clicks    User Clicks   Click Toggle
      Sign Up        Sign In       Link
          │              │              │
          ▼              ▼              ▼
    ┌──────────┐   ┌────────────┐  ┌────────┐
    │Show:     │   │Show:       │  │Switch  │
    │- Name    │   │- NO Name   │  │Layout  │
    │- Email   │   │- Email     │  └────────┘
    │- Pass    │   │- Pass      │
    └──────────┘   └────────────┘
          │              │
          └──────┬───────┘
                 │
            Form Submit
                 │
         ┌───────▼────────┐
         │ Validate Input │
         └───────┬────────┘
                 │
         ┌───────▼────────────┐
         │ Save to localStorage│
         │ { user: {...} }     │
         └───────┬────────────┘
                 │
         ┌───────▼──────────────┐
         │ onAuthChange(true)   │
         │ isAuthenticated=true │
         └───────┬──────────────┘
                 │
    ┌────────────▼─────────────┐
    │  Redirect to Home Page   │
    │  (Show Menu)             │
    │  (Show Header + Nav)     │
    └────────────┬─────────────┘
                 │
         ┌───────▼──────────┐
         │  User in App     │
         │  Can browse      │
         │  Add to cart     │
         │  View offers     │
         └─────────────────┘
                 │
         [At Any Point]
         User Logs Out
                 │
    ┌────────────▼──────────────┐
    │ Clear localStorage        │
    │ Remove user entry         │
    │ isAuthenticated = false   │
    └─────────┬──────────────────┘
              │
    ┌─────────▼────────────┐
    │ Back to SignUp Page  │
    └─────────────────────┘
```

---

## 📱 Responsive Breakpoints

### Tailwind Classes Used

```
Default (Mobile):
  - Single column grids
  - Full-width elements
  - Centered layouts
  - Touch-friendly (44px+ buttons)

sm: (640px+)
  - Not heavily used
  - Transition sizes

md: (768px+)
  - Two column grids
  - Hide bottom nav (md:hidden)
  - Show top nav (hidden md:flex)
  - Larger text sizes
  - Tablet optimization

lg: (1024px+)
  - Three+ column grids
  - Full responsive features
  - Desktop layouts
  - Hover states active

xl: (1280px+)
  - Max width constraints
  - Wide desktop layouts
  - Four column grids
```

### Layout Examples

**Menu (Home) Grid:**
```css
grid-cols-1              /* Mobile: 1 column */
sm:grid-cols-2           /* Small: 2 columns */
lg:grid-cols-3           /* Large: 3 columns */
xl:grid-cols-4           /* XL: 4 columns */
```

**Offers (Promos) Grid:**
```css
grid-cols-1              /* Mobile: 1 column */
md:grid-cols-2           /* Tablet: 2 columns */
lg:grid-cols-3           /* Desktop: 3 columns */
```

**Login Header Image:**
```css
h-64                     /* Mobile: 256px */
md:h-80                  /* Tablet: 320px */
lg:h-96                  /* Desktop: 384px */
```

---

## 🎨 Color System (Unchanged)

```
Primary Orange:
  - bg-primary: #FF8A00
  - Buttons, highlights, active states
  - Used in: Header, buttons, links

Neutral Light:
  - bg-neutral-light: #F5F5F5
  - Page background
  - Card backgrounds: white

Text Colors:
  - text-text-primary: #0F172A (dark)
  - text-text-secondary: #64748B (gray)

Gradients:
  - Used in: Headers, banners
  - from-orange-X to-orange-Y
```

---

## 💾 Data Flow & Storage

### localStorage Structure

```javascript
// After Sign Up / Sign In
localStorage.setItem('user', JSON.stringify({
  fullName: "John Doe",
  email: "john@example.com"
}));

// App checks on load
const savedUser = localStorage.getItem('user');
if (savedUser) {
  // User is authenticated
}

// On Logout
localStorage.removeItem('user');
```

### Component State Lifting

```
App.tsx (Top Level)
├─ isAuthenticated (boolean)
├─ currentPage (PageType)
├─ cartCount (number)
├─ userName (string)
└─ Callbacks
   ├─ handleAuthChange(bool)
   ├─ handleAddToCart(item)
   ├─ handleCheckout()
   └─ handleLogout()
```

---

## 🚀 Navigation Structure

### Desktop (≥ 1024px)

```
┌──────────────────────────────────────────────────┐
│ 🍔 FoodCollect  [Menu|Offers|Profile]  [Cart-3] │
├──────────────────────────────────────────────────┤
│                                                  │
│              Main Content Area                   │
│         (Full Width, Max 7xl container)          │
│                                                  │
└──────────────────────────────────────────────────┘

No Bottom Navigation
```

### Mobile (< 768px)

```
┌──────────────────────────────┐
│ 🍔 FoodCollect    [Cart-3]  │
├──────────────────────────────┤
│                              │
│     Main Content Area        │
│     (Full Width)             │
│                              │
│                              │
├──────────────────────────────┤
│ ≡        ★        ◇      ◯   │
│Menu   Offers   Cart   Profile │
└──────────────────────────────┘

Bottom Navigation Visible
```

---

## 🔄 Update Summary

### New Components
- ✅ `LoginSignUp.tsx` - Auth interface

### Updated Components
- ✅ `App.tsx` - Auth state & routing
- ✅ `PromoBanner.tsx` - Squircle design
- ✅ `PromoBanners.tsx` - New data structure

### Unchanged Components
- HomeScreen, CartScreen, ProductDetailPage
- BottomNav, FoodCard, RatingStars, Badge, QuantitySelector
- ImagePlaceholder

---

## 📊 Type Definitions

```typescript
// Main page routing
type PageType = 'home' | 'offers' | 'cart' | 'profile' | 'login' | 'signup';

// Auth state
interface User {
  fullName: string;
  email: string;
}

// Promo banner
interface PromoData {
  id: string;
  title: string;
  subtitle: string;
  image: 'burger' | 'pizza' | 'chicken' | 'salad' | 'dessert' | 'drink' | 'category';
  layout?: 'image-top' | 'image-background';
}
```

---

**Last Updated:** March 23, 2026  
**Status:** ✅ Complete Architecture
