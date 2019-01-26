import React from 'react'
import Loader from 'react-loader-spinner'
import styles from './Spinner.module.css'

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.spinner}>
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height="70"
          width="70"
        />
      </div>
    );
  }
}