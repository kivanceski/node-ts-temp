import express from 'express';
import { config } from 'dotenv';
import morgan from 'morgan';

import routes from '@/routes';

config();

const app = express();

app.use(morgan('combined'));

app.use(express.json());

app.use('/api', routes);

app.listen(process.env.PORT, () => {
  console.log('App listening on port: ' + process.env.PORT);
});
