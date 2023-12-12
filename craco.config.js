const path = require('path');

module.exports = {
  babel: {
    presets: [],
    plugins: [],
  },
  eslint: {
    enable: false,
  },
  typescript: {
    enableTypeChecking: true,
  },
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  webpack: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
    },
  },
};
