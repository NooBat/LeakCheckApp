import http from 'http';

import app from './app';
import config from './utils/config';

async function start() {
  const httpServer = http.createServer(app);

  httpServer.listen(config.PORT);
}

start();
