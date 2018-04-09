import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import StateApi from 'state-api';
import App from 'components/App';
import config from 'config';

const {host, port} = config;

const serverRender = async () => {
  const url = `http://${host}:${port}/data`;
  const resp = await axios.get(url);
  const store = new StateApi(resp.data);

  return {
    initialMarkup: ReactDOMServer.renderToString(
      <App store={store} />
    ),
    initialData: resp.data
  };

};

export default serverRender;
