import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export class SearchBox extends Component {
  render() {
    return (
      <div className="searchBoxParent">
        <div className="searchBox">
          <form action="" className="searchBoxForm d-flex">
            <input type="text" placeholder="Search products..." />
            <button>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBox;
