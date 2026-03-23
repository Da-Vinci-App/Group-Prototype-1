/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Orange Palette
        orange: {
          500: '#FF8A00',    // Primary Orange - Buttons, links, highlights
          600: '#E67E00',    // Primary Dark - Hover states
          300: '#FFB84D',    // Primary Light - Secondary accents
        },
        // Yellow
        yellow: {
          400: '#FFC107',    // Secondary Yellow - Accent elements
        },
        // Green
        green: {
          500: '#4CAF50',    // Accent Green - Success states, discounts
        },
        // Grays
        gray: {
          100: '#F9FAFB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
        },
        // Slate
        slate: {
          900: '#0F172A',    // Text Primary - Main text
          500: '#64748B',    // Text Secondary - Secondary text
        },
        // Neutral
        neutral: {
          50: '#F5F5F5',     // Neutral - Card backgrounds
        },
        // Custom utility colors
        'text-primary': '#0F172A',
        'text-secondary': '#64748B',
        'bg-neutral': '#F5F5F5',
      },
      spacing: {
        15: '3.75rem',
      },
      fontSize: {
        xs: ['12px', { lineHeight: '16px' }],
        sm: ['13px', { lineHeight: '20px' }],
        base: ['14px', { lineHeight: '22px' }],
        lg: ['16px', { lineHeight: '24px' }],
        xl: ['18px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['28px', { lineHeight: '36px' }],
      },
      boxShadow: {
        sm: '0 2px 8px rgba(0, 0, 0, 0.08)',
        md: '0 4px 16px rgba(0, 0, 0, 0.12)',
        lg: '0 8px 32px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        lg: '10px',
        xl: '16px',
        '2xl': '20px',
      },
      animation: {
        slideInUp: 'slideInUp 0.5s ease-out',
      },
      keyframes: {
        slideInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}
