/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['localhost', 'your-supabase-project.supabase.co', 'images.unsplash.com', 'randomuser.me'],
  },
};

module.exports = nextConfig;
