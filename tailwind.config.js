/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: '#070B14',
          navy: '#0B1220',
          surface: '#0F1829',
          blue: '#2563EB',
          cyan: '#06B6D4',
          white: '#FFFFFF',
          secondary: '#A1AAB8',
          muted: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
        'glow-radial': 'radial-gradient(circle at center, rgba(37, 99, 235, 0.18) 0%, rgba(6, 182, 212, 0.05) 45%, transparent 70%)',
      },
      boxShadow: {
        'glow-blue': '0 0 35px -5px rgba(37, 99, 235, 0.35)',
        'glow-cyan': '0 0 35px -5px rgba(6, 182, 212, 0.3)',
        'glass': '0 20px 50px rgba(0, 0, 0, 0.45), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
      }
    },
  },
  plugins: [],
}
