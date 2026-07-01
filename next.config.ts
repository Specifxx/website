import type { NextConfig } from "next";
import fs from "node:fs";
import path from "node:path";

// Derive the correct base path and canonical URL automatically:
// - If public/CNAME declares a custom domain, that domain always serves
//   from the root, regardless of the repo name.
// - Otherwise fall back to GitHub's default project/user page rules
//   (<user>.github.io/<repo> vs <user>.github.io) — including after a
//   username or repo rename. No manual config changes required either way.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const ghRepository = process.env.GITHUB_REPOSITORY; // "owner/repo" on GitHub Actions

function resolveDeployment() {
  const cnamePath = path.join(process.cwd(), "public", "CNAME");
  const customDomain = fs.existsSync(cnamePath)
    ? fs.readFileSync(cnamePath, "utf8").trim()
    : "";
  if (customDomain) {
    return { basePath: "", siteUrl: `https://${customDomain}` };
  }

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
