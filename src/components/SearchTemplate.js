import React from "react";
import SearchContainer from "../containers/search/SearchContainer";
import Menu from "./menu/Menu";
import Header from "./header/Header";
import common_styles from "./Common.module.css";

class SearchTemplate extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className={common_styles.container}>
        <Header />
        <SearchContainer />
        <Menu />
      </div>
    );
  }
}

export default SearchTemplate;
