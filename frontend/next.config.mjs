/** @type {import('next').NextConfig} */
const nextConfig = {
  // We use the `pages` router only; disable the `app` router.
  experimental: {
    appDir: false,
  },
  reactCompiler: true,
};

export default nextConfig;
