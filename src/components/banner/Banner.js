import React, { Component } from 'react'
import styles from './Banner.module.css'

export default class Banner extends Component {
  render() {
    return (
      <React.Fragment>
        <section className={styles.banner} role="banner">
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
        </section>
      </React.Fragment>
    )
  }
}
