/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  images: {
    domains: [
      "mercedes-benz.kh.ua",
      "www.bmw.ua",
      "cf-cdn-v5.audi.at",
      "images.pexels.com",
      "www.chevrolet.ca",
      "www.ford.com",
      "toyotaassets.scene7.com",
      "hips.hearstapps.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
