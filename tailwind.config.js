/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        whiteButton:
          "url('https://www.farmersalmanac.com/wp-content/uploads/2021/11/button-mushrooms_as105282404-950x633.jpeg')",
        crimini:
          "url('https://www.farmersalmanac.com/wp-content/uploads/2021/11/cremini-mushrooms_as190119810-950x633.jpeg')",
        shiitake:
          "url('https://www.farmersalmanac.com/wp-content/uploads/2021/11/shiitake-mushrooms-as197629491-950x634.jpeg')",
        enoki:
          "url('https://images.pexels.com/photos/5987623/pexels-photo-5987623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        beetleLife:
          "url('https://images.unsplash.com/photo-1603208226824-8b1f8537f57f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQzfHx2dyUyMGJlZXRsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60')",
        myAvatar: "url('./src/assets/CIMG0065.jpg')",
      },
    },
  },
  plugins: [],
};
