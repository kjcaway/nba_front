import React from "react";
import RankTeamContainer from "../containers/rankteam/RankTeamContainer";
import Menu from "../components/menu/Menu";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import styles from "./Template.module.css";
import {controllMenuBar, getTodayDate} from '../common/common'

class RankTeamTemplate extends React.Component {
  constructor(props) {
    super();

    this.state = {
      title : "Rank of Teams",
      subtitle : "2018-2019 Season",
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
        <RankTeamContainer date={getTodayDate()}/>
      </div>
    );
  }
}

export default RankTeamTemplate;
