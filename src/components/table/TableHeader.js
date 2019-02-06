import React, { Component } from 'react'
import styles from './Table.module.css'

export default class TableHeader extends Component {
  render() {
    return (
      <tr>
        <th>Movie Title</th>
        <th>Genre</th>
        <th>Year</th>
        <th>Gross</th>
      </tr>
    )
  }
}
