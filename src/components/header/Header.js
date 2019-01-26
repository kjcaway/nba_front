import React, { Component } from "react";
import styles from "./Header.module.css";
import {controllMenuBar} from '../../common/common'

export default class Header extends Component {
  clickHandler = () => {
    controllMenuBar();
  };

  render() {
    return (
      <header>
        <div className={styles["menu-toggle"]} data-js="menu-toggle">
          <span
            className={styles["menu-toggle-grippy"]}
            onClick={this.clickHandler.bind(this)}
          >
            Toggle
          </span>
          <span
            className={styles["menu-toggle-label"]}
            onClick={this.clickHandler.bind(this)}
          >
            Menu
          </span>
        </div>
      </header>
    );
  }
}
