/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Local assets under /public are optimized automatically.
    // When you add remote images (CDN), whitelist domains here:
    // remotePatterns: [{ protocol: 'https', hostname: 'cdn.crchi.com.br' }],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
