import React from "react";
import Menu from "./menu/Menu";
import Header from "./header/Header";
import Banner from "./banner/Banner";
import common_styles from "./Common.module.css";

class SearchTemplate extends React.Component {
  constructor(props) {
    super();

    this.state = {
      title : "Test",
      subtitle : "This is test page"
    }
  }

  render() {

    return (
      <div className={common_styles.container}>
        <Header />
        <Banner title={this.state.title} subtitle={this.state.subtitle}/>
        <Menu />
      </div>
    );
  }
}

export default SearchTemplate;
