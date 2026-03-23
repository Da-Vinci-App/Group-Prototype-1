import React, { useState } from 'react'

interface SignUpFormState {
  fullName: string
  email: string
  password: string
}

interface SignUpScreenProps {
  onSignInClick?: () => void
}

export default function SignUpScreen({ onSignInClick }: SignUpScreenProps) {
  const [formData, setFormData] = useState<SignUpFormState>({
    fullName: '',
    email: '',
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
    console.log('Sign up attempt:', formData)
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Food Image Section - Top of screen */}
      <div className="relative w-full h-64 lg:hidden overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=300&fit=crop"
          alt="Restaurant food"
          className="w-full h-full object-cover"
        />
        {/* Orange Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/50 to-orange-500/30"></div>
      </div>

      {/* Form Section */}
      <div className="flex-1 flex items-start lg:items-center justify-center px-5 py-8 lg:py-0 overflow-y-auto">
        <div className="w-full max-w-md">
          {/* Logo Section */}
          <div className="text-center mb-8">
            {/* Logo Badge */}
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md border-4 border-white">
              <span className="text-3xl">🍽️</span>
            </div>
            {/* Heading - Text Primary */}
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-1">Create Account</h1>
            {/* Subheading - Text Secondary */}
            <p className="text-sm text-slate-500">Join Yeovil College Restaurant</p>
          </div>

          {/* Sign Up Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name Field */}
            <div>
              {/* Label - Text Primary */}
              <label htmlFor="fullName" className="block text-xs font-semibold text-slate-900 mb-2 tracking-widest">
                Full name
              </label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 text-sm border-b-2 border-gray-300 rounded-none bg-neutral-50 placeholder-slate-400 text-slate-900 transition-all duration-300 focus:outline-none focus:border-b-2 focus:border-orange-500 hover:border-b-2 hover:border-yellow-400"
                placeholder="Adrian"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              {/* Label - Text Primary */}
              <label htmlFor="email" className="block text-xs font-semibold text-slate-900 mb-2 tracking-widest">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 text-sm border-b-2 border-gray-300 rounded-none bg-neutral-50 placeholder-slate-400 text-slate-900 transition-all duration-300 focus:outline-none focus:border-b-2 focus:border-orange-500 hover:border-b-2 hover:border-yellow-400"
                placeholder="adrian@jsmastery.com"
                required
              />
            </div>

            {/* Password Field */}
            <div>
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
                  className="w-full px-4 py-3 text-sm border-b-2 border-gray-300 rounded-none bg-neutral-50 placeholder-slate-400 text-slate-900 transition-all duration-300 focus:outline-none focus:border-b-2 focus:border-orange-500 hover:border-b-2 hover:border-yellow-400"
                  placeholder="Password"
                  required
                />
                <button
                  type="button"
                  className="absolute right-0 text-slate-500 hover:text-orange-500 transition-colors duration-200 pb-1"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            {/* Sign Up Button - Primary Orange to Secondary Yellow gradient */}
            <button
              type="submit"
              className="w-full py-3 mt-8 bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold text-sm uppercase tracking-wide rounded-full shadow-md hover:shadow-lg hover:from-orange-600 hover:to-yellow-500 active:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              Sign Up
            </button>
          </form>

          {/* Sign In Link - Text Secondary with Primary Orange on hover */}
          <div className="text-center mt-6">
            <p className="text-sm text-slate-500">
              Already have an account?{' '}
              <button
                onClick={onSignInClick}
                className="font-semibold text-orange-500 hover:text-orange-600 transition-colors duration-200 bg-none border-none cursor-pointer p-0"
              >
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
