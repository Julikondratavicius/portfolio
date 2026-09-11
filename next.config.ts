import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Hay un package-lock.json suelto en C:\Users\kondr que confunde a Next
  // al inferir la raiz del workspace. Se la fijamos a mano.
  outputFileTracingRoot: path.join(process.cwd()),
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // La raiz entra siempre en espanol; /en queda como alterna.
      { source: "/", destination: "/es", permanent: false },
    ];
  },
};

export default nextConfig;
