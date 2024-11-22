/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'localhost', 'res.cloudinary.com'],
    unoptimized: true
  },
  env: {
    STRAPI_API_URL: process.env.STRAPI_API_URL,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
  },
  async redirects() {
    return [
      {
        source: '/www.ruanpiscitelli.com',
        destination: 'https://ruanpiscitelli.com',
        permanent: true,
      },
      {
        source: '/www.ruanpiscitelli.com/:path*',
        destination: 'https://ruanpiscitelli.com/:path*',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;