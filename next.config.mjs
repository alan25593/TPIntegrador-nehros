/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  basePath: '', 
  trailingSlash: false,
  experimental: {
    optimizeCss: true, 
    outputFileTracing: true,
  },
};

export default nextConfig;
