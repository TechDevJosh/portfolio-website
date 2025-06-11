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
    ],
  },
  webpack(config) {
    config.resolve.alias['@'] = new URL('.', import.meta.url).pathname;
    return config;
  },
};

export default nextConfig;
