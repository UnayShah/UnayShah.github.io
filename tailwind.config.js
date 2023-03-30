/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'instagram-background': "url('/icons/instagram/instagram_rgb_background.svg')",
        'fb-grey-background': "url('/icons/facebook/fb_grey.svg')",
        'fb-rgb-background': "url('/icons/facebook/fb_rgb.svg')",
      }
    },
  },
  plugins: [],
}