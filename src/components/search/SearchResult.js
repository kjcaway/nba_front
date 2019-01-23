import React, { Component } from "react";
import styles from "./SearchResult.module.css";

class SearchResult extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    let update = JSON.stringify(this.props) !== JSON.stringify(nextProps);
    return update;
  }

  render() {
    console.log(this.props.data);
    const mapToComponents = data => {
      return data.map((field, i) => {
        return (
          <li>
            <div>
              <label>1</label>
              <span className={styles.fRight}>2</span>
            </div>
          </li>
        );
      });
    };

    return (
      <div className={styles.container}>
        <ul className={styles.mList}>{mapToComponents(this.props.data)}</ul>
      </div>
    );
  }
}

SearchResult.defaultProps = {
  data: []
};

export default SearchResult;
