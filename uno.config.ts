import { defineConfig } from 'unocss'

export default defineConfig({
  theme: {
      colors: {
        'nxyz-orange': '#FF6700',
        'nxyz-black': '#000000',
        'nxyz-blue': '#0000FF',
        'nxyz-green': '#008000',
        'nxyz-red': '#A31515',
        'nxyz-yellow': '#F9C80E',
    },
  },
  shortcuts: {
    // Styling of element: Bar at the bottom of the slide
    'bg-barBottom': 'bg-black text-gray-50 dark:(bg-black text-gray-50)',
  },
})
