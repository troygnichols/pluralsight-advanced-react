import React from 'react';

const styles = {
  article: {
    paddingBottom: 10,
    borderBottomStyle: 'solid',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    marginBottom: 10
  },
  title: {
    fontWeight: 'bold'
  },
  date: {
    fontSize: '0.85em',
    color: '#888'
  },
  author: {
    paddingTop: 10,
    paddingBottom: 10
  },
  website: {},
  body: {
    paddingLeft: 20
  }
};

const Article = (
  { article,
    actions: {lookupAuthor}
  }) => {

  const author = lookupAuthor(article);

  return (
    <div style={styles.article}>
      <div style={styles.title}>{article.title}</div>
      <div style={styles.date}>{article.date}</div>
      <div style={styles.author}>
        <a href={author.website} target="_blank">
          {author.firstName} {author.lastName}
        </a>
      </div>
      <div style={styles.body}>{article.body}</div>
    </div>
  );
};

export default Article;
