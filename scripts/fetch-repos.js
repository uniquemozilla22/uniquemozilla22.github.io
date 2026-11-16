#!/usr/bin/env node
const fs = require("fs");
const https = require("https");
const path = require("path");

const USER = "uniquemozilla22";
const root = path.join(__dirname, "..");
const overridesPath = path.join(root, "src/data/repo-descriptions.json");
const outPath = path.join(root, "src/data/repos.json");

function get(url) {
  return new Promise((resolve, reject) => {
    const headers = {
      "User-Agent": "portfolio-repo-sync",
      Accept: "application/vnd.github+json",
    };
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = "Bearer " + process.env.GITHUB_TOKEN;
    }
    https
      .get(url, { headers }, (res) => {
        let body = "";
        res.on("data", (chunk) => {
          body += chunk;
        });
        res.on("end", () => {
          if (res.statusCode < 200 || res.statusCode >= 300) {
            reject(new Error(res.statusCode + " " + body.slice(0, 200)));
            return;
          }
          resolve(JSON.parse(body));
        });
      })
      .on("error", reject);
  });
}

async function main() {
  const overrides = JSON.parse(fs.readFileSync(overridesPath, "utf8"));
  const repos = [];
  let page = 1;
  while (true) {
    const batch = await get(
      "https://api.github.com/users/" +
        USER +
        "/repos?per_page=100&page=" +
        page +
        "&type=owner"
    );
    repos.push(...batch);
    if (batch.length < 100) break;
    page += 1;
  }

  const records = repos
    .filter((repo) => !repo.private)
    .map((repo) => {
      const override = overrides[repo.name];
      const githubDescription = (repo.description || "").trim();
      let description = githubDescription;
      let descriptionSource = "github";
      if (override) {
        description = override.description;
        descriptionSource = override.source;
      } else if (!githubDescription) {
        description = "Empty repository";
        descriptionSource = "empty";
      }
      return {
        name: repo.name,
        url: repo.html_url,
        description,
        descriptionSource,
        language: repo.language,
        updatedAt: repo.updated_at,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        fork: repo.fork,
      };
    })
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));

  fs.writeFileSync(outPath, JSON.stringify(records, null, 2) + "\n");
  const counts = {};
  records.forEach((record) => {
    counts[record.descriptionSource] = (counts[record.descriptionSource] || 0) + 1;
  });
  console.log("Wrote " + records.length + " public repos to src/data/repos.json");
  console.log(counts);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
