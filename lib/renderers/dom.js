import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';

const initialData = {
  articles: [],
  authors: []
};

ReactDOM.hydrate(<App initialData={initialData}/>,
  document.getElementById('root'));

