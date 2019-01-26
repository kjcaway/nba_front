import React from "react";
import Menu from "../components/menu/Menu";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import styles from "./Template.module.css";
import {controllMenuBar} from '../common/common'

class SearchTemplate extends React.Component {
  constructor(props) {
    super();

    this.state = {
      title : "Test",
      subtitle : "This is test page"
    }
  }

  componentDidMount(props){
    controllMenuBar(true)
  }

  render() {

    return (
      <div className={styles.container}>
        <Header />
        <Banner title={this.state.title} subtitle={this.state.subtitle}/>
        <Menu />
      </div>
    );
  }
}

export default SearchTemplate;
