import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "../../components/table";
import Spinner from '../../components/spinner/Spinner'
import { getRankRequest } from "../../actions/RankTeamAction";

export class RankTeamContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount(props){
    this.pullData(this.props.date)
  }

  pullData = date => {
    return this.props.getRankRequest(date).then(() => {
      console.log('? pull Data');
    })
  }

  render() {
    const loading = (
      <Spinner />
    );
    const success = (
      <Table data={this.props.viewStatus.data} />
    );

    const result = this.props.viewStatus.status === 'LOADING'?loading:success;

    return (
      <React.Fragment>
        {result}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    viewStatus: state.RankTeamReducer.view
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRankRequest: date => {
      return dispatch(getRankRequest(date));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RankTeamContainer);
