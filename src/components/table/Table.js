import React, { Component } from 'react'
import styles from './Table.module.css'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

import _ from "lodash";

class Table extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    let update = JSON.stringify(this.props) !== JSON.stringify(nextProps);
    return update;
  }

  render() {
    const conf = this.props.conf;
    const confMap = {
      east : 'eastConfStandingsByDay',
      west : 'westConfStandingsByDay'
    }
    console.log('Table conf :: ' + conf)
    const mapToComponentsHeader = data => {
      // const standingsArr = _.get(data.data, confMap[conf], []);
      // const keyArr = Object.keys(_.defaultTo(standingsArr[0],{'No result found.':''}));
      const thArr = ['No', 'Team', 'Games', 'Win', 'Lose', '%', 'Home', 'Away'] // thead

      return <TableHeader column={thArr}/>
    }

    const mapToComponentsBody = data => {
      const standingsArr = _.get(data.data, confMap[conf], []);

      return <TableBody data={standingsArr}/>
    }

    return (
      <div className={styles['result']}>
        <table className={styles['rwd-table']}>
          {mapToComponentsHeader(this.props.data)}
          {mapToComponentsBody(this.props.data)}
        </table>
      </div>
    )
  }
}

export default Table;