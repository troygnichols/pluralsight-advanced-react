import React from 'react';

import Article from './Article';

class ArticleList extends React.PureComponent {

  renderArticles = (articles) => {
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
  }

  render() {
    return (
      <div>
        {this.renderArticles(this.props.articles)}
      </div>
    );
  }

}

export default ArticleList;
