/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
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