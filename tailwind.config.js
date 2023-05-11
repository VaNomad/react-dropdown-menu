/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        beetleYellow:
          "url('https://images.unsplash.com/photo-1565520651265-1148c3b277f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80')",
        beetleBlue:
          "url('https://images.unsplash.com/photo-1531850959096-cfbb6f26c5a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dnclMjBiZWV0bGV8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60')",
        beetleCamping:
          "url('https://images.unsplash.com/photo-1472806679307-eab7abd1eb32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHZ3JTIwYmVldGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60')",
        beetleBeauty:
          "url('https://images.unsplash.com/photo-1633683536118-ed815cd3dd17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA0fHx2dyUyMGJlZXRsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60')",
        beetleLife:
          "url('https://images.unsplash.com/photo-1603208226824-8b1f8537f57f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQzfHx2dyUyMGJlZXRsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60')",
        myAvatar: "url('./src/assets/CIMG0065.jpg')",
      },
    },
  },
  plugins: [],
};
