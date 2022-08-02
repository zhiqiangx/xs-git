const shortMap = Object.freeze({
  c: 'commit',
  pl: 'pull',
  ps: 'push',
});

const formatArgs = (args) => {
  if (!Array.isArray(args)) {
    return args;
  }
  return args.map((key) => shortMap[key] || key).join(' ');
};

module.exports = formatArgs;
