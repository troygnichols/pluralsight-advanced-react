import React from 'react';
import PropTypes from 'prop-types';
import storeProvider from './storeProvider';

const Article = (props) => {

  const {article, author} = props;

  const dateDisplay = (dateStr) => new Date(dateStr).toDateString();

  return (
    <div style={styles.article}>
      <div style={styles.title}>{article.title}</div>
      <div style={styles.date}>{dateDisplay(article.date)}</div>
      <div style={styles.author}>
        <a href={author.website} target="_blank">
          {author.firstName} {author.lastName}
        </a>
      </div>
      <div style={styles.body}>{props.article.body}</div>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })
};

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


function extraProps(store, origProps) {
  return {
    author: store.lookupAuthor(origProps.article.authorId),
  };
}

export default storeProvider(extraProps)(Article);
