const branch = process.env.GITHUB_REF_NAME;
const tagName =
  branch === "master"
    ? "@atox/package-a@${version}"
    : `@atox/package-a@${branch}-\${version}`;

/** @type {import('release-it').Config} */
module.exports = {
  git: {
    tagName,
    commitMessage: `chore(release): ${tagName} [skip ci]`
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
