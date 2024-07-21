import BaseConfig from "../../.release-it";

const config = {
  ...BaseConfig,
  git: {
    tagName: "@atox/package-a@${version}",
    tagAnnotation: "chore(release): ${version} [skip ci]"
  }
};

export default config;
