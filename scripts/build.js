const fs = require("fs");
const childProcess = require("child_process");

const tsconfig = JSON.parse(fs.readFileSync("tsconfig.json"));

delete tsconfig.compilerOptions.paths;
tsconfig.include = ["./src"];
tsconfig.exclude = [
  "node_modules",
  "**/*.test.ts",
  "**/*.spec.ts",
  "dist",
  "lib",
];

const tsconfigJson = JSON.stringify(tsconfig);
fs.writeFileSync("packages/core/tsconfig.json", tsconfigJson);
fs.writeFileSync("packages/react/tsconfig.json", tsconfigJson);

childProcess.execSync("father-build", { stdio: "inherit" });

fs.rmSync("packages/core/tsconfig.json");
fs.rmSync("packages/react/tsconfig.json");
