/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  },
  reactStrictMode: true,
  transpilePackages: ["@vizatly/ui"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  }
};

export default nextConfig;
