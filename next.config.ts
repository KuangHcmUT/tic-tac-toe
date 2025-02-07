import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactStrictMode: true,
    experimental: {
        appDir: true, // If using the App Router
    },
};

export default nextConfig;
