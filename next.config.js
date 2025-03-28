/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['localhost', 'your-supabase-project.supabase.co'],
  },
};

module.exports = nextConfig;
