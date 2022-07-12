const git = require("git-promise");

const main = async (args) => {
  if (Array.isArray(args)) {
    const addReq = await git('add .');
    console.log('addreq', addReq);
  }
}

module.exports = main;
