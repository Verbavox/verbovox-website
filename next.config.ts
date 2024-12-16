import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/verbovox-website' : '',
  basePath: isProd ? '/verbovox-website' : '',
  output: 'export'
};

export default nextConfig;
