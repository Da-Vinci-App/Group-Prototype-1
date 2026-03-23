# ✨ Login/Sign-Up & Special Offers Update

## Overview

This update adds professional authentication flow and redesigned promotional offers with squircle card design and high-quality images.

---

## 1️⃣ NEW: Login/Sign-Up Page

### 📱 Design Implementation

```
┌─────────────────────────────┐
│   🍕 Pizza Background       │  ← Header Image (40% of screen)
│   (High-res food image)     │
├─────────────────────────────┤
│         📍 Logo             │  ← Circular badge (overlapping)
│    (Rounded circle)         │
├─────────────────────────────┤
│   Full Name                 │  ← Form fields with bottom
│   ___________________       │     borders (minimalist)
│                             │
│   Email                     │
│   ___________________       │
│                             │
│   Password                  │
│   ___________________       │
│                             │
│   ┌─────────────────────┐   │
│   │   Sign Up Button    │   │  ← Orange, rounded, 44px+
│   └─────────────────────┘   │     (thumb-friendly)
│                             │
│   Already have an account?  │  ← Toggle link
│   Sign In →                 │
└─────────────────────────────┘
```

### 🎨 Visual Features

**Header Image Section:**
- Full-width pizza/food background image
- Unsplash professional photography
- Dark overlay (`black/20` to `black/40`) for contrast
- Responsive height: 64px (mobile) → 80px (tablet) → 96px (desktop)

**Logo Badge:**
- Circular shape with white border
- Gradient background (orange to dark-orange)
- Pizza emoji placeholder (🍕)
- Box shadow for depth
- Positioned overlapping header and form
- Responsive size: 96px (mobile) → 112px (desktop)

**Form Fields:**
- Clean minimalist design
- Label above, subtle bottom border only
- Focus state: Border turns orange
- Placeholder text in gray
- Subtle transitions

**Form Validation:**
- Full Name: Required for Sign Up only
- Email: Auto-validate format
- Password: Visually masked (•••••)

**Primary Button:**
- Rounded pill shape (border-radius: full)
- Orange background with hover darkening
- Active state: Scale animation
- Responsive padding: 16px (mobile) → 20px (desktop)
- Text: "Sign Up" or "Sign In" based on mode
- Font: Bold, large (18-20px)

**Toggle Link:**
- Text: "Already have an account? Sign In" (Sign Up mode)
- Text: "Don't have an account? Sign Up" (Sign In mode)
- Orange color on hover
- Clickable to switch between modes

### 🔧 Technical Implementation

**File:** `src/components/LoginSignUp.tsx`

**Props Interface:**
```typescript
interface LoginSignUpProps {
  onAuthChange: (isAuthenticated: boolean) => void;
  initialMode?: 'login' | 'signup';
}
```

**State Management:**
```typescript
- mode: 'login' | 'signup'
- fullName: string
- email: string
- password: string
```

**Authentication Storage:**
- Uses browser localStorage
- Stores: `{ fullName: string; email: string }`
- Key: `'user'`
- Persists across page reloads

**Form Submission:**
- Validates required fields
- Stores user in localStorage
- Calls `onAuthChange(true)`
- Redirects to Menu page

### 📱 Responsive Behavior

| Device | Header Height | Logo Size | Button Size |
|--------|---------------|-----------|-------------|
| Mobile | 16rem (256px) | 96px | 48px |
| Tablet+ | 20rem (320px) | 112px | 56px |
| Desktop | 24rem (384px) | 112px | 56px |

### 🔐 Authentication Flow

1. **App loads** → Check localStorage for user
2. **User authenticated** → Show app (Menu, Offers, Cart, Profile)
3. **User not authenticated** → Show LoginSignUp in 'signup' mode
4. **User clicks "Sign In"** → Switch to 'login' mode (no Full Name field)
5. **User submits form** → Save to localStorage + redirect to Menu
6. **User clicks Logout** → Remove from localStorage + return to Sign Up

### 💡 Demo Mode

