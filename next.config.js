/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

// const nextConfig = {
//   reactStrictMode: true,
//    eslint: {
//     ignoreDuringBuilds: true,
//   },
// }

// module.exports = nextConfig

module.exports = nextConfig;
