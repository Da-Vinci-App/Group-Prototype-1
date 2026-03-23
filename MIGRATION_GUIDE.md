# 🎯 Quick Reference - Updated App Structure

## What Changed?

### Before ❌
- Emojis everywhere (🍔🛒👤)
- Single-page with tabs
- Desktop: 3-panel layout
- Mobile: Single column with bottom tabs
- Delivery model with fees & addresses
- emoji-based navigation

### After ✅
- Professional images from Unsplash
- Multi-page navigation system
- Unified responsive experience
- Mobile, Tablet, and Desktop views
- Collection-only model
- Text-based symbol navigation

---

## Navigation Structure

### Mobile & Tablet (< 1024px)
```
┌─────────────────────────────────────┐
│          🍔 FoodCollect             │  ← Header
│ [Menu] [Offers] [Profile] [Cart-3] │
├─────────────────────────────────────┤
│                                     │
│     Content Area (Full-width)       │
│                                     │
│  - Menu Page & Search               │
│  - Offers/Promotions                │
│  - Shopping Cart                    │
│  - Profile                          │
│                                     │
├─────────────────────────────────────┤
│  ≡     ★      ◇      ◯              │  ← Mobile Nav
│ Menu  Offers Cart  Profile          │  (Only on mobile)
└─────────────────────────────────────┘
```

