import React, { Component } from "react";
import { connect } from "react-redux";
import { Search, SearchResult } from "../../components/search";
import Spinner from '../../components/spinner/Spinner'
import { searchPostRequest } from "../../actions/SearchAction";

export class SearchContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleSearch = keyword => {
    return this.props.searchPostRequest(keyword).then(() => {
      if (this.props.postStatus.status === "SUCCESS") {
        console.log("SUCCESS!!");

        if (this.props.viewStatus.data === '') {
          alert("No matching player.");
        }
      } else {
        console.log("FAIL!!");
        const status = this.props.postStatus.error;

        if(status === 400){
          alert("Please insert keyword (minimal 3)");
        }else if(status === 500){
          alert("Internal server Error!");
        }else{
          alert("Unknown Error = " + this.props.postStatus.message);
        }
      }
    });
  };

  render() {
    const loading = (
      <Spinner />
    );
    const success = (
      <SearchResult data={this.props.viewStatus.data} />
    );

    const result = this.props.viewStatus.status === 'LOADING'?loading:success;
    
    return (
      <React.Fragment>
        <Search searchHandler={this.handleSearch.bind(this)} />
        {result}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    postStatus: state.SearchReducer.post,
    viewStatus: state.SearchReducer.view
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchPostRequest: keyword => {
      return dispatch(searchPostRequest(keyword));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer);
