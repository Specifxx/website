import type { NextConfig } from "next";

// Derive the correct base path and canonical URL from the GitHub repository
// name, so the site works whether it's deployed as a project page
// (<user>.github.io/<repo>) or a user page (<user>.github.io) — including
// after a username or repo rename. No manual config changes required.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const ghRepository = process.env.GITHUB_REPOSITORY; // "owner/repo" on GitHub Actions

function resolveDeployment() {
  if (!ghRepository) {
    return { basePath: "", siteUrl: "http://localhost:3000" };
  }
  const [owner, repo] = ghRepository.split("/");
  const host = `${owner.toLowerCase()}.github.io`;
  const isUserPage = repo.toLowerCase() === host;
  return {
    basePath: isUserPage ? "" : `/${repo}`,
    siteUrl: isUserPage ? `https://${host}` : `https://${host}/${repo}`,
  };
}

const { basePath, siteUrl } = resolveDeployment();

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isGithubPages ? basePath : "",
  assetPrefix: isGithubPages && basePath ? `${basePath}/` : "",
  env: {
    NEXT_PUBLIC_SITE_URL: siteUrl,
  },
};

export default nextConfig;
