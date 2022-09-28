/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

loaders: [
  { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
]
}

module.exports = nextConfig


// module.exports = {
//   webpack(config, options) {
//       config.module.rules.push({
//         test: /\.svg$/,
//         use: ['@svgr/webpack', 'url-loader'],
//       });
      
  
//       return config;
//   },
// };