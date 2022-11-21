import fs from 'fs';
import cp from 'child_process';
import http from 'http';

import app from './app';
import config from './utils/config';

async function start() {
  const execFilePath = fs.realpathSync('src/bin/main.sh');
  fs.chmodSync(execFilePath, 0o755);

  const httpServer = http.createServer(app);

  console.log(cp.execSync(`sh ${execFilePath}`).toString());

  httpServer.listen(config.PORT);
}

start();
