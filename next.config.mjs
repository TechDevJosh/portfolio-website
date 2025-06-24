/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
    domains: ['cdn.jsdelivr.net'],
  },
};

// Add this function outside the nextConfig object
export async function redirects() {
  return [
    {
      source: '/',
      has: [{ type: 'host', value: 'weblitzstack.com' }],
      destination: 'https://www.weblitzstack.com',
      permanent: true,
    },
  ];
}

export default nextConfig;
