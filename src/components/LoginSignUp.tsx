import React, { useState } from 'react';

interface LoginSignUpProps {
  onAuthChange: (isAuthenticated: boolean) => void;
  initialMode?: 'login' | 'signup';
}

export const LoginSignUp: React.FC<LoginSignUpProps> = ({ 
  onAuthChange, 
  initialMode = 'signup' 
}) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication - in production, this would call your API
    if (email && password && (mode === 'login' || fullName)) {
      localStorage.setItem('user', JSON.stringify({ fullName, email }));
      onAuthChange(true);
    }
  };

  const toggleMode = () => {
    setMode(mode === 'signup' ? 'login' : 'signup');
    setFullName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header Image Section - Top 40% */}
      <div className="relative w-full h-64 md:h-80 lg:h-96 bg-gradient-to-b from-orange-400 to-orange-300 overflow-hidden">
        {/* Pizza/Food Background Image */}
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=1000&h=600&fit=crop)',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>
        </div>

        {/* Circular Logo - Overlapping */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-0">
          <div className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full shadow-2xl flex items-center justify-center border-4 border-white">
            <span className="text-3xl md:text-4xl font-bold text-white">🍕</span>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full max-w-md mx-auto px-6 pt-20 pb-12 md:pt-24 md:pb-16">
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-2">
            {mode === 'signup' ? 'Create Account' : 'Welcome Back'}
          </h1>
          <p className="text-center text-gray-600 text-sm md:text-base">
            {mode === 'signup' 
              ? 'Join us for seamless food ordering' 
              : 'Sign in to your account'}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
          {/* Full Name Field - Only for Sign Up */}
          {mode === 'signup' && (
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="John Doe"
                className="w-full px-0 py-3 md:py-4 text-gray-900 placeholder-gray-400 border-b-2 border-gray-300 focus:border-orange-500 focus:outline-none transition-colors"
                required={mode === 'signup'}
              />
            </div>
          )}

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              className="w-full px-0 py-3 md:py-4 text-gray-900 placeholder-gray-400 border-b-2 border-gray-300 focus:border-orange-500 focus:outline-none transition-colors"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-0 py-3 md:py-4 text-gray-900 placeholder-gray-400 border-b-2 border-gray-300 focus:border-orange-500 focus:outline-none transition-colors"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-8 md:mt-10 py-4 md:py-5 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-bold text-lg md:text-xl rounded-full shadow-lg transition-all duration-200 transform"
          >
            {mode === 'signup' ? 'Sign Up' : 'Sign In'}
          </button>
        </form>

        {/* Toggle Link */}
        <div className="mt-8 md:mt-10 text-center">
          <p className="text-gray-600 text-sm md:text-base">
            {mode === 'signup' 
              ? 'Already have an account? ' 
              : 'Don\'t have an account? '}
            <button
              onClick={toggleMode}
              className="text-orange-500 hover:text-orange-600 font-semibold transition-colors"
            >
              {mode === 'signup' ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
        </div>

        {/* Demo Note */}
        <div className="mt-8 md:mt-12 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-xs md:text-sm text-blue-800">
            💡 Demo: Use any email/password to test. Account stored in browser.
          </p>
        </div>
      </div>
    </div>
  );
};
