/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    require('@headlessui/tailwindcss')({prefix: 'ui'})
  ],
}