- **No backend required**
- Use any email/password combination
- Data stored in browser localStorage only
- Blue info box explains demo nature
- Clear on logout

---

## 2️⃣ UPDATED: Special Offers Section

### 🎨 Squircle Card Design

**What is a Squircle?**
- Smooth, heavily rounded square
- Border-radius: ~30-35% creates the effect
- More organic than sharp corners
- Less extreme than perfect circle

**Implementation:**
```css
border-radius: 30px;  /* Tailwind: rounded-3xl */
```

### 🎬 Two Layout Options

#### Option 1: Image on Top (Default)
```
┌─────────────────┐
│   Image (Cover) │  ← High-res food photo
│   400x320px     │     Object-cover fit
├─────────────────┤
│  OFFER TITLE    │  ← Bold text
│  Offer Details  │  ← Subtitle
├─────────────────┤
│ Learn More →    │  ← CTA button
└─────────────────┘
```

**Usage:** Best for information-dense offers
- Clean hierarchy
- Professional appearance
- Readable text on any background
- Default for most banners

#### Option 2: Background Image (Alternative)
```
┌─────────────────┐
│ Dark Overlay    │
│ + Image         │  ← Full-width background
│                 │
│ OFFER TITLE     │  ← White text overlay
│ Offer Details   │
└─────────────────┘
```

**Usage:** For premium, visual-focused promotions
- More dramatic
- Immersive feel
- Better for limited offers
- Used for 2-3 key promotions

### 📊 Responsive Grid

| Device | Columns | Gap | Padding |
|--------|---------|-----|---------|
| Mobile | 1 column | 20px | 16px sides |
| Tablet | 2 columns | 24px | 24px sides |
| Desktop | 3 columns | 32px | 32px sides |

**Height Responsive:**
- Mobile: 160px (h-40)
- Tablet: 192px (h-48)
- Desktop: 224px (h-56)

### 🎯 Current Offers

1. **SUMMER COMBO** (Image Top)
   - Burger image
   - "Get 30% off your order"

2. **BURGER SPECIAL** (Image Top)
   - Burger image
   - "2 burgers for just $19.99"

3. **PIZZA DEAL** (Background Image)
   - Pizza background with overlay
   - "Buy 1 Get 1 50% off"

4. **FRESH SALAD** (Image Top)
   - Salad image
   - "Healthy Choice Collection"

5. **SWEET TREATS** (Background Image)
   - Dessert background with overlay
   - "Desserts up to 40% off"

6. **COOL REFRESHMENTS** (Image Top)
   - Drink image
   - "Any drink - Buy 2 Get 1 Free"

### 🎨 Visual Styling

**Image Quality:**
- Source: Unsplash professional photography
- Size: 500x500px minimum
- Format: High-quality JPG/WebP
- Fit: `object-cover` for consistent aspect ratios

**Text Styling:**
- **Title:** Bold (font-weight: 900), large (18-22px)
- **Subtitle:** Regular text, smaller (12-14px), 90% opacity
- **Colors:** Dark text on white cards, white text on dark overlays

**Hover Effects:**
- Scale up: `scale(1.05)`
- Smooth transition: 300ms
- Shadow enhancement for depth

**Accessibility:**
- Focus ring: 2px orange border
- Proper contrast ratios
- Alt text on images
- Keyboard navigable

### 🔧 Technical Implementation

**Files:** 
- `src/components/PromoBanner.tsx` (individual card)
- `src/components/PromoBanners.tsx` (grid container)

**PromoBanner Props:**
```typescript
interface PromoBannerProps {
  title: string;
  subtitle?: string;
  image: 'burger' | 'pizza' | 'chicken' | 'salad' | 'dessert' | 'drink' | 'category';
  bgColor?: string;
  textColor?: string;
  layout?: 'image-top' | 'image-background';
}
```

**Data Structure:**
```typescript
const banners = [
  {
    id: 'burger',
    title: 'BURGER SPECIAL',
    subtitle: '2 burgers for just $19.99',
    image: 'burger',
    layout: 'image-top',  // ← Controls layout
  },
  // ...
];
```

