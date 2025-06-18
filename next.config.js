/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = {
  output: 'export',
  // If your repo is not at the root domain, set the basePath and assetPrefix:
  // basePath: '/your-repo-name',
  // assetPrefix: '/your-repo-name/',
};
