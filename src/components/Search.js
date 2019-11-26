import React from 'react';
import PropTypes from 'prop-types';

/**
  * This component provide button that trigger a article fetch
  */
function Search(props) {
  return (
    <div className="row">
      <div className="col-3">
        Click button to reterive article:
      </div>
      <div className="col-9">
        <button type="button" className="btn btn-primary" id='fa9519d5-0363-4b8d-8e1f-627d802c08a8' onClick={(e) => props.handleClick(e.target.id)}>
          button
        </button>
      </div>
    </div>
  );
}

Search.propTypes = {
  /**
    * Search Component
    * handleClick: fetch article
    */
  handleClick: PropTypes.func.isRequired,
};

export default Search;

