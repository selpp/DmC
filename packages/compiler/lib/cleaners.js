let tabs = (line) => {
  return (line.startsWith('  ')) ? '\t' + tabs(line.substr(2)):
    (line.startsWith(' '))? tabs(line.substr(1)): line;
};

module.exports = { tabs };
