import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: "export",
  // Hay un package-lock.json suelto en C:\Users\kondr que confunde a Next
  // al inferir la raiz del workspace. Se la fijamos a mano.
  outputFileTracingRoot: path.join(process.cwd()),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
