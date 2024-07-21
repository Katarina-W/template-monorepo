const BaseConfig = require("../../.release-it.cjs");

/** @type {import('release-it').Config} */
module.exports = {
  ...BaseConfig,
  github: false,
  git: {
    tagName: "@atox/package-b@${version}",
    tagAnnotation: "chore(release): ${version} [skip ci]"
  },
  npm: {
    publish: true
  }
};
