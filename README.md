# Da-Vinci Group Prototype 1

This prototype is to share initial ideas for what the app should look like to key stakeholders to collect feedback and advice.
This should be based of images in: 

[This presentation](https://yeovilacuk-my.sharepoint.com/:p:/r/personal/717113_yeovil_ac_uk/Documents/Da-vinci%20App%20Design%20Ideas.pptx?d=w69df3de440e0499f94f152e71e889d06&amp;csf=1&amp;web=1&amp;e=fmL7JI)

---

## 🍔 Modern Food Ordering App UI

A beautifully designed, responsive mobile food ordering app UI built with **React**, **TypeScript**, and **Tailwind CSS**. Inspired by popular food delivery services with a clean, modern aesthetic featuring soft shadows, rounded corners, and warm orange branding.

### ✨ Features

#### Design System
- **Color Palette**: Warm orange primary (#FF8A00), soft yellows, muted greens, and neutral backgrounds
- **Typography**: Clean Inter sans-serif font with clear hierarchy
- **Components**: Rounded corners (20-24px), subtle drop shadows, smooth transitions
- **Responsive**: Optimized for mobile with desktop multi-panel layout

#### Screen Components

**1. Product Detail Page**
- Large food image showcase with heart favorite button
- Product name, description, and rating with review count
- Prominent price display with gradient background
- Nutritional information cards (Calories, Protein, Carbs, Fat)
- Quick info badges (delivery time, free delivery, popular)
- Size selector with price adjustments
- Horizontal scrollable toppings selection
- Quantity selector and "Add to Cart" button

**2. Home / Browse Screen**
- Sticky search bar with placeholder text
- Category filter with icons (All, Burgers, Pizza, Chicken, Desserts)
- 2-column grid layout of food items
- Each food card includes: food image, name, rating, price, and "Add to Cart" button

**3. Shopping Cart Screen**
- Location header with "Change Location" option
- List of cart items with thumbnail images, names, prices, and quantity selectors
- Price summary breakdown (subtotal, delivery fee, discount, tax, total)
- Full-width orange "Order Now" button

**4. Special Offers / Promo Banners**
- Vertical stack of promotional banners with vibrant gradient backgrounds
- Each banner features bold headlines, subtitles, and large food emojis
- Hover effects with subtle scaling and shadows

**5. Bottom Navigation**
- Fixed navigation bar with 4 tabs (Home, Search, Cart, Profile)
- Active tab highlighted in primary orange

### 🏗️ Project Structure

```
src/
├── components/
│   ├── Badge.tsx              # Info badges component
│   ├── BottomNav.tsx          # Mobile navigation bar
│   ├── CartScreen.tsx         # Shopping cart screen
│   ├── FoodCard.tsx           # Individual food card
│   ├── HomeScreen.tsx         # Browse/home screen
│   ├── ProductDetailPage.tsx  # Product detail screen
│   ├── PromoBanner.tsx        # Single promo banner
│   ├── PromoBanners.tsx       # Promo banners collection
│   ├── QuantitySelector.tsx   # Quantity control component
│   └── RatingStars.tsx        # Star rating component
├── App.tsx                    # Main app component
├── main.tsx                   # React entry point
├── main.css                   # Global styles with Tailwind directives
└── setupTests.ts              # Test configuration
```

### 🎨 Color Scheme

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Orange | #FF8A00 | Buttons, links, highlights |
| Primary Dark | #E67E00 | Hover states |
| Primary Light | #FFB84D | Secondary accents |
| Secondary Yellow | #FFC107 | Accent elements |
| Accent Green | #4CAF50 | Success states, discounts |
| Neutral | #F5F5F5 | Card backgrounds |
| Text Primary | #0F172A | Main text |
| Text Secondary | #64748B | Secondary text |

### 💻 Layout Modes

**Mobile View (< 1024px)**
- Single-column layout with bottom navigation
- Full-screen scrollable content areas
- Touch-optimized buttons and spacing

**Desktop View (≥ 1024px)**
- Three-panel layout side-by-side:
  - Left: Product Detail Page
  - Center: Home/Browse Screen
  - Right: Promo Banners

### ⚙️ Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server
- **PostCSS** - CSS processing

---

### Timeline
LINK TO TIMELINE COMMING SOON

### Quick Start

1. Install dependencies:

```bash
npm install
```

2. Run dev server:

```bash
npm run dev
```

3. Run tests:

```bash
npm test
```

### Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
npm run format     # Format code with Prettier
npm run test       # Run tests with Vitest
npm typecheck      # TypeScript type checking
```

## How to upload to this REPO:
1) Ensure you are working on your own branch.
- If you are in Github Desktop select the branch at the top.
- If you are using terminal use `switch YOUR BRANCH NAME`
2) Push to your branch.
3) At the next meeting we will merge all of our changes into the main branch.

