import express from 'express';

import appRouter from './routers/appRouter';

const app = express();

app.use(appRouter);

export default app;
