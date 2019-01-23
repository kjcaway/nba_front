import React, { Component } from "react";
import styles from "./Header.module.css";

export default class Header extends Component {
  clickHandler = () => {
    document.body.classList.toggle(styles["panel-open"]);
    document
      .querySelector('[data-js="menu-toggle"]')
      .classList.toggle(styles["open"]);
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
