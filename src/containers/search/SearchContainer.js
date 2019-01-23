import React, { Component } from "react";
import { connect } from "react-redux";
import { Search, SearchResult } from "../../components/search";
import { searchPostRequest } from "../../actions/SearchAction";

export class SearchContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleSearch = keyword => {
    return this.props.searchPostRequest(keyword).then(() => {
      if (this.props.postStatus.status === "SUCCESS") {
        console.log("SUCCESS!! ===" + this.props.viewStatus.data);
        if (this.props.viewStatus.data === undefined) {
          alert("No matching player.");
        }
      } else {
        console.log("FAIL!!");
        alert("Please insert keyword (minimal 3)");
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <Search searchHandler={this.handleSearch.bind(this)} />
        <SearchResult data={this.props.viewStatus.data} />
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
