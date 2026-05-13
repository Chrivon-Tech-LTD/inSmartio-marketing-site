import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 100],
    remotePatterns: [
      { protocol: "https", hostname: "i.pinimg.com" },
      { protocol: "https", hostname: "i.pravatar.cc" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "toppng.com" },
      { protocol: "https", hostname: "www.liblogo.com" },
      { protocol: "https", hostname: "www.chrivon.com" },
    ],
  },
};

export default nextConfig;