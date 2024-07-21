/** @type {import('release-it').Config} */
module.exports = {
  git: {
    tagName: "@atox/package-a@${version}",
    commitMessage: "chore(release): ${version} [skip ci]"
  },
  // npm: {
  //   publish: true
  // },
  hooks: {
    "before:bump": "echo 开始更新版本",
    "after:bump": "echo 更新版本成功",
    "after:release": "echo 发布成功"
  }
};