---

## 3️⃣ Integration with App

### 🔄 Updated App.tsx

**New Page Types:**
```typescript
type PageType = 'home' | 'offers' | 'cart' | 'profile' | 'login' | 'signup';
```

**Auth State:**
```typescript
const [isAuthenticated, setIsAuthenticated] = useState(false);
const [userName, setUserName] = useState('');
```

**Conditional Rendering:**
- Show LoginSignUp when not authenticated
- Hide header/nav when not authenticated
- Hide bottom nav when on login/signup
- Display userName in Profile after login

### 🎫 Navigation Flow

```
App Load
  ├─ User in localStorage?
  │  ├─ YES → Set authenticated + show Menu
  │  └─ NO → Show Sign Up page
  │
Unauthenticated User
  ├─ Show LoginSignUp component
  ├─ Header: Hidden
  └─ Nav: Hidden
  │
Sign Up Flow
  ├─ Fill form + submit
  ├─ Save to localStorage
  ├─ Set authenticated = true
  └─ Redirect to Menu
  │
Authenticated User
  ├─ Show header (Menu, Offers, Profile, Cart)
  ├─ Show bottom nav (mobile only)
  ├─ Access all pages
  └─ Profile shows userName
  │
Logout
  ├─ Clear localStorage
  ├─ Set authenticated = false
  └─ Show Sign Up page again
```

---

## 4️⃣ Responsive Design

### 📱 Mobile (< 768px)

**Login Page:**
- Full screen
- Header image: 256px
- Centered form (max-width: 448px)
- Logo: 96px
- Bottom nav: Hidden
- Top header: Hidden

**Offers Page:**
- Single column grid
- Full-width cards (16px padding)
- Image height: 160px
- Spacing: 20px gap

### 💻 Desktop (≥ 1024px)

**Login Page:**
- Centered card layout
- Header image: 384px
- Logo: 112px
- Form max-width: 448px
- Plenty of white space

**Offers Page:**
- 3-column grid
- Image height: 224px
- Spacing: 32px gap
- Hover effects active

---

## 5️⃣ Testing Checklist

### Login/Sign-Up Testing

- [ ] Mobile view (320px)
  - [ ] Header image displays correctly
  - [ ] Logo badge is centered
  - [ ] Form fields are readable
  - [ ] Button is thumb-friendly (44px+)
  - [ ] Sign In/Up toggle works

- [ ] Tablet view (768px)
  - [ ] Header image scaled properly
  - [ ] Logo size increased
  - [ ] Form still centered
  - [ ] No layout issues

- [ ] Desktop view (1024px+)
  - [ ] Full design visible
  - [ ] Proper spacing
  - [ ] Hover states work

- [ ] Functionality
  - [ ] Form validation works
  - [ ] Data saved to localStorage
  - [ ] Navigation to Menu after auth
  - [ ] Toggle between Sign In/Up
  - [ ] Logout clears data and shows Sign Up
  - [ ] Page refresh persists auth state

### Special Offers Testing

- [ ] Mobile (1 column)
  - [ ] Single card per row
  - [ ] Images load
  - [ ] Text readable
  - [ ] Tap detection works

- [ ] Tablet (2 columns)
  - [ ] 2 cards side-by-side
  - [ ] Proper spacing
  - [ ] Images scale correctly

- [ ] Desktop (3 columns)
  - [ ] 3 cards per row
  - [ ] Hover effects work
  - [ ] Shadow on interaction

- [ ] Visual
  - [ ] Squircle corners visible
  - [ ] Images have proper contrast
  - [ ] Text overlay readable (if background image)
  - [ ] "Learn More" CTA visible

---

## 6️⃣ Browser Storage (localStorage)

### User Data Format

```json
{
  "user": {
    "fullName": "John Doe",
    "email": "john@example.com"
  }
}
```

### Clearing Data

