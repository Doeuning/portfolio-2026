import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  sassOptions: {
    loadPaths: [path.join(process.cwd(), "src/styles")],
    additionalData: `@use "variables" as v; @use "mixins" as m;`,
  },
};

export default nextConfig;
