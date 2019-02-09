import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Radio } from "../../components/table";
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
    })
  }

  handleRadio = value => {
    this.props.viewStatus.conf = value;
    this.forceUpdate(); // rerender
  }

  render() {
    const conf = this.props.viewStatus.conf;
    const data = this.props.viewStatus.data;
    const status = this.props.viewStatus.status;

    const loading = (
      <Spinner />
    );
    const success = (
      <div>
        <Radio conf={conf} radioHandler={this.handleRadio.bind(this)}/>
        <Table conf={conf} data={data}/>
      </div>
    );

    const result = (status === 'LOADING'?loading:success);

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
