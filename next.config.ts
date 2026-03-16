import { withSerwist } from "@serwist/turbopack";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
};

export default withSerwist(nextConfig);