### Desktop (≥ 1024px)
```
┌─────────────────────────────────────────────────────────┐
│  🍔 FoodCollect   [Menu][Offers][Profile]  [◇ Cart-3]  │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Content Area - Full Width                              │
│                                                         │
│  - Browse Menu (3-4 columns)                               │
│  - Promotional Offers (3 columns)                          │
│  - Shopping Cart (2-column: items + summary)              │
│  - Profile Information                                    │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## Pages Overview

### 1️⃣ Menu Page (Home)
**What you see:**
- Full menu with food items
- Search bar at top
- Category filters (All, Burgers, Pizza, Chicken, Desserts)
- Food cards with:
  - Real food image (from Unsplash)
  - Item name & price
  - Star rating
  - Add to cart button (+)

**Responsive:**
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3-4 columns

---

### 2️⃣ Offers Page (Special Promotions)
**What you see:**
- Promotional banners with:
  - Bold headline (BURGER SPECIAL, PIZZA DEAL, etc.)
  - Subtitle with offer details
  - Food image overlay
  - Vibrant gradient background

**Responsive:**
- Mobile: 1 column (vertical stack)
- Tablet: 2 columns (grid)
- Desktop: 3 columns (grid)

---

### 3️⃣ Cart Page (Order Summary)
**What you see:**
- Order header: "Your Order - Collection Order"
- List of items with:
  - Item image thumbnail
  - Item name & price
  - Custom modifications (if any)
  - Quantity selector (±)
  - Remove button (✕)
- Price Summary:
  - Subtotal
  - Tax (8%)
  - **Total** (bold & large)
- "Ready to Collect" button (orange)
- "Continue Browsing" button

**Responsive:**
- Mobile: Stacked layout
- Desktop: 2 columns (items left, summary sticky on right)

---

### 4️⃣ Profile Page
**What you see:**
- User avatar symbol (◯)
- User name (John Doe)
- Menu buttons:
  - My Orders
  - Saved Addresses
  - Settings
  - Logout

---

## Key Differences from Old Design

| Feature | Before | After |
|---------|--------|-------|
| **Images** | 🍔 Emojis | Professional Unsplash photos |
| **Navigation** | Tabs only | Tab + Header nav |
| **Layout** | Desktop: 3-panel | Desktop: Full-width pages |
| **Delivery** | Address input, fees | Removed entirely |
| **Pricing** | Subtotal + Delivery + Tax | Subtotal + Tax |
| **Mobile Bottom Nav** | 4 emoji icons | 4 text symbols |
| **Responsiveness** | Basic mobile/desktop | Mobile/Tablet/Desktop optimized |
| **Grid Columns** | 2 columns | 1→2→3→4 depending on screen |

---

## Responsive Breakpoints

| Device | Width | Grid | View |
|--------|-------|------|------|
| Mobile Phone | < 640px | 1 column | Portrait app |
| Large Mobile | 640-768px | 1-2 columns | Landscape app |
| Tablet | 768-1024px | 2-3 columns | Tablet app |
| Desktop | 1024-1280px | 3-4 columns | Full header |
| Wide Desktop | 1280px+ | 4 columns | Wide layout |

---

## Image Sources

All food images come from **Unsplash** professional photos:

| Category | Image | URL |
|----------|-------|-----|
| Burger | Professional burger shot | unsplash.com/photos/... |
| Pizza | Fresh pizza photo | unsplash.com/photos/... |
| Chicken | Cooked chicken dish | unsplash.com/photos/... |
| Salad | Fresh salad bowl | unsplash.com/photos/... |
| Dessert | Cake/dessert plate | unsplash.com/photos/... |
| Drink | Beverage glass | unsplash.com/photos/... |
| Category | Food display | unsplash.com/photos/... |

All images are:
- ✅ High quality (500x500px minimum)
- ✅ Properly cropped
- ✅ Fast loading (CDN hosted)
- ✅ Responsive sizing

---

## Color System (Unchanged)

| Color | Usage |
|-------|-------|
| 🟠 **Orange** (#FF8A00) | Primary buttons, highlights |
| 🟠 **Dark Orange** (#E67E00) | Hover states |
| ⚪ **White** | Card backgrounds |
| 🩶 **Light Gray** (#F5F5F5) | Page background |
| ⬛ **Dark Gray** (#0F172A) | Text headings |
| 🩳 **Medium Gray** (#64748B) | Secondary text |

---

## Navigation Icons

| Icon | Label | Function |
|------|-------|----------|
| ≡ | Menu | Browse food items |
| ★ | Offers | View promotions |
| ◇ | Cart | Shopping cart (shows count) |
| ◯ | Profile | User account |

---

## Button States

### Primary Button (Orange)
- **Default**: Solid orange background
- **Hover**: Darker orange
- **Press**: Even darker with slight scale

### Secondary Button (Gray)
- **Default**: Light gray background
- **Hover**: Lighter gray
- **Press**: Scale effect

### Cart Badge
- Shows item count (3, 5, 10, etc.)
- Red background on top-right
- Updates in real-time

---

## Mobile Experience

### Header on Mobile
- Shows branding and cart button
- Cart button has item count badge
- Sticky at top when scrolling

### Bottom Navigation on Mobile
- Fixed at bottom (doesn't scroll)
- 4 main navigation buttons
- Active tab highlighted in orange
- Always accessible

### Content on Mobile
- Full-width with 16px padding
- Single column layouts
- Touch-optimized spacing
- Thumb-friendly buttons (44px+)

---

## Desktop Experience

### Header on Desktop
- Full navigation: Menu, Offers, Profile
- Cart button with badge
- Sticky header
- Full branding

### Content on Desktop
- Multi-column layouts
- 3-4 column grids
- Optimal spacing
- No bottom navigation

---

## Collection vs Delivery Model

### What's Different

**Collection Model (New):**
- ✅ Pick up at restaurant
- ✅ No delivery address needed
- ✅ Prep time only (10-15 min)
- ✅ Simple pricing: Subtotal + Tax
- ✅ Button says "Ready to Collect"
- ✅ Status: "Collection Order - Ready for pickup"

**Delivery Model (Old - Removed):**
- ❌ Delivery address required
- ❌ Delivery zone needed
- ❌ Delivery fee ($4.99 or free > $30)
- ❌ Complex pricing with discounts
- ❌ Button said "Order Now"
- ❌ Status: "Order to be delivered"

---

## Responsive Typography

| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Main heading | 24px | 28px | 36px |
| Secondary heading | 20px | 24px | 28px |
| Regular text | 14px | 16px | 16px |
| Small text | 12px | 13px | 14px |
| Labels | 12px | 12px | 12px |

All using relative sizing (md:, lg: prefixes)

---

## Testing Checklist

- [ ] Mobile (320px - 640px)
  - [ ] Bottom nav visible
  - [ ] Header shows
  - [ ] 1 column grid
  - [ ] Images load
  - [ ] Buttons tap-friendly

- [ ] Tablet (768px - 1024px)
  - [ ] 2-3 column grids
  - [ ] Header navigation works
  - [ ] Bottom nav hidden
  - [ ] Proper spacing

- [ ] Desktop (1024px+)
  - [ ] 3-4 column grids
  - [ ] Sticky header
  - [ ] No bottom nav
  - [ ] Full-width content

---

## Quick Tips

💡 **Want to change something?**
- Colors: Update `tailwind.config.js`
- Images: Modify `ImagePlaceholder.tsx`
- Navigation: Edit `App.tsx` pages
- Responsive sizes: Update Tailwind classes (sm:, md:, lg:, xl:)

💡 **For Production:**
```bash
npm run build  # Creates optimized build
npm run preview  # Test production build locally
```

💡 **Need more cards?**
- Add to the `foods` array in `HomeScreen.tsx`
- Add to `banners` array in `PromoBanners.tsx`

---

**Status:** ✅ Fully responsive, multi-page, collection-only
**Live:** http://localhost:5174
**Last Updated:** March 23, 2026
