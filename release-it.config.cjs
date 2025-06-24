require("dotenv/config");

module.exports = {
  git: {
    commitMessage: "Release v${version}",
    tagName: "v${version}",
    requireCleanWorkingDir: true,
    requireBranch: "main",
    push: true,
  },
  github: {
    release: true,
  },
};
