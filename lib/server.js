import express from 'express';
import config  from './config';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (_req, resp) => {
  resp.render('index', { answer: 42 });
});

app.listen(config.port, () => {
  console.info(`Running on port ${config.port}...`);
});
