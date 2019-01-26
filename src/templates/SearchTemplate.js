import React from "react";
import SearchContainer from "../containers/search/SearchContainer";
import Menu from "../components/menu/Menu";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import common_styles from "./Common.module.css";
import {controllMenuBar} from '../common/common'

class SearchTemplate extends React.Component {
  constructor(props) {
    super();

    this.state = {
      title : "Search NBA Player",
      subtitle : "ex) curry, lebron, durant..."
    }
  }

  componentDidMount(props){
    controllMenuBar(true)
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
