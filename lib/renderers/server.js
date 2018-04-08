import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import DataApi from 'state-api';
import App from 'components/App';
import config from 'config';

const {host, port} = config;

const serverRender = async () => {
  const url = `http://${host}:${port}/data`;
  const resp = await axios.get(url);
  const api = new DataApi(resp.data);

  const initialData = {
    articles: api.getArticles(),
    authors: api.getAuthors()
  };

  return ReactDOMServer.renderToString(
    <App initialData={initialData}/>
  );
};

export default serverRender;
