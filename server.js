const http = require('http');
const Bundle = require('bono');
const Api = require('./bundles/api');
const config = require('./config');

const PORT = process.env.PORT || 3000;

const app = new Bundle();

app.use(require('koa-static')(`${__dirname}/www`));
app.bundle('/api', new Api(config));

const server = http.createServer(app.callback());
server.listen(PORT, () => console.info(`Server listening at ${PORT}`));
