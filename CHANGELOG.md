

## [0.0.5-1](https://github.com/Katarina-W/template-monorepo/compare/0.0.5-0...0.0.5-1) (2024-07-21)

## 0.0.1 (2024-07-21)


### ⚠ BREAKING CHANGES

* **release:** The release process has been changed to use release-it instead of
semantic-release. Version numbers have been reset to 0.0.0 for all packages.
* **release:** The version update may affect consumers of @atox/package-a
and @atox/package-b. Ensure that your dependencies are compatible with the
new versions.

### ✨ Features | 新功能

* **project-b:** add subtract function from package-a ([9071797](https://github.com/Katarina-W/template-monorepo/commit/9071797b7307d7b5c04a573f03011218cd2bacd1))
* **release:** add commitMessage to git config for project-a and project-b ([ac5e74f](https://github.com/Katarina-W/template-monorepo/commit/ac5e74f73c728f7b7e5e821bf25b659b98036ebc))
* **release:** add git config for username and email in release workflow ([1925c21](https://github.com/Katarina-W/template-monorepo/commit/1925c21a664425b3851b6f7385da2989dc7d5cb7))
* **release:** generate tag names based on branch in release-it configs ([b803bef](https://github.com/Katarina-W/template-monorepo/commit/b803bef8fb896e3a48b4a1602e100486bc650d31))
* **release:** initialize semantic release configuration ([438c821](https://github.com/Katarina-W/template-monorepo/commit/438c821c91661b1cb2f67efc029d56d1228df822))
* **release:** initialize semantic release configuration ([f85a772](https://github.com/Katarina-W/template-monorepo/commit/f85a77281cb2019fd830087e1a7ee25f36b1f175))
* **release:** initialize semantic release configuration and update READMEs ([d1b67b5](https://github.com/Katarina-W/template-monorepo/commit/d1b67b54c91a2ac5035739e6ba79d14fe13ffe7c))
* **setup:** initialize monorepo with pnpm and TypeScript ([42a6278](https://github.com/Katarina-W/template-monorepo/commit/42a6278da0bb588556bc7acbb489c10c0ab72524))


### 🐛 Bug Fixes | Bug 修复

* **release:** correct typo in release script commands ([ecab89d](https://github.com/Katarina-W/template-monorepo/commit/ecab89dad96685d94223c9701964efcbedc7909e))


### 🔧 Chores | 其他更新

* **release:** @atox/package-a@alpha-0.0.4 [skip ci] ([f42c88f](https://github.com/Katarina-W/template-monorepo/commit/f42c88f111af07804476326a4019a0b2a6301d8d))
* **release:** @atox/package-b@alpha-0.0.3 [skip ci] ([e87f15f](https://github.com/Katarina-W/template-monorepo/commit/e87f15f8ee7aa6b63ffdc42a09b2bcc442eb0fad))
* **release:** 0.0.1 [skip ci] ([4d98114](https://github.com/Katarina-W/template-monorepo/commit/4d981148fed846fdf1f63a99a69dac3a3e9f6ae9))
* **release:** 0.0.1 [skip ci] ([f926943](https://github.com/Katarina-W/template-monorepo/commit/f9269434d7b455923553208dc77563e78acf4d97))
* **release:** 0.0.1 [skip ci] ([0de3dc1](https://github.com/Katarina-W/template-monorepo/commit/0de3dc14f48e39338f122f57519073282842a681))
* **release:** 0.0.2 [skip ci] ([f038e2b](https://github.com/Katarina-W/template-monorepo/commit/f038e2bf8baf7ccee1313b5d3e6155cbf76975e1))
* **release:** 0.0.2 [skip ci] ([aee57c4](https://github.com/Katarina-W/template-monorepo/commit/aee57c476d7f3133b2932adfe3c60107a94bf6b7))
* **release:** 0.0.2 [skip ci] ([a522e68](https://github.com/Katarina-W/template-monorepo/commit/a522e685b159cea1154624ced8dbe6c05f0dbac1))
* **release:** 0.0.3 [skip ci] ([edd218e](https://github.com/Katarina-W/template-monorepo/commit/edd218ebb5a9699f9a2802a21b6996ed5fe52aae))
* **release:** 1.0.0-alpha.1 [skip ci] ([e3ace7f](https://github.com/Katarina-W/template-monorepo/commit/e3ace7ffe8ed95e8f018e43b2d49652816dd766f))
* **release:** 1.0.0-alpha.1 [skip ci] ([d159d73](https://github.com/Katarina-W/template-monorepo/commit/d159d73076bed73332549eccde29d8accd38629e))
* **release:** 1.0.0-alpha.1 [skip ci] ([ac5cc33](https://github.com/Katarina-W/template-monorepo/commit/ac5cc3363a4a61e10e004c997a463e0e7e23d793))
* **release:** 1.0.1-alpha.1 [skip ci] ([a99b1fa](https://github.com/Katarina-W/template-monorepo/commit/a99b1fa84abdef71de72882407f64c588f2cd855))
* **release:** disable npm publish and add hooks for release-it in monorepo ([17e1fdd](https://github.com/Katarina-W/template-monorepo/commit/17e1fdd03b660d7602b41e063288ceabc88c453d))
* **release:** disable npm publish in release-it config for project-a and project-b ([b6c45b4](https://github.com/Katarina-W/template-monorepo/commit/b6c45b4f59bc1bdaf2a7fd018eb85038e38e6f9c))
* **release:** disable npm publish in release-it configs for project-a and project-b ([28e2da1](https://github.com/Katarina-W/template-monorepo/commit/28e2da181e72fdd5f7a552250f56b7f931d03bbc))
* **release:** fetch full history for git lint ([af8118e](https://github.com/Katarina-W/template-monorepo/commit/af8118eb4dd8b4420975800c6da55642e4721203))
* **release:** migrate release-it config to commonJS and extend for packages ([e81077f](https://github.com/Katarina-W/template-monorepo/commit/e81077fe161a55042ac8eda32988cb6214db8189))
* **release:** migrate release-it config to CommonJS and update scripts ([b3ed677](https://github.com/Katarina-W/template-monorepo/commit/b3ed6770fdd4b061f99234c4d5db9372b062a0ac))
* **release:** migrate tagAnnotation to commitMessage in release-it config ([0e5415d](https://github.com/Katarina-W/template-monorepo/commit/0e5415dc7d4eb75e4aa7a096e0b8dedf78943bff))
* **release:** standardize commit message format in release-it configs ([a37676f](https://github.com/Katarina-W/template-monorepo/commit/a37676f7b3203b71d169a3031266a12add92ce6b))
* **release:** update release-it configs and scripts for monorepo ([e73833a](https://github.com/Katarina-W/template-monorepo/commit/e73833a5d9d05a6a7d36663fea99005b69d5d756))
* **release:** update release-it configuration and scripts ([ea42821](https://github.com/Katarina-W/template-monorepo/commit/ea42821783796ee1288aef821a4cf4db4bffe44c))

## [0.0.2](https://github.com/Katarina-W/template-monorepo/compare/v0.0.1...v0.0.2) (2024-07-21)


### 🔧 Chores | 其他更新

* **release:** 0.0.2 [skip ci] ([aee57c4](https://github.com/Katarina-W/template-monorepo/commit/aee57c476d7f3133b2932adfe3c60107a94bf6b7))
* **release:** 0.0.2 [skip ci] ([a522e68](https://github.com/Katarina-W/template-monorepo/commit/a522e685b159cea1154624ced8dbe6c05f0dbac1))
* **release:** fetch full history for git lint ([af8118e](https://github.com/Katarina-W/template-monorepo/commit/af8118eb4dd8b4420975800c6da55642e4721203))

## 0.0.1 (2024-07-21)


### ✨ Features | 新功能

* **release:** add git config for username and email in release workflow ([1925c21](https://github.com/Katarina-W/template-monorepo/commit/1925c21a664425b3851b6f7385da2989dc7d5cb7))


### 🔧 Chores | 其他更新

* **release:** 0.0.1 [skip ci] ([f926943](https://github.com/Katarina-W/template-monorepo/commit/f9269434d7b455923553208dc77563e78acf4d97))
* **release:** 0.0.1 [skip ci] ([0de3dc1](https://github.com/Katarina-W/template-monorepo/commit/0de3dc14f48e39338f122f57519073282842a681))
