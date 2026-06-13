import type { NextConfig } from "next";

// When building for GitHub Pages we emit a fully static site under /website
// (the repository name), since project pages are served from a sub-path.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repo = "website";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isGithubPages ? `/${repo}` : "",
  assetPrefix: isGithubPages ? `/${repo}/` : "",
};

export default nextConfig;
