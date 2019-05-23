const fs = require('fs');
const path = require('path');

module.exports = {
  connections: [
    {
      name: 'default',
      adapter: require('node-norm/adapters/disk'),
      schemas: fs.readdirSync(path.join(__dirname, 'schemas')).map(file => require(`./schemas/${file}`)),
    },
  ],
};
