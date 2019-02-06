import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "../../components/table";
import Spinner from '../../components/spinner/Spinner'

export class RankTeamContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Table />
      </React.Fragment>
    );
  }
}


export default RankTeamContainer;
