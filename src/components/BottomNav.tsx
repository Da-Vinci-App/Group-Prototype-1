import React from 'react';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'home', label: 'Menu', icon: '≡' },
    { id: 'search', label: 'Offers', icon: '★' },
    { id: 'cart', label: 'Cart', icon: '◇' },
    { id: 'profile', label: 'Profile', icon: '◯' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl border-t border-gray-100 md:hidden">
      <div className="max-w-full px-0 py-2">
        <div className="flex justify-around items-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-200 flex-1 ${
                activeTab === tab.id
                  ? 'text-primary bg-primary bg-opacity-10'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <span className="text-xl font-bold">{tab.icon}</span>
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
