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
    const mapToComponentsHeader = data => {
      const standingsArr = _.get(data.data, 'eastConfStandingsByDay', []);
      const keyArr = Object.keys(_.defaultTo(standingsArr[0],{'No result found.':''}));
      
      return <TableHeader column={keyArr}/>
    }

    const mapToComponentsBody = data => {
      const standingsArr = _.get(data.data, 'eastConfStandingsByDay', []);

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