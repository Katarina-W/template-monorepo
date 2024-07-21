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
    preRelease: branch !== "master"
  },
  git: {
    tagAnnotation: "chore(release): @atox/package-a@${version} [skip ci]",
    commitMessage: "chore(release): @atox/package-a@${version} [skip ci]"
  },
  npm: {
    publish: false
  },
  hooks: {
    "before:bump": "echo 开始更新版本",
    "after:bump": "echo 更新版本成功",
    "after:release": "echo 发布成功"
  }
};
