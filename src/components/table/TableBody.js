import React, { Component } from 'react'

import _ from "lodash";


export default class TableBody extends Component {
  render() {
    const mapToLogo = (teamid) => {
      return (
        <img src={'images/logo/'+teamid+'.png'} alt='logo' width='28' height='28'/>
      )
    }
    const mapToTr = data => {
      return data.map((obj, idx) => {
        return  (
        <tr key={'tr'+idx}>
          <td>{idx+1}</td>
          <td>{mapToLogo(obj.teamId)}{obj.team}</td>
          <td>{obj.g}</td>
          <td>{obj.w}</td>
          <td>{obj.l}</td>
          <td>{obj.wPct}</td>
          <td>{obj.homeRecord}</td>
          <td>{obj.roadRecord}</td>
        </tr>)
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
