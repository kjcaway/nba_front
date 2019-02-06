import React, { Component } from 'react'
import styles from './Table.module.css'
import TableHeader from './TableHeader'
import TableBody from './TableBody'


export default class Table extends Component {
  render() {
    return (
      <table className={styles['rwd-table']}>
        <TableHeader />
        <TableBody />
      </table>
    )
  }
}
