const fs = require("node:fs");
const path = require("node:path");
const chalk = require("chalk");
const _ = require("lodash");

const COPY_DESTINATION = path.join("local_modules", "@fortune-sheet");

console.log(
  chalk.greenBright(chalk.bold("Copying build results into local_modules"))
);

fs.rmSync(COPY_DESTINATION, {
  recursive: true,
  force: true,
});

fs.mkdirSync(COPY_DESTINATION, {
  recursive: true,
});

fs.cpSync("packages", COPY_DESTINATION, {
  recursive: true,
  force: true,
});

const updatePatches = [
  {
    package: "core",
    patch: {
      dependencies: {
        "@fortune-sheet/formula-parser": "file:../formula-parser",
      },
    },
  },
  {
    package: "react",
    patch: {
      dependencies: {
        "@fortune-sheet/core": "file:../core",
      },
    },
  },
];

for (const updatePatch of updatePatches) {
  console.log(
    chalk.greenBright(
      chalk.bold(
        `Updating package.json of locally linked package ${updatePatch.package}`
      )
    )
  );

  const jsonObject = JSON.parse(
    fs.readFileSync(
      path.join(COPY_DESTINATION, updatePatch.package, "package.json"),
      {
        encoding: "utf-8",
      }
    )
  );

  _.merge(jsonObject, updatePatch.patch);

  fs.writeFileSync(
    path.join(COPY_DESTINATION, updatePatch.package, "package.json"),
    JSON.stringify(jsonObject, undefined, 2),
    {
      encoding: "utf-8",
    }
  );
}
