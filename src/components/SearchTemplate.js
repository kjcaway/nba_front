import React from "react";
import SearchContainer from "../containers/search/SearchContainer";
import Menu from "./menu/Menu";
import Header from "./header/Header";
import Banner from "./banner/Banner";
import common_styles from "./Common.module.css";

class SearchTemplate extends React.Component {
  constructor(props) {
    super();

    this.state = {
      title : "Search NBA Player",
      subtitle : "ex) curry, lebron, durant..."
    }
  }

  componentDidMount(props){
    // close
  }

  render() {

    return (
      <div className={common_styles.container}>
        <Header />
        <Banner title={this.state.title} subtitle={this.state.subtitle}/>
        <SearchContainer />
        <Menu />
      </div>
    );
  }
}

export default SearchTemplate;
