import express from 'express';
import config  from './config';
import serverRender from 'renderers/server';
import data from './testData';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', async (_req, resp) => {
  const initialContent = await serverRender();
  resp.render('index', { ...initialContent });
});

app.get('/data', (_req, resp) => {
  resp.json({
    ...data,
    timestamp: new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    }),
  });
});

app.listen(config.port, () => {
  console.info(`Running on port ${config.port}...`);
});
