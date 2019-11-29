import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

/**
  * This component display article content body
  */
class ArticleContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReadMore: false
    }
  }

  handleToggle = () => {
    this.setState((prevState) => ({
      isReadMore: !prevState.isReadMore
    }));
  }

  render = () => {
    const { body } = this.props;
    return (
      <Fragment>
        {
          this.state.isReadMore ?
          <div>
            {body}
            &nbsp;
            <a href="#more" onClick={this.handleToggle}>
              (Read Less)
            </a>
          </div>
          :
          <div>
            {body.substring(0, 50)}...
            &nbsp;
            <a href="#more" onClick={this.handleToggle}>
              (Read More)
            </a>
          </div>
        }
      </Fragment>
    );
  }
}

ArticleContent.propTypes = {
  /*
   * Article Content
   * article: contains content of article
  */
  body: PropTypes.string.isRequired
};

export default ArticleContent;

