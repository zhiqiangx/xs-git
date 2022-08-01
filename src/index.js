const git = require("git-promise");

const main = async (args) => {
  if (Array.isArray(args)) {
    const pullMsg = await git('log');
    console.log('addreq', pullMsg);
  }
}

module.exports = main;
