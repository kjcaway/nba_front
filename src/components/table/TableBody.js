import React, { Component } from 'react'

import _ from "lodash";


export default class TableBody extends Component {
  render() {
    const mapToTd = data => {
      const row = data;
      const rowToArr = _.values(row); // Object의 key : value 중 value를 array로 반환 

      return rowToArr.map((obj, idx) => {
        const columnData = obj;

        return <td key={'td'+idx}>{columnData}</td>
      })
    }

    const mapToTr = data => {
      return data.map((obj, idx) => {
        return <tr key={'tr'+idx}>{mapToTd(obj)}</tr>
      })
    }

    return (
      <React.Fragment>
        <tbody>
          {mapToTr(this.props.data)}
        </tbody>
      </React.Fragment>
    )
  }
}
