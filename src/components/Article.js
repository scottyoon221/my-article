import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from "underscore";
import ArticleContent from "./ArticleContent";
import extractContent from "../util/utils.js";

/**
  * This component display article information
  */
const Article = props => {
  const {name, id, type, elements} = props.article;
  const baseURL = 'https://my12.digitalexperience.ibm.com';
  const divStyle = {
    "margin-top": "20px"
  };
  let mainImage, author, body;
  if(!isEmpty(elements)) {
    mainImage = elements.mainImage.value.leadImage.renditions.lead.url;
    author = elements.author.value;
    body = extractContent(elements.body.values);
  }
  return (
    <Fragment>
      <div className="row" style={divStyle}>
        <div className="col-3">
          <b>Lead Image:</b>
        </div>
        <div className="col-9">
          {
            mainImage !== undefined ?
              <img src={`${baseURL+mainImage}`} alt="main" width="300" height="200"/>
              :
              null
          }
        </div>
      </div>
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
      <div className="row">
        <div className="col-3">
          <b>Author:</b>
        </div>
        <div className="col-9">
          {
            author !== undefined ?
              <p>{author}</p>
              :
              null
          }
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <b>Text for body section:</b>
        </div>
        <div className="col-9">
          {
            author !== undefined ?
              <ArticleContent body={body} />
              :
              null
          }
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

