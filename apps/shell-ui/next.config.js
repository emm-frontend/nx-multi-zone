/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: '/accounting/:path*', destination: 'http://localhost:3001/:path*' },
      { source: '/hr/:path*', destination: 'http://localhost:3002/:path*' },
      { source: '/crm/:path*', destination: 'http://localhost:3003/:path*' }
    ];
  }
};

module.exports = nextConfig;
