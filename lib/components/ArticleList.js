import React from 'react';

import Article from './Article';

const renderArticles = (articles) => {
  const list = Object.values(articles);
  if (list.length) {
    return list.map((article) => (
      <Article
        key={article.id}
        article={article} />
    ));
  } else {
    return <div>No articles found</div>;
  }
};

const ArticleList = (props) => {
  return (
    <div>
      {renderArticles(props.articles)}
    </div>
  );
};

export default ArticleList;
