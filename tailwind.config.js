/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // أو 'media' إذا كنت تريد التفعيل بناءً على تفضيلات النظام
  theme: {
    colors: {
      'primary': '#BB936A',
      'secondary': '#324654',
      'secondaryDark':'#1F2937',
      'white': '#ffffff',
      'orange': '#FB923C',
      'silver': '#6e6e66',
      'blackMood': '#4b4a4a',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'red': '#ff0000',
    },
    fontFamily: {
     
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
}