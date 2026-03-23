import React, { useState, useEffect } from 'react';
import HomeScreen from './components/HomeScreen';
import ProductDetailPage from './components/ProductDetailPage';
import CartScreen from './components/CartScreen';
import PromoBanners from './components/PromoBanners';
import BottomNav from './components/BottomNav';
import { LoginSignUp } from './components/LoginSignUp';

type PageType = 'home' | 'offers' | 'cart' | 'profile' | 'login' | 'signup';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [cartCount, setCartCount] = useState(3);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');

  // Check if user is already logged in on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      const user = JSON.parse(savedUser);
      setIsAuthenticated(true);
      setUserName(user.fullName || user.email);
    }
  }, []);

  // Redirect to home if user logs in
  const handleAuthChange = (authenticated: boolean) => {
    setIsAuthenticated(authenticated);
    if (authenticated) {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        const user = JSON.parse(savedUser);
        setUserName(user.fullName || user.email);
      }
      setCurrentPage('home');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUserName('');
    setCurrentPage('login');
  };

  const handleAddToCart = (item: any) => {
    console.log('Added to cart:', item);
    setCartCount((prev) => prev + item.quantity || 1);
  };

  const handleCheckout = () => {
    alert('Ready for collection! Your order will be prepared shortly.');
  };

  const handleBannerClick = (bannerId: string) => {
    alert(`Promotion ${bannerId} applied!`);
  };

  const renderPage = () => {
    // Show login/signup if not authenticated
    if (!isAuthenticated && (currentPage === 'login' || currentPage === 'signup')) {
      return <LoginSignUp onAuthChange={handleAuthChange} initialMode={currentPage} />;
    }

    // Redirect to login if trying to access authenticated pages without login
    if (!isAuthenticated) {
      return <LoginSignUp onAuthChange={handleAuthChange} initialMode="signup" />;
    }

    // Render authenticated pages
    switch (currentPage) {
      case 'home':
        return <HomeScreen onAddToCart={handleAddToCart} />;
      case 'offers':
        return <PromoBanners onBannerClick={handleBannerClick} />;
      case 'cart':
        return <CartScreen onCheckout={handleCheckout} />;
      case 'profile':
        return (
          <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-6 pb-32 md:pb-8">
            <div className="card-base p-8 md:p-12 text-center max-w-md mx-auto md:mx-0">
              <div className="text-6xl md:text-8xl mb-4 md:mb-6">◯</div>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2 md:mb-4">Your Profile</h2>
              <p className="text-base md:text-lg text-text-secondary mb-6 md:mb-8">{userName}</p>
              <button className="btn-primary w-full mb-3 md:mb-4">My Orders</button>
              <button className="btn-secondary w-full mb-3 md:mb-4">Saved Addresses</button>
              <button className="btn-secondary w-full mb-3 md:mb-4">Settings</button>
              <button onClick={handleLogout} className="btn-secondary w-full">Logout</button>
            </div>
          </div>
        );
      default:
        return <HomeScreen onAddToCart={handleAddToCart} />;
    }
  };

  return (
    <div className="app min-h-screen bg-neutral-light overflow-x-hidden">
      {/* Header Navigation - Only visible when authenticated */}
      {isAuthenticated && (
        <header className="bg-white shadow-subtle sticky top-0 z-30">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex items-center justify-between py-3 md:py-4">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <div className="text-2xl md:text-3xl font-black text-primary">🍔</div>
                <h1 className="text-lg md:text-2xl font-black text-text-primary">FoodCollect</h1>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-2 lg:gap-4">
                <button
                  onClick={() => setCurrentPage('home')}
                  className={`px-4 lg:px-6 py-2 rounded-xl font-semibold transition-all duration-200 text-sm lg:text-base ${
                    currentPage === 'home'
                      ? 'bg-primary text-white'
                      : 'bg-neutral hover:bg-gray-100 text-text-primary'
                  }`}
                >
                  Menu
                </button>
                <button
                  onClick={() => setCurrentPage('offers')}
                  className={`px-4 lg:px-6 py-2 rounded-xl font-semibold transition-all duration-200 text-sm lg:text-base ${
                    currentPage === 'offers'
                      ? 'bg-primary text-white'
                      : 'bg-neutral hover:bg-gray-100 text-text-primary'
                  }`}
                >
                  Offers
                </button>
                <button
                  onClick={() => setCurrentPage('profile')}
                  className={`px-4 lg:px-6 py-2 rounded-xl font-semibold transition-all duration-200 text-sm lg:text-base ${
                    currentPage === 'profile'
                      ? 'bg-primary text-white'
                      : 'bg-neutral hover:bg-gray-100 text-text-primary'
                  }`}
                >
                  Profile
                </button>
              </nav>

              {/* Cart Button */}
              <button
                onClick={() => setCurrentPage('cart')}
                className={`relative px-3 md:px-4 lg:px-6 py-2 rounded-xl font-semibold transition-all duration-200 text-sm lg:text-base ${
                  currentPage === 'cart'
                    ? 'bg-primary text-white'
                    : 'bg-neutral hover:bg-gray-100 text-text-primary'
                }`}
              >
                ◇ Cart
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </header>
      )}

      {/* Page Content */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* Mobile Bottom Navigation - Only visible when authenticated */}
      {isAuthenticated && (
        <BottomNav activeTab={currentPage} onTabChange={(tab) => setCurrentPage(tab as PageType)} />
      )}
    </div>
  );
}
