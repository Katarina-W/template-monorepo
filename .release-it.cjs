const { execSync } = require("child_process");

function getCurrentBranch() {
  try {
    // 执行 Git 命令获取当前分支名
    const branch = execSync("git rev-parse --abbrev-ref HEAD")
      .toString()
      .trim();
    return branch;
  } catch (error) {
    console.error("Error getting current branch:", error);
    return null;
  }
}

const branch = getCurrentBranch();
console.log("Current Branch:", branch);

/** @type {import('release-it').Config} */
module.exports = {
  github: {
    release: true,
    preRelease: branch !== "master"
  },
  git: {
    commitMessage: "chore(release): ${version} [skip ci]"
  },
  npm: false,
  hooks: {
    "before:bump": "echo 开始更新版本",
    "after:bump": "echo 更新版本成功",
    "after:release": "echo 发布成功"
  },
  plugins: {
    "@release-it/conventional-changelog": {
      preset: {
        name: "conventionalcommits",
        types: [
          { type: "feat", section: "✨ Features | 新功能" },
          { type: "fix", section: "🐛 Bug Fixes | Bug 修复" },
          { type: "chore", section: "🔧 Chores | 其他更新" },
          { type: "docs", section: "📝 Documentation | 文档" },
          { type: "style", section: "💄 Styles | 风格" },
          { type: "refactor", section: "♻️ Code Refactoring | 代码重构" },
          {
            type: "perf",
            section: "⚡ Performance Improvements | 性能优化"
          },
          { type: "test", section: "✅ Tests | 测试" },
          { type: "revert", section: "⏪ Reverts | 回退" },
          { type: "build", section: "🔨 Build System | 构建" },
          { type: "ci", section: "🔬 Continuous Integration | CI 配置" },
          { type: "config", section: "🛠️ Config | 配置" },
          { type: "[skip ci]", hidden: true }
        ]
      },
      infile: "CHANGELOG.md",
      ignoreRecommendedBump: true,
      strictSemVer: true
    }
  }
};
