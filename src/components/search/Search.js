import React, {Component}from "react";
import styles from "./Search.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch);

class Search extends Component {
  constructor(props) {
    super();

    this.state = {
      keyword: ""
    };
  }

  onKeywordChange(e) {
    this.setState({
      keyword: e.target.value
    });
  }

  onBtnClick() {
    let keyword = this.state.keyword;

    this.props.searchHandler(keyword).then(() => {
      console.log("search handler called.");
    });
  }

  onEnterPress(e) {
    if (e.key === 'Enter') {
      let keyword = this.state.keyword;
      this.props.searchHandler(keyword).then(() => {
        console.log("search handler called.");
      });
    }
  }

  render() {
    return (
      <div className={styles.wrap}>
        <div className={styles.search}>
          <input
            type="text"
            className={styles.searchTerm}
            placeholder="Write player name"
            value={this.state.keyword}
            onChange={this.onKeywordChange.bind(this)}
            onKeyPress={this.onEnterPress.bind(this)}
          />
          <button
            type="submit"
            className={styles.searchButton}
            onClick={this.onBtnClick.bind(this)}
          >
            <FontAwesomeIcon icon="search" />
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
