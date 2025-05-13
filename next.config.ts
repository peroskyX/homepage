// next.config.js
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['api.placeholder.com'], // Add your image domains here
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
  // Enable sitemap and robots.txt
  poweredByHeader: false,
};
