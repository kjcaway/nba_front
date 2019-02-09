import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";
import {controllMenuBar} from '../../common/common'

class Menu extends React.Component {
  constructor(props) {
    super();
  }

  clickHandler = () => {
    controllMenuBar();
  };

  render() {
    return (
      <div className={styles["hidden-panel"]}>
        <span
          className={styles["hidden-panel-close"]}
          data-js={styles["hidden-panel-close"]}
          onClick={this.clickHandler.bind(this)}
        >
          Close
        </span>

        <div className={styles["hidden-panel-content"]}>
          <nav className={styles["hidden-panel-nav"]}>
            <h3>Quick Look</h3>
            <ul>
              <li>
                <NavLink to="/" title="Search">
                  Search
                </NavLink>
              </li>
              <li>
                <NavLink to="/rankteam" title="Rank">
                  Rank
                </NavLink>
              </li>
              <li>
                <NavLink to="#" title="About">
                  About
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className={styles["hidden-panel-text"]}>
            <p>Hi, this is simple react</p>
          </div>

          <div className={styles["hidden-panel-credits"]}>
            <span>Powered by Kang.</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
