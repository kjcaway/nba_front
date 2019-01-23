import React, { Component } from "react";
import styles from "./SearchResult.module.css";
import SearchResultItem from "./SearchResultItem";

import _ from "lodash";

class SearchResult extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    let update = JSON.stringify(this.props) !== JSON.stringify(nextProps);
    return update;
  }

  render() {
    const mapToComponents = data => {
      let array = [];

      _.forIn(data.data, (value, key) => {
        const obj = {};
        obj[key] = value;
        array.push(obj);
      });

      return array.map((obj, idx) => {
        const key = Object.keys(obj)[0];
        const value = obj[key];

        return <SearchResultItem key={idx} left={key} right={value} />;
      });
    };

    return (
      <div className={styles.result}>
        <ul className={styles["result-list"]}>
          {mapToComponents(this.props.data)}
        </ul>
      </div>
    );
  }
}

SearchResult.defaultProps = {
  data: {}
};

export default SearchResult;
