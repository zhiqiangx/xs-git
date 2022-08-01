const git = require("git-promise");

const main = async (args) => {
  if (Array.isArray(args)) {
    const pullMsg = await git('log --pretty=format:--split--"%s"');
    console.log('arr', pullMsg.split('--split--'));
    console.log('addreq', pullMsg);
  }
}

module.exports = main;
