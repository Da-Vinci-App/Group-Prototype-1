import React, { useState } from 'react';
import HomeScreen from './components/HomeScreen';
import ProductDetailPage from './components/ProductDetailPage';
import CartScreen from './components/CartScreen';
import PromoBanners from './components/PromoBanners';
import BottomNav from './components/BottomNav';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showProductDetail, setShowProductDetail] = useState(false);

  const handleAddToCart = (item: any) => {
    console.log('Added to cart:', item);
  };

  const handleCheckout = () => {
    alert('Proceeding to checkout...');
  };

  const handleBannerClick = (bannerId: string) => {
    alert(`Promo ${bannerId} clicked!`);
  };

  return (
    <div className="app min-h-screen overflow-x-hidden">
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto p-8">
          <h1 className="text-4xl font-black text-text-primary mb-8">Food Delivery App UI</h1>
          <div className="grid grid-cols-3 gap-8">
            {/* Left Panel - Product Detail */}
            <div className="lg:col-span-1 rounded-3xl overflow-hidden shadow-card bg-white h-screen overflow-y-auto">
              <ProductDetailPage onAddToCart={handleAddToCart} />
            </div>

            {/* Center Panel - Home / Browse */}
            <div className="lg:col-span-1 rounded-3xl overflow-hidden shadow-card bg-white h-screen overflow-y-auto">
              <HomeScreen onAddToCart={handleAddToCart} />
            </div>

            {/* Right Panel - Promo Banners */}
            <div className="lg:col-span-1 rounded-3xl overflow-hidden shadow-card bg-white h-screen overflow-y-auto">
              <PromoBanners onBannerClick={handleBannerClick} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="relative h-screen flex flex-col max-w-md mx-auto">
          {/* Content Area */}
          <div className="flex-1 overflow-y-auto">
            {activeTab === 'home' && <HomeScreen onAddToCart={handleAddToCart} />}
            {activeTab === 'search' && <PromoBanners onBannerClick={handleBannerClick} />}
            {activeTab === 'cart' && <CartScreen onCheckout={handleCheckout} />}
            {activeTab === 'profile' && (
              <div className="pb-32 px-4 py-8">
                <div className="card-base p-8 text-center">
                  <div className="text-6xl mb-4">👤</div>
                  <h2 className="text-2xl font-bold text-text-primary mb-4">Your Profile</h2>
                  <p className="text-text-secondary mb-6">John Doe</p>
                  <button className="btn-primary w-full mb-3">My Orders</button>
                  <button className="btn-secondary w-full mb-3">Saved Addresses</button>
                  <button className="btn-secondary w-full">Settings</button>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Navigation */}
          <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
      </div>
    </div>
  );
}
