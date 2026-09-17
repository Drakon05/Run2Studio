import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/Run2Studio" : "",
  assetPrefix: isProd ? "/Run2Studio/" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/Run2Studio" : "",
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
