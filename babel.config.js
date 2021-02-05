module.exports = {
  presets: ['env', 'react', '@babel/preset-react'],
  plugins: [
    ['babel-plugin-styled-components', { ssr: false, displayName: true }],
  ],
};
