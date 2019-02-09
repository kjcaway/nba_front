import React, { Component } from 'react'

export default class TableHeader extends Component {
  render() {
    const mapToTh = data => {
      console.log(data)
      return data.map((colName, idx) => {
        const column = colName;

        return <th key={'th'+idx}>{column}</th>
      })
    }
    
    return (
      <thead>
        <tr>
          {mapToTh(this.props.column)}
        </tr>
      </thead>
    )
  }
}
