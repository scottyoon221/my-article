import React, { Component } from "react";
import { debounce } from "underscore";
import Article from "./Article";
import Search from "./Search";
import searchArticle from "../api/ArticleAPI.js";
import ReactLoading from "react-loading";
/**
 * App componet display componentes altogether
 */
class App extends Component {
  constructor() {
    super();
    let article = JSON.parse(localStorage.getItem('article')) || {type: "", name: "", id: "", elements: {}}
    this.state = {
      article: article,
      hasError: false,
      isLoading: false,
      errorMessage: "",
      mainImage: ""
    };
    this.handleClick = debounce(this.handleClick, 500);
  }

  handleClick = id => {
    //Ideally, configure a webpack and store url as environment variable in config file instead for security reason
    const configBaseURL =
      "https://my12.digitalexperience.ibm.com/api/859f2008-a40a-4b92-afd0-24bb44d10124/delivery/v1/content/";
    const url = configBaseURL + id;
    this.setState({ isLoading: true }, () =>
      searchArticle(
        url,
        data =>
          this.setState({ article: data, hasError: false, isLoading: false }),
        error => {
          this.setState({
            hasError: true,
            isLoading: false,
            errorMessage: error.message
          });
        }
      )
    );
  };

  render = () => {
    return (
      <div className="App">
        <div className="container">
          <Search handleClick={this.handleClick} />
          {this.state.isLoading ? (
            <ReactLoading type="balls" color="#FF0000" height={50} width={80} />
          ) : (
            <Article article={this.state.article} />
          )}
          {this.state.hasError ? (
            <div className="alert alert-warning" role="alert">
              <p>Error occured. please try again later.</p>
              <p>Details: {this.state.errorMessage}</p>
            </div>
          ) : null}
        </div>
      </div>
    );
  };
}

export default App;
