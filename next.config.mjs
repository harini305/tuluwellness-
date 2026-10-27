/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Images are pre-sized locally (public/images); skip the Vercel optimization quota.
  images: { unoptimized: true },
  // Static assets rarely change, so browsers keep them instead of re-requesting them on every visit.
  async headers() {
    const cache = [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }];
    return [
      { source: '/images/:path*', headers: cache },
      { source: '/media/:path*', headers: cache },
    ];
  },
};

export default nextConfig;
