const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = {
  plugins: {
    tailwindcss: withMT({
        content: [
          "./src/**/*.{js,jsx,ts,tsx}",
        ],
        theme: {
          extend: {},
        },
        plugins: [],
      }),
    autoprefixer: {},
  }
}