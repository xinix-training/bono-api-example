const Bundle = require('bono');
const NormBundle = require('bono-norm/bundle');

class Api extends Bundle {
  constructor ({ connections }) {
    super();

    this.use(require('bono/middlewares/json')());
    this.use(require('bono-norm')({ connections }));

    this.bundle('/user', new NormBundle({ schema: 'user' }));
  }
}

module.exports = Api;