**In Browser DevTools:**
- Open DevTools (F12)
- Go to Application tab
- Find localStorage
- Delete the "user" entry
- Automatic: Happens on Logout

---

## 7️⃣ Future Enhancements

### Potential Additions

1. **Email Verification**
   - OTP sent to email
   - Confirmation page

2. **Social Login**
   - Google/Facebook sign-in
   - Faster onboarding

3. **Password Recovery**
   - "Forgot Password" link
   - Email reset flow

4. **User Preferences**
   - Save dietary restrictions
   - Favorite restaurants
   - Delivery address

5. **Promotional Tracking**
   - Click analytics on offers
   - Personalized recommendations
   - Expiration dates on offers

6. **Backend Integration**
   - Replace localStorage with API
   - Real authentication
   - Persistent user accounts
   - Order history

---

## 8️⃣ File Structure

```
src/
├── components/
│   ├── LoginSignUp.tsx          ← NEW: Auth interface
│   ├── PromoBanner.tsx          ← UPDATED: Squircle design
│   ├── PromoBanners.tsx         ← UPDATED: New layout
│   ├── HomeScreen.tsx           (unchanged)
│   ├── CartScreen.tsx           (unchanged)
│   ├── ProductDetailPage.tsx    (unchanged)
│   ├── BottomNav.tsx            (unchanged)
│   ├── FoodCard.tsx             (unchanged)
│   ├── ImagePlaceholder.tsx     (unchanged)
│   ├── RatingStars.tsx          (unchanged)
│   ├── Badge.tsx                (unchanged)
│   └── QuantitySelector.tsx     (unchanged)
├── App.tsx                       ← UPDATED: Auth flow + navigation
├── main.tsx                      (unchanged)
└── main.css                      (unchanged)
```

---

## 9️⃣ Key Features Summary

✅ **Professional LoginSignUp Page**
- Beautiful header with food image
- Overlapping circular logo
- Clean form with minimal borders
- Easy toggle between Sign Up/Sign In
- localStorage persistence

✅ **Redesigned Offers**
- Squircle card shape (smooth rounded corners)
- Two layout options (image top, full background)
- Professional Unsplash images
- Responsive grid (1→2→3 columns)
- Hover animations and scale effects

✅ **Authentication Flow**
- Automatic persistence on page load
- Conditional page rendering
- Protected pages (requires login)
- Logout functionality
- Demo-friendly (no backend required)

✅ **Fully Responsive**
- Mobile: Optimized touch targets
- Tablet: Balanced grid layout
- Desktop: Full features with hover effects

✅ **Collection-Only Model**
- No delivery references maintained
- Clean order pickup focus
- Professional appearance

---

## 🚀 Getting Started

### Live Demo
```bash
http://localhost:5174
```

### First Time
1. App opens to Sign Up page
2. Fill in any email/password
3. Click "Sign Up"
4. Access Menu, Offers, Cart, Profile
5. Click "Logout" in Profile to test again

### Development

**View Components:**
- LoginSignUp.tsx - Lines 1-168
- PromoBanner.tsx - Lines 1-110
- PromoBanners.tsx - Lines 1-85
- App.tsx - Updated with auth flow

**Modify Offers:**
Edit `PromoBanners.tsx` `banners` array to add/change promotions

**Change Logo:**
Edit `LoginSignUp.tsx` logo emoji (currently 🍕)

**Customize Colors:**
Edit Tailwind classes throughout components

---

## 📋 Production Checklist

Before deploying:

- [ ] Test all authentication flows
- [ ] Verify offers display correctly
- [ ] Check responsive layouts on real devices
- [ ] Test localStorage clear/reset
- [ ] Validate all form fields
- [ ] Test button states (hover, active, focus)
- [ ] Check accessibility (contrast, keyboard nav)
- [ ] Performance test (images loading)
- [ ] Cross-browser testing (Chrome, Safari, Firefox)
- [ ] Mobile device testing (iOS, Android)

---

**Last Updated:** March 23, 2026  
**Status:** ✅ Complete & Ready for Testing
