#! /usr/bin/env node

const program = require("commander");

program
  .command("create <repo-name>")
  .description("create a new monorepo project")
  .option("-f,--force", "overwrite target directory if it exist")
  .action((name, options) => {
    require("./create.js")(name, options);
  });
program
  // 配置版本号信息
  .version(`v${require("../package.json").version}`)
  .usage("<command> [option]");

// 解析用户执行命令传入参数
program.parse(process.argv);
