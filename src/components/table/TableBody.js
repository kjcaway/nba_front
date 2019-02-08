import React, { Component } from 'react'

import _ from "lodash";


export default class TableBody extends Component {
  render() {
    const mapToTd = data => {
      const row = data;
      const rowToArr = _.values(row);
      return rowToArr.map((obj, idx) => {
        const columnData = obj;

        return <td>{columnData}</td>
      })
    }

    const mapToTr = data => {
      return data.map((obj, idx) => {
        return <tr>{mapToTd(obj)}</tr>
      })
    }

    return (
      <React.Fragment>
        {mapToTr(this.props.data)}
      </React.Fragment>
    )
  }
}
