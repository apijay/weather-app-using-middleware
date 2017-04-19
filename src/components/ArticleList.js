'use strict';

import ArticlePreview from './ArticlePreview';
import React from 'react';

const ArticleList = props => {
  console.log('!props.articles'+props.articles)

  if (!props.articles) {
    return (
      <div className="article-preview">Loading...</div>
    );
  }

  if (props.articles.length === 0) {
    return (
      <div className="article-preview">
        No articles are here... yet.
      </div>
    );
  }

  return (
      <div>
          <div className="article-header">
              <div>City Name</div>
              <div>Temp in C</div>
              <div>Temp in F</div>
          </div>
          <div className="article-preview">
              <div>{props.articles.display_location.full}</div>
              <div>{props.articles.temp_c}</div>
              <div>{props.articles.temp_f}</div>
          </div>
      </div>

  );
};

export default ArticleList;
