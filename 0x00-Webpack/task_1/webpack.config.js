const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js', // Path to your main JavaScript file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  mode: 'production',
};
