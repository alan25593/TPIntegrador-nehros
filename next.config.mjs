/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", 
  basePath: '/',
  experimental: {
    appDir: true, 
  },
};

export default nextConfig;
