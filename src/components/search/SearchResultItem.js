import React, { Component } from 'react'
import styles from './SearchResultItem.module.css'

export default class SearchResultItem extends Component {
  render() {
    return (
      <React.Fragment>
        <li className={styles.item}>
          <div>
            <label>{this.props.left}</label>
            <span className={styles['float-right']}>{this.props.right}</span>
          </div>
        </li>
      </React.Fragment>
    )
  }
}
