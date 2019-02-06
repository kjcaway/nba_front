import React from "react";
import RankTeamContainer from "../containers/rankteam/RankTeamContainer";
import Menu from "../components/menu/Menu";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import styles from "./Template.module.css";
import {controllMenuBar} from '../common/common'

class RankTeamTemplate extends React.Component {
  constructor(props) {
    super();

    this.state = {
      title : "Team Rank",
      subtitle : "2018-2019 Season"
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
        <RankTeamContainer />
      </div>
    );
  }
}

export default RankTeamTemplate;
