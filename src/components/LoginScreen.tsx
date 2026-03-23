import React, { useState } from 'react'

interface FormState {
  email: string
  password: string
}

interface LoginScreenProps {
  onSignUpClick?: () => void
}

export default function LoginScreen({ onSignUpClick }: LoginScreenProps) {
  const [formData, setFormData] = useState<FormState>({
    email: 'adrian@jsmastery.com',
    password: '',
  })

  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Login attempt:', formData)
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white">
      {/* Left Section - Food Image (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=600&h=800&fit=crop"
          alt="Restaurant food"
          className="w-full h-full object-cover"
        />
        {/* Orange Overlay - Primary Orange */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/70 to-orange-500/50"></div>
        {/* Image Content */}
        <div className="absolute bottom-10 left-10 right-10 text-white">
          <h2 className="text-3xl font-bold mb-3 leading-tight">Experience Premium Dining</h2>
          <p className="text-base opacity-95">At Yeovil College Restaurant</p>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="flex-1 flex items-center justify-center px-5 py-8 lg:px-0 lg:w-1/2 overflow-y-auto bg-white">
        {/* Form Card - Neutral Background */}
        <div className="w-full max-w-md bg-neutral-50 rounded-2xl shadow-md p-8 lg:p-12">
          {/* Logo and Branding */}
          <div className="text-center mb-8">
            {/* Logo - Primary Orange to Secondary Yellow gradient */}
            <div className="w-15 h-15 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
              <span className="text-2xl font-bold text-white">YC</span>
            </div>
            {/* College Name - Primary Orange */}
            <h3 className="text-base font-bold text-orange-500 mb-1 tracking-wide">Yeovil College</h3>
            {/* Subtitle - Text Secondary */}
            <p className="text-sm text-slate-500 font-medium">Restaurant Services</p>
          </div>

          {/* Welcome Message */}
          <div className="mb-8 text-center">
            {/* Main Title - Text Primary */}
            <h1 className="text-3xl lg:text-2xl font-bold text-slate-900 mb-2">Welcome Back</h1>
            {/* Subtitle - Text Secondary */}
            <p className="text-sm text-slate-500 font-normal">Login to Yeovil College Restaurant</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="mb-6">
            {/* Email Field */}
            <div className="mb-5">
              {/* Label - Text Primary */}
              <label htmlFor="email" className="block text-xs font-semibold text-slate-900 mb-2 tracking-widest">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 text-sm border-2 border-gray-300 rounded-lg transition-all duration-300 bg-white placeholder-slate-500 text-slate-900 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 hover:border-yellow-400"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Field */}
            <div className="mb-5">
              {/* Label - Text Primary */}
              <label htmlFor="password" className="block text-xs font-semibold text-slate-900 mb-2 tracking-widest">
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm border-2 border-gray-300 rounded-lg transition-all duration-300 bg-white placeholder-slate-500 text-slate-900 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 hover:border-yellow-400"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 text-slate-500 hover:text-orange-500 transition-colors duration-200"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            {/* Forgot Password Link - Primary Orange, Primary Dark on hover */}
            <div className="mb-6 text-right">
              <a href="#forgot" className="text-xs font-semibold text-orange-500 hover:text-orange-600 transition-colors duration-200">
                Forgot Password?
              </a>
            </div>

            {/* Login Button - Primary Orange to Secondary Yellow gradient */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold text-sm uppercase tracking-wide rounded-lg shadow-sm hover:shadow-md hover:from-orange-600 hover:to-yellow-500 active:shadow-sm hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              Login
            </button>
          </form>

          {/* Sign Up Link - Primary Orange, Primary Dark on hover */}
          <div className="text-center mb-6">
            <p className="text-sm text-slate-500">
              Don't have an account?{' '}
              <button
                onClick={onSignUpClick}
                className="font-semibold text-orange-500 hover:text-orange-600 transition-colors duration-200 bg-none border-none cursor-pointer p-0"
              >
                Sign Up
              </button>
            </p>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-300 pt-4 text-center">
            {/* Footer text - Text Secondary */}
            <p className="text-xs text-slate-500">© 2024 Yeovil College. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
