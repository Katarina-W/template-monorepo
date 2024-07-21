const branch = process.env.GITHUB_REF_NAME;

/** @type {import('release-it').Config} */
module.exports = {
  github: {
    preRelease: branch !== "master"
  },
  git: {
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
