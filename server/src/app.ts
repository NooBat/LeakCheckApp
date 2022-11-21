import express from 'express';

import appRouter from './routers/appRouter.router';
import fileRouter from './routers/fileRouter.router';

const app = express();

app.use(appRouter);
app.use('/testcases', fileRouter);

export default app;
