import type { Config } from 'tailwindcss';
export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { bg: '#F8F7F4', text: '#1F2933', muted: '#6B7280', card: '#FFFFFF', border: '#E5E7EB', accent: '#3B82F6' }
    }
  },
  plugins: []
} satisfies Config;
