import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

/**
  * This component display article information
  */
function Article(props) {
  const {name, id, type} = props.article;
  return (
    <Fragment>
      <div className="row">
        <div className="col-3">
          <b>Name:</b>
        </div>
        <div className="col-9">
          {name}
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <b>ID:</b>
        </div>
        <div className="col-9">
          {id}
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <b>Type:</b>
        </div>
        <div className="col-9">
          {type}
        </div>
      </div>
    </Fragment>
  );
}

Article.propTypes = {
  /**
    * Article Component
    * article: contains article information
    */
  article: PropTypes.object.isRequired,
};

export default Article;

