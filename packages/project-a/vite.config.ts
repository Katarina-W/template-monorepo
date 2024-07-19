import { readFileSync } from "node:fs";
import path from "node:path";

import { defineConfig } from "vite";
// 辅助函数：读取并解析 package.json 文件
const readPackageJson = (filePath: string) => {
  return JSON.parse(readFileSync(path.resolve(filePath), "utf-8"));
};

// 获取 dependencies 和 peerDependencies
const getDependencies = (pkgJson: Record<string, string>) => [
  ...Object.keys(pkgJson.dependencies || {}),
  ...Object.keys(pkgJson.peerDependencies || {})
];

const rootPkg = readPackageJson(path.resolve(__dirname, "package.json"));
const pkg = readPackageJson(
  path.resolve(__dirname, "..", "..", "package.json")
);

const externalDependencies = [
  ...getDependencies(rootPkg),
  ...getDependencies(pkg)
];

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts"
    },
    rollupOptions: {
      external: externalDependencies,
      output: [
        {
          format: "esm", // default es
          dir: "lib/esm",
          entryFileNames: "[name].js"
        },
        {
          format: "umd",
          dir: "lib/umd",
          name: "Project_A",
          entryFileNames: "[name].js",
          globals(name) {
            // 根据模块名称转换为大写形式
            const parts = name.split("/");
            const moduleName = parts[parts.length - 1]; // 获取模块名部分
            return moduleName.charAt(0).toUpperCase() + moduleName.slice(1);
          }
        }
      ]
    }
  }
});
