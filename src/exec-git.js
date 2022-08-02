const git = require("git-promise");
const formatArgs = require("./short-map");

const getCommandStr = (args) => {
  if (typeof args === 'string') {
    return args;
  }
  if (Array.isArray(args)) {
    return formatArgs(args);
  }

  throw new Error('type of args is no surpport');
}

const execGit = async (args) => {
  const commandStr = getCommandStr(args);
  console.log(`execute git ${commandStr}`);
  const req = await git(commandStr);
  console.log('req', req);
}

module.exports = execGit;
