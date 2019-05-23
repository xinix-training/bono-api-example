const NString = require('node-norm/schemas/nstring');
const Actorable = require('node-norm/observers/actorable');
const Timestampable = require('node-norm/observers/timestampable');

module.exports = {
  name: 'user',
  fields: [
    new NString('username').filter('required', 'unique'),
    new NString('password').filter('required'),
  ],
  observers: [
    new Actorable(),
    new Timestampable(),
  ],
};
